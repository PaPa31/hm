import React, {useEffect, useState} from 'react';
import classes from './Bus.module.css';
import BusRoutes from '../BusRoutes/BusRoutes';

const bus = (props) => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await fetch(`./_rasp${props.num}.html`);
      //https://old.orenburg.ru/background/raspisanie_sadovodcheskikh_marshrutov/marshrut_${props.num}/
      const data = await response.text();
      const parser = new DOMParser();
      const HTMLDocument = parser.parseFromString(data, 'text/html');
      const pTag = [...HTMLDocument.querySelectorAll('p')];
      const pArray = await pTag.map((p) => {
        const pp = p.textContent.trim();
        return pp;
      });

      setPosts(pArray);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (props.num) fetchPosts();
  }, [props.num]);

  return (
    <div>
      <h1>{props.num}</h1>
      <div>
        <div className={classes.BusRoutes}>
          <BusRoutes posts={posts} dir="tuda" name={props.name} />
          <BusRoutes posts={posts} dir="obratno" name={props.name} />
        </div>
      </div>
    </div>
  );
};

export default bus;
