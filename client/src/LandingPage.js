import React from "react";
import "./LandingPage.css";
import { useNavigate } from "react-router-dom";
export const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <section className="body">
      <main>
        <section className="LandingPage-img">
          <img
            className="Landing-img"
            src="https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aW5zdGFncmFtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="Instagram Home Page"
          ></img>
        </section>
        <section className="LandingPage-welcome">
          <h1>Welcome to Instagram</h1>
          <button onClick={() => navigate("/postview")}>Enter</button>
        </section>
      </main>
    </section>
  );
};
