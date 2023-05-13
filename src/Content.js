import React, { useState } from "react";

const Content = () => {
  const [name, setName] = useState('Dave');
  const [count, setCount] = useState(0);

  const handleNameChange = () => {
    const names = ["Dave", "Richard", "John"];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
  };

  const handleClick = () => {
    setCount(count + 1);
    console.log(count);
  };
  
  const handleClick2 = (name) => {
    console.log(count);
  };
  
  return (
    <main>
      <p>Hello {name}!</p>
      <button onClick={handleNameChange}>Change Name</button>
      <button onClick={handleClick}>Click it</button>
      <button onClick={handleClick2}>Click it Now</button>
    </main>
  );
};

export default Content;
