import React from "react";

interface ITitleProps {
  items: MenuItem[];
}

const Title: React.FC<ITitleProps> = ({ text }) => {
  return <h1>{text}</h1>;
};

export default Title;
