import React from "react";
import "./PostContainer.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";
import { useNavigate } from "react-router-dom";
function PostContainer() {
  const [apidata, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://instaclone-tenx.herokuapp.com/all"
      );
      console.log(response.data);
      setData(response.data.reverse());
    };
    getData();
  }, []);

  return (
    <div className="PostContainer">
      <header className="PostContainer-header">
        <div onClick={() => navigate("/")}>
          <i className="fa-brands fa-instagram logo"></i>
          <span id="instagram">Instagram</span>
        </div>
        <div onClick={() => navigate("/upload")}>
          <i className="fa-solid fa-camera cam"></i>
        </div>
      </header>
      {apidata.map((item, index) => {
        return <Post postInfo={item} key={index} />;
      })}
    </div>
  );
}

export default PostContainer;
