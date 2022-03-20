import React from "react";
import { useState } from "react";

const Content = () => {
  const [name, setName] = useState("Mauro");
  const [count, setCount] = useState(0);
  const handleNameChange = () => {
    const names = ["Domagoj", "Nikola", "Mauro"];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
  };
  const handleClick = () => {
    setCount(count + 1);
    console.log(count);
  };
  const handleClickParam = (name) => {
    console.log(`${name} was clicked`);
  };
  const handleClickE = (e) => {
    console.log(e.target.innerText);
  };
  return (
    <main>
      <p onDoubleClick={handleClick}>Hello {name}!</p>
      <button onClick={handleNameChange}>Change name</button>
      <button onClick={handleClick}>Click it</button>
      <button onClick={(e) => handleClickE(e)}>Click it</button>
    </main>
  );
};

export default Content;
