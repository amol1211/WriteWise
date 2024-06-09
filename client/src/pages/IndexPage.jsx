/* import { useEffect, useState } from "react";
import Post from "../Post";

function IndexPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/post").then((response) => {
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
 */

import { useEffect, useState } from "react";
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
