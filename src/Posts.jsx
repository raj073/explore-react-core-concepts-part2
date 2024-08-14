import React, { useEffect, useState } from "react";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  const postsStyle = {
    border: "2px solid pink",
    margin: "15px",
    padding: "15px",
    borderRadius: "8px",
  };

  return (
    <div style={postsStyle}>
      <h2>Posts: {posts.length}</h2>
    </div>
  );
}
