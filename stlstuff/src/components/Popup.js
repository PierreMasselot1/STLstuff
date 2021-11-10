import React from "react";
 
const Popup = props => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {<div className="popupText">
              <b>This website is a work in progress</b>
              <p>STLstuff is still under development. I will focus on frontend first, then take care of the database and backend side of the website. Key features that I want are a realiable search algorithm to find relevant models, adding a dicoverability feature that allows you to easiely browse 3D models that you might be interested into. The addition of a quick-download button
              </p>
              <p>Also need to add a checkmark to stop displaying this every time (nice way to learn abt cookies ig 😃 )</p>
              <input type="checkbox" name="dontShowAgain"></input>
              </div>}
      </div>
    </div>
  );
};
 
export default Popup;