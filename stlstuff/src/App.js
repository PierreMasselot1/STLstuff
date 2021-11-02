import "./App.css";
import Header from "./components/Header";
import React, { useState } from "react";
import Popup from "./components/Popup";
import ObjectWindow from "./components/ObjectWindow/ObjectWindow";

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [data, setData] = React.useState(null);

  const backendLocation = process.env.BACKENDADDRESS || "http://localhost:5050";

  React.useEffect(() => {
    fetch(backendLocation + "/api/testAPI")
      .then((res) => res.json())
      .then((data) => setData(data.response));
  });

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <Header />

      <div className="Content">
        <p className="mainText">{!data ? "Loading..." : data}</p>
        <ObjectWindow/>
        <div>{isOpen && <Popup handleClose={togglePopup} s />}</div>
      </div>
    </div>
  );
}

export default App;
