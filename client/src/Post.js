import React from "react";
import "./Post.css";
function Post(props) {
  // const date = new Date().toDateString();
  return (
    <div className="Post">
      <header className="Post-header">
        <div className="Post-header-name">
          <span>{props.postInfo.name}</span>
          <br />
          <span id="Post-header-city">{props.postInfo.location}</span>
        </div>
        <div className="Post-header-button">
          <i className="fa-solid fa-ellipsis"></i>
        </div>
      </header>
      <section className="Post-img">
        <img src={props.postInfo.postimage.url} />
      </section>
      <section className="Post-img-desc">
        <div className="likes">
          <i className="fa-regular fa-heart one"></i>
          <i className="fa-regular fa-comment two"></i>
          <br />
          <span id="likes">{props.postInfo.likes} likes</span>
        </div>
        <div className="date">{props.postInfo.date}</div>
      </section>
      <footer className="Post-footer">
        <p>{props.postInfo.description}</p>
      </footer>
    </div>
  );
}

export default Post;
