import React,{useState} from "react";
import {useCookies} from "react-cookie";

const Popup = props => {
  const [dontShowAgain, setDontShowAgain] = useState(false);
  const[ cookies, setCookie] = useCookies(["showPopup"]);

  const handleOnChange = () =>{
    
    setCookie("showPopup",dontShowAgain,{maxAge: 604800});//short expiry time for dev purposes
    setDontShowAgain(!dontShowAgain);
  };
  
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {<div className="popupText">
              <b>This website is a work in progress</b>
              <p>STLstuff is still under development. I will focus on frontend first, then take care of the database and backend side of the website. Key features that I want are a realiable search algorithm to find relevant models, adding a dicoverability feature that allows you to easiely browse 3D models that you might be interested into. The addition of a quick-download button
              </p>
              <p>Also need to add a checkmark to stop displaying this every time (nice way to learn abt cookies ig 😃 )</p>
              <p>Here it is! click following checkbox to not get notified again<input type="checkbox" onChange={handleOnChange}></input></p>
              </div>}
      </div>
    </div>
  );
};
 
export default Popup;