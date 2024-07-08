import { useEffect, useState } from "react";
import Post from "../Post";
const API_URL = import.meta.env.VITE_API_URL;

function IndexPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/post`).then((response) => {
      response.json().then((posts) => {
        setPosts(posts);
      });
    });
  }, []);

  return (
    <>
      {posts.length > 0 &&
        posts.map((post) => <Post key={post._id} {...post} />)}
    </>
  );
}

export default IndexPage;

/* import { useEffect, useState } from "react";
import Post from "../Post";

function IndexPage({ fetchInfo }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/post`)
      .then((response) => response.json())
      .then((posts) => {
        setPosts(posts);
        fetchInfo(); // Call fetchInfo here if needed
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, [fetchInfo]); // useEffect dependency

  return (
    <>
      {posts.length > 0 &&
        posts.map((post) => <Post key={post._id} {...post} />)}
    </>
  );
}

export default IndexPage;
 */

/* import { useEffect, useState } from "react";
import Post from "../Post";

function IndexPage({ fetchInfo }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, [fetchInfo]); // useEffect dependency

  const fetchPosts = () => {
    fetch(`${import.meta.env.VITE_API_URL}/post`)
      .then((response) => response.json())
      .then((posts) => {
        setPosts(posts);
        fetchInfo(); // Call fetchInfo here if needed
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  };

  const addPost = (newPost) => {
    // Optimistically add the new post to the UI
    setPosts([...posts, newPost]);

    // Assuming your API endpoint for creating a post returns the created post
    fetch(`${import.meta.env.VITE_API_URL}/post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    })
      .then((response) => response.json())
      .then((createdPost) => {
        // Update the posts state with the updated list from the server
        fetchPosts(); // Refetch all posts after successful creation
      })
      .catch((error) => {
        console.error("Error creating post:", error);
        // Rollback the optimistic update on error if needed
        // Optionally handle error state or retry logic here
      });
  };

  return (
    <>
      {posts.length > 0 &&
        posts.map((post) => <Post key={post._id} {...post} />)}
    </>
  );
}

export default IndexPage; */
