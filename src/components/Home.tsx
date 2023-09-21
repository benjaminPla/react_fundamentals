import React from "react";
import HomeCard from "./HomeCard";
import { homeItems } from "../utils/homeItems";

const Home: React.FC = () => {
  return (
    <div className="container">
      <h1 className="display-4">React Fundamentals</h1>
      <div className="alert alert-warning" role="alert">
        <p>🚧 Under Construction 🚧</p>
        <p>
          This project is currently in development, and I'm actively working on
          it.
        </p>
      </div>
      <h2>Overview</h2>
      <p>
        This project is a demonstration of a highly scalable web application
        built using React, Vite, TypeScript, and Jest. It covers all the
        front-end fundamentals.
      </p>
      <HomeCard items={homeItems} />
    </div>
  );
};

export default Home;
