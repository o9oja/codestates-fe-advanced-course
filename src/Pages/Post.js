import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router';

import "./Post.css";

const Post = () => {
  const params = useParams();

  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);

  const getPost = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      .then((res) => {
        // console.log(res.data);
        setPost(res.data);
      })
  };

  const getComments = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments`)
      .then((res) => {
        let filtered = res.data.filter(el => {
          return el.postId === Number(params.postId)
        })
        console.log('filtered', filtered);
        setComments(filtered);
      })
  };



  useEffect(() => {
    getPost()
    getComments()
  }, []);

  return (

    <div className="post_container">
      <div className="post">
        <div className="post_title">{`${post.title}`}</div>
        <div className="post_userId">{`작성자   ${post.userId}`}</div>
        <div className="post_body">{`${post.body}`}</div>
        <div className="post_length">{`댓글 : ${comments.length}개`}</div>
      </div>
      <div className="post_comment">
        {comments.map(comment => {
          return (<li key={comment.id} className="post_comment_li">
            <div className="comment_name">{`${comment.name}`}</div>
            <div className="comment_body">{`${comment.body}`}</div>
          </li>)
        })}
      </div>
    </div >

  );
};

export default Post;
