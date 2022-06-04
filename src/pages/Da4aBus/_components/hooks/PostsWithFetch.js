import React, {useState, useEffect} from 'react';
import card from '@site/src/css/markdown.module.css';
import CodeBlock from '@theme/CodeBlock';
import BrowserWindow from '@site/src/components/BrowserWindow';

function PostsWithFetch({num}) {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await fetch(`./_rasp${num}.html`);
      const data = await response.text();
      //setPosts(postsData.match(/<p.*/g));
      const parser = new DOMParser();
      const HTMLDocument = parser.parseFromString(data, 'text/html');
      //return HTMLDocument;
      //console.log([...HTMLDocument.querySelectorAll('p')]);
      setPosts([...HTMLDocument.querySelectorAll('p')]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (num) fetchPosts();
  }, [num]);

  const usePosts = posts.map((post, id) => {
    const p = post.textContent.trim();
    if (!p.match(/(Маршрут|Перевозчик)/)) {
      if (p.match(/^\d/)) {
        return (
          <tr key={id}>
            <td> {post.textContent.trim()}</td>
          </tr>
        );
      }
    }
  });

  return (
    <div>
      <h1>Fetch API With UseState and UseEffect</h1>
      <h2>Dummy API - https://jsonplaceholder.typicode.com/posts</h2>
      <div>
        <div className={card.wrap}>
          <div className={card.maxwidth}>
            <table>
              <thead>
                <tr>
                  <th>{num}</th>
                </tr>
              </thead>
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
