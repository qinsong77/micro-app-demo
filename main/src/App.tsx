import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import microApp from '@micro-zoe/micro-app'

microApp.start()

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.
// @ts-ignore
export default function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/child-umi">umi child</Link>
          </li>
          <li>
            <Link to="/child-cra">cra child</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/child-umi">
            <UmiChild />
          </Route>
          <Route path="/child-cra">
            <CRAChild />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function UmiChild () {
  return (
    <div>
      <h1>UmiChild</h1>
      <micro-app name='child-umi' url='http://localhost:8012/' baseurl='/child-umi'></micro-app>
    </div>
  )
}

function CRAChild() {
  return (
    <div>
      <h1>CRAChild</h1>
      <micro-app name='child-cra' url='http://localhost:3012/' baseurl='/child-cra'></micro-app>
    </div>
  );
}
