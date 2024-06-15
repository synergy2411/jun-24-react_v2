import { useEffect, useState } from "react";

function UseEffectDemo() {
  const [toggle, setToggle] = useState(true);
  const [counter, setCounter] = useState(0);
  const [query, setQuery] = useState("");
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    console.log("Effect works");
    return () => {
      console.log("Clean Up");
    };
  }, [counter]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        if (query.trim() !== "") {
          const response = await fetch(
            `https://api.github.com/users/${query}/repos`
          );
          const repos = await response.json();
          setRepos(repos);
        }
      } catch (err) {
        console.error(err);
      }
    };
    const notifer = setTimeout(() => {
      fetchRepos();
    }, 1500);
    return () => {
      clearTimeout(notifer);
    };
  }, [query]);

  return (
    <>
      <h1>Use effect in action</h1>
      <button className="btn btn-primary" onClick={() => setToggle(!toggle)}>
        Toggle
      </button>

      <button
        className="btn btn-secondary"
        onClick={() => setCounter(counter + 1)}
      >
        {counter}
      </button>

      {toggle && <p>This paragraph will toggle</p>}

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <hr />
      <ul>
        {Array.isArray(repos) &&
          repos.map((repo) => <li key={repo.id}>{repo.name}</li>)}
      </ul>
    </>
  );
}

export default UseEffectDemo;
