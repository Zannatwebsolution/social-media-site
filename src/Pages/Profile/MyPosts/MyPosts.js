import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import Post from '../../Home/Post/Post';

const MyPosts = () => {
    const {user} = useContext(AuthContext);
    const [myPost, setMyPost] = useState([]);
    useEffect(() => {
      fetch(`http://localhost:5000/posts/${user?.email}`, {
        authorization: `token ${localStorage.getItem("token")}`,
      })
        .then((res) => res.json())
        .then((data) => setMyPost(data));
    }, [user?.email]);
    return (
        <div className="top-post pt-5 px-2 md:px-0">
            {myPost.reverse().map((post)=><Post key={post._id} data={post}></Post>)}
        </div>
    );
};

export default MyPosts;