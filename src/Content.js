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
  const handleClickParam = (name) => {
    console.log(`${name} was clicked`);
  };
  const handleClickE = (e) => {
    console.log(e.target.innerText);
  };
  return (
    <main>
      <p onDoubleClick={handleClick}>Hello {handleNameChange()}!</p>
      <button onClick={handleClick}>Click it</button>
      <button onClick={() => handleClickParam(handleNameChange())}>
        Click it
      </button>
      <button onClick={(e) => handleClickE(e)}>Click it</button>
    </main>
  );
};

export default Content;
