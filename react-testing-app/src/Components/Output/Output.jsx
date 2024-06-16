import { useEffect, useState } from "react";

function Output() {
  const [toggle, setToggle] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("http://jsonplaceholder.typicode.com/posts");
      const posts = await response.json();
      setPosts(posts);
    };
    fetchPosts();
  }, []);

  return (
    <>
      <h1>Output component in action</h1>
      <p>We will test this paragraph</p>

      <button onClick={() => setToggle(!toggle)}>Toggle</button>

      {toggle && <p>Toggle is true</p>}
      {!toggle && <p>Toggle is false</p>}

      <hr />

      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}

export default Output;
