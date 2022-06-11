import React from 'react';
import classes from './BusRoutes.module.css';

const busRoutes = (props) => {
  const length = props.posts.length;
  let polReisa = 0;
  let tudaObratno = [];
  for (let i = 0; i < length; i++) {
    if (/^\d/.test(props.posts[i])) {
      tudaObratno[polReisa] = props.posts[i];
      polReisa++;
    }
  }

  console.log('polReisa ' + polReisa);
  console.log('tudaObratno ' + tudaObratno);

  let count = 0;
  const pp = length;
  console.log('pp = ' + pp);

  function ShowTime({p}) {
    return (
      <tr>
        <td>{p}</td>
      </tr>
    );
  }

  return (
    <div className={classes.BusRoutes}>
      {polReisa > 0 && props.dir === 'tuda' ? (
        <p>{props.name}:</p>
      ) : (
        <p>Сады:</p>
      )}
      <table>
        <tbody>
          {polReisa > 0 && props.dir === 'tuda'
            ? tudaObratno.map((p, id) =>
                id < polReisa / 2 ? <ShowTime key={id} p={p} /> : null,
              )
            : tudaObratno.map((p, id) =>
                id >= polReisa / 2 ? <ShowTime key={id} p={p} /> : null,
              )}
        </tbody>
      </table>
    </div>
  );
};

export default busRoutes;
