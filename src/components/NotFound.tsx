import React from "react";

const NotFound: React.FC = () => {
  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
      data-testid="container"
    >
      <div className="text-center" data-testid="div">
        <h1>404 - Not Found</h1>
        <p>The page you are looking for does not exist.</p>
      </div>
    </div>
  );
};

export default NotFound;
