import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Pagination from "../Components/Pagination";
import "./Posts.css";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  const getPosts = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        // console.log(res);
        setPosts(res.data);
      })
  };

  useEffect(() => {
    getPosts()
  }, []);

  return (
    <div className="posts_container">
      <h1>게시판</h1>
      <ul className="posts_ul">
        {posts.slice(offset, offset + limit).map(({ id, title, body, userId }) => (
          <li className="posts_li" key={id} >
            <Link to={`/posts/${id}`} >
              <div className="posts_wrapper">
                <div className="posts_title">
                  {id}. {title}
                </div>
                <div className="posts_userId">
                  {'작성자' + userId}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <div className="pagination">
        <Pagination
          total={posts.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </div>
    </div>
  );
};


export default Posts;
