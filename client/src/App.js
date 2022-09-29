import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import { LandingPage } from "./LandingPage";
import PostContainer from "./PostContainer";
import PostUpload from "./PostUpload";
// const LazyPost = React.lazy(() => import("./PostContainer"));
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/postview" element={<PostContainer />} />
        <Route path="/upload" element={<PostUpload />} />
      </Routes>
    </Router>
  );
}

export default App;
