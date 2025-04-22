import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import ArticleList from "./ArticleList";
import About from "./About";

function App() {
  return (
    <div className="App">
      <Header name="My Blog" />
      <About image="https://via.placeholder.com/215" about="Welcome to my blog where I share interesting articles." />
      <ArticleList blogData={blogData.posts} />
    </div>
  );
}

export default App;
