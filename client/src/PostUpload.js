import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PostUpload.css";
function PostUpload() {
  const navigate = useNavigate();
  const initialState = { name: "", description: "", location: "" };
  const [input, setInput] = useState(initialState);
  const [file, setFile] = useState();
  const [load, setLoad] = useState("");
  const handleName = (e) => {
    setInput({ ...input, name: e.target.value });
  };
  const handleDescription = (e) => {
    setInput({ ...input, description: e.target.value });
  };
  const handleLocation = (e) => {
    setInput({ ...input, location: e.target.value });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const d = new Date();
  let mon = month[d.getMonth()];
  let date = d.getDate();
  let year = d.getUTCFullYear();
  let finaldate = date + "-" + mon + "-" + year;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoad("SAVING...");
    const data = new FormData();
    data.append("name", input.name);
    data.append("description", input.description);
    data.append("location", input.location);
    data.append("date", finaldate);
    data.append("file", file);
    console.log(data);
    const response = await axios.post(
      "https://instaclone-tenx.herokuapp.com/create",
      data
    );
    navigate("/postview");
    setLoad("");
    // console.log(response);
  };
  return (
    <>
      <h1 id="form-heading">New Post</h1>
      <div className="form">
        <form encType="multipart/form-data">
          <div className="form-image">
            <input type="file" name="image" onChange={handleImage} required />
          </div>
          <div className="form-name">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="author"
              value={input.name}
              onChange={handleName}
              required
            />

            <input
              type="text"
              id="location"
              name="location"
              placeholder="location"
              value={input.location}
              onChange={handleLocation}
            />
          </div>
          <div className="form-image">
            <input
              type="text"
              id="description"
              name="description"
              placeholder="description"
              value={input.description}
              onChange={handleDescription}
            />
          </div>
          <div className="form-btn">
            <button id="form-btn" onClick={handleSubmit}>
              submit
            </button>
          </div>
        </form>
        <h4>{load}</h4>
      </div>
    </>
  );
}

export default PostUpload;
