import React from "react";
import Post from "../Post/Post";

const TopPost = () => {
  return (
    <div className="top-post pt-5 px-2 md:px-0">
        <Post></Post>
        <Post></Post>
        <Post></Post>
    </div>
  );
};

export default TopPost;
