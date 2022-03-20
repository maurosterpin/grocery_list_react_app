import React from "react";

const Content = () => {
  const handleNameChange = () => {
    const names = ["Domagoj", "Nikola", "Mauro"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };
  const handleClick = () => {
    console.log("You clicked it");
  };
  return (
    <main>
      <p>Hello {handleNameChange()}!</p>
      <button onClick={handleClick}>Click it</button>
    </main>
  );
};

export default Content;
