import './App.css';
import Header from './elements/Header';
import React, { useState } from 'react';
import Popup from './elements/Popup';

function App() {
  const [isOpen, setIsOpen] = useState(true);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="App">
      <Header/>

      <div >
        <p className="mainText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div>
          {isOpen && <Popup
            content={<>
              <b>This website is a work in progress</b>
              <p>STLstuff is still under development, no database (or pretty much anything) has been implemented yet. I will focus on frontend first, then take care of the database and backend side of the website. Key features that I want are a realiable search algorithm to find relevant models, adding a dicoverability feature that allows you to easiely browse 3D models that you might intersted into. The addition of a quick-download button
              </p>
              <p>Also need to add a checkmark to stop displaying this every time</p>
            </>}
            handleClose={togglePopup}
          />}
        </div>
      </div>

    </div>
  );
}

export default App;
