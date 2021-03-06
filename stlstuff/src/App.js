import "./App.css";
import Header from "./components/Header";
import React, { useState } from "react";
import Popup from "./components/Popup";
import ObjectWindow from "./components/ObjectWindow/ObjectWindow";
import {useCookies} from "react-cookie";

function App() {
  const[ cookies] = useCookies(["showPopup"]);
  const [isOpen, setIsOpen] = useState(!cookies.showPopup);
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
        <div>{isOpen && <Popup handleClose={togglePopup}/>}</div>
      </div>
    </div>
  );
}

export default App;
