import React from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

import Posts from "./Pages/Posts"
import Post from "./Pages/Post";
import "./App.css";

const App = (props) => {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/posts/:postId" element={<Post />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
