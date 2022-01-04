import React, { useState } from "react";
import Button from "./components/UI/Button/Button";
import "./App.css";
import Demo from "./components/Demo/Demo";

function App() {
  const [showData, setShowData] = useState(false);
  const togglePara = () => {
    setShowData((state) => !state);
  };
  return (
    <div className='app'>
      <h1>Hi there!</h1>
      <Demo show={showData} />
      <Button onClick={togglePara}>Toggle Para</Button>
    </div>
  );
}

export default App;
