import React from "react";
import Title from "./Title";

const NotFound: React.FC = () => {
  return (
    <>
      <Title text="404 - Not Found" />
      <p>The page you are looking for does not exist.</p>
    </>
  );
};

export default NotFound;
