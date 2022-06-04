import React, {useState, useEffect} from 'react';
import card from '@site/src/css/markdown.module.css';
import CodeBlock from '@theme/CodeBlock';
import BrowserWindow from '@site/src/components/BrowserWindow';

function PostsWithFetch() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('./_rasp297.html');
      const data = await response.text();
      //setPosts(postsData.match(/<p.*/g));
      const parser = new DOMParser();
      const HTMLDocument = parser.parseFromString(data, 'text/html');
      //return HTMLDocument;
      console.log([...HTMLDocument.querySelectorAll('p')]);
      setPosts([...HTMLDocument.querySelectorAll('p')]);
    };

    fetchPosts();
  }, []);

  function displayTitles(html) {
    const listElem = document.getElementById('results');

    const ps = html.querySelectorAll('p');

    ps.forEach((p) => {
      const listItem = document.createElement('li');
      listItem.innerText = p.textContent;
      listElem.appendChild(listItem);
    });
  }
  //const html = posts;
  //displayTitles(html);

  const usePosts = posts.map((post, id) => {
    return <td key={id}>{post.textContent.trim()}</td>;
  });

  return (
    <div>
      <h1>Fetch API With UseState and UseEffect</h1>
      <h2>Dummy API - https://jsonplaceholder.typicode.com/posts</h2>
      <div>
        <div className={card.wrap}>
          <div className={card.maxwidth}>
            <table>
              <tbody>
                <tr>{posts && usePosts}</tr>
              </tbody>
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
