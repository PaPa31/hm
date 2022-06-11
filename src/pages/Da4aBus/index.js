////import React from 'react';
//import React, {useState, useEffect} from 'react';
//import card from '@site/src/css/markdown.module.css';
//import CodeBlock from '@theme/CodeBlock';
//import BrowserWindow from '@site/src/components/BrowserWindow';
//import useFetch from './_components/hooks/useFetch';

////import useFetch from './_components/hooks/useFetch';

//////const TransactionCard = ({ keyword }) => {
//////  const dataUrl = useFetch({ keyword });
//const numBus = '297';

//const dataUrl = useFetch({numBus});

////var $$ = (x) => [...document.querySelectorAll(x)];

////function VeiwTable() {
////  return (
////    <table>
////      <tbody>
////        <tr>
////          {dataUrl.forEach((element) => {
////            <td>{element}</td>;
////          })}
////          {/*{p.map((cell, k) => (
////            <td key={k}>{cell}</td>
////          ))}*/}
////        </tr>
////      </tbody>
////    </table>
////  );
////}

////const Da4aBus = () => {
////  return (
////    <div>
////      <BusesMenu />
////      <div className={card.wrap}>
////        <div className={card.maxwidth}>
////          <VeiwTable />
////        </div>
////        <div className={card.maxwidth}>
////          <BrowserWindow>
////            run in bash: <code>id -u</code> for guid
////          </BrowserWindow>
////        </div>
////      </div>
////    </div>
////  );
////};

////const DataParse = () => {
////  return <div></div>;
////};

////export default Da4aBus;

//const BusesMenu = () => {
//  return (
//    <div class="dropdown dropdown--hoverable">
//      <button class="button button--primary">Выбери маршрут</button>
//      <ul class="dropdown__menu">
//        <li>
//          <a class="dropdown__link" href="#url">
//            100
//          </a>
//        </li>
//        <li>
//          <a class="dropdown__link" href="#url">
//            110
//          </a>
//        </li>
//        <li>
//          <a class="dropdown__link" href="#url">
//            296
//          </a>
//        </li>
//        <li>
//          <a class="dropdown__link" href="#url" onClick={useFetch('297')}>
//            297
//          </a>
//        </li>
//      </ul>
//    </div>
//  );
//};

//function Da4aBus() {
//  return (
//    <div>
//      <BusesMenu />
//      <div className={card.wrap}>
//        <div className={card.maxwidth}>
//          <div className="container">{usePosts}</div>
//        </div>
//        <div className={card.maxwidth}>
//          <BrowserWindow>
//            run in bash: <code>id -u</code> for guid
//          </BrowserWindow>
//        </div>
//      </div>
//    </div>
//  );
//}

//export default Da4aBus;

//import './Da4aBus.css';
import React from 'react';
import Link from '@docusaurus/Link';
import {Redirect} from '@docusaurus/router';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Interpolate from '@docusaurus/Interpolate';
import PostsWithFetch from './_components/hooks/PostsWithFetch';
import PostsWithAxios from './_components/hooks/PostsWithAxios';

function M297() {
  return <PostsWithFetch num={297} />;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function Da4aBus() {
  return (
    <div>
      <Interpolate
        values={{
          firstName: 'Sébastien',
          website: (
            <Link to="https://docusaurus.io" className="my-website-class">
              website
            </Link>
          ),
        }}>
        {'Hello, {firstName}! How are you? Take a look at my {website}'}
      </Interpolate>
      <Router>
        <div className="App">
          <nav>
            <ul>
              <li>
                <Link to="/hm/myComponents">
                  Home (Default with Fetch Api Example)
                </Link>
              </li>
              <li>
                <Link to="/hm/myComponents/axios">
                  Click Here - Posts With Axios Example
                </Link>
              </li>
            </ul>
          </nav>
          <Switch>
            {/*<Redirect from="/hm/myComponents" to="/hm/myComponents/297" />*/}
            <Route path="/hm/myComponents">
              <M297 />
            </Route>
          </Switch>
          {/*<Route exact path="/hm/MyComponents/">
            {true ? (
              <Redirect to="/hm/MyComponents/297">
                <PostsWithFetch num={297} />
              </Redirect>
            ) : (
              <PostsWithFetch num={297} />
            )}
          </Route>*/}

          {/*<Switch>
            <Route path="/hm/myComponents/fetchapi">
              <PostsWithFetch num={297} />
            </Route>
            <Route path="/hm/myComponents/axios">
              <PostsWithAxios />
            </Route>
            <Route path="/hm/myComponents">
              <PostsWithFetch num={297} />
            </Route>
          </Switch>*/}
        </div>
      </Router>
    </div>
  );
}
export default Da4aBus;
