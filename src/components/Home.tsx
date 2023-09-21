import React from "react";
import HomeCard from "./HomeCard";

const Home: React.FC = () => {
  const items = [
    {
      title: "React Basics",
      checks: [
        "Use props to pass data to child components.",
        "Manage component state using useState and useEffect hooks.",
      ],
    },
    {
      title: "Routing",
      checks: [
        "Implement client-side routing using React Router or a similar library.",
        "Set up routes for different pages like home, product listings, product details, cart, and checkout.",
      ],
    },
  ];

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
      <HomeCard items={items} />
    </div>
  );
};

export default Home;
