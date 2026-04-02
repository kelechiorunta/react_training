import { useEffect, useState } from "react";

// Working with the useEffect Hook
// useEffect() Hook: In React, an effect is anything that happens outside the component rendering process.
// That is, anything React does not handle directly as part of rendering the UI.
// Common examples include fetching data, updating the browser tab's title,
// reading from or writing to the browser's local storage, getting the user's location, and much more.
// These operations interact with the outside world and are known as side effects.

// React provides the useEffect hook to let you handle those side effects.
// useEffect lets you run a function after the component renders or updates.

// By the end of this class, make an asynchronous fetch api call
// posts: https://jsonplaceholder.typicode.com/posts - Generic posts (100 items).
// using useEffect

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function TaskOneA() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error,setError] = useState<string | null > (null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchPost = async () => {
      try{

        const requests = Array.from({ length: 100 }, (_, i) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${i + 1}`, {
            signal: controller.signal,
          }).then((res) => {
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            return res.json() as Promise<Post>;
          })
        );

        const data = await Promise.all(requests);
        setPosts(data);

      } catch( err ) {

        if( err instanceof DOMException && err.name == "AbortError" ) return ;
        setError( err instanceof Error ? err.message : "Something went wrong" );

      } finally {

        setLoading( false );

      }
    }

    fetchPost();

    return () => controller.abort();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
     <ul className="list-group">
      {posts.map((post) => (
        <li key={post.id} className="list-group-item">
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
}
