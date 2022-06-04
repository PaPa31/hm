import React, {useState, useEffect} from 'react';
import card from '@site/src/css/markdown.module.css';
import CodeBlock from '@theme/CodeBlock';
import BrowserWindow from '@site/src/components/BrowserWindow';

function PostsWithFetch() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('./_rasp297.html');
      const postsData = await response.text();
      setPosts(postsData.match(/<p.*/g));
    };
    fetchPosts();
  }, []);

  const usePosts = posts.map((post, id) => {
    return <tr key={id}>{post.replace(/.*>([^<]+)<\/.*/g, '$1')}</tr>;
  });

  return (
    <div>
      <h1>Fetch API With UseState and UseEffect</h1>
      <h2>Dummy API - https://jsonplaceholder.typicode.com/posts</h2>
      <div>
        <div className={card.wrap}>
          <div className={card.maxwidth}>
            <table>
              <tbody>{posts && usePosts}</tbody>
            </table>
          </div>
          <div className={card.maxwidth}>
            <BrowserWindow>
              run in bash: <code>id -u</code> for guid
            </BrowserWindow>
          </div>
        </div>
      </div>
      {/*<div className="container">{posts && usePosts}</div>*/}
    </div>
  );
}

export default PostsWithFetch;
