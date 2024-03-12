// 2. API-Anrop och Rendering (3p)
// Använd fetch för att hämta posts från https://jsonplaceholder.typicode.com/posts.
// Visa endast titlarna för de första 5 inläggen.
// Varje titel ska vara en klickbar länk som, när man klickar på den,
// loggar postens ID till konsolen. Använd <button> för den klickbara länken.

import React, { useState, useEffect } from "react";

const Post = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setPosts(data.slice(0, 5));
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const handleClick = (postId) => {
    console.log("Clicked on post ID:", postId);
  };

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <button onClick={() => handleClick(post.id)}>{post.title}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Post;
