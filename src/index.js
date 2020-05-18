import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

const appContent = (
  <div className="app">
    <div className="frame">
      <h1 className="frame_header">
          What do you look forward to in the morning?
      </h1>

      <div className="frame_content">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1200px-A_small_cup_of_coffee.JPG" alt="coffee" />
      </div>
    </div>

    <div className="frame">
      <h1 className="frame_header">
          What keeps you going through the day?
      </h1>

      <div className="frame_content">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Cup_of_coffee_in_Caf%C3%A9_Butter_-_Prenzlauer_Berg%2C_Berlin.jpg/512px-Cup_of_coffee_in_Caf%C3%A9_Butter_-_Prenzlauer_Berg%2C_Berlin.jpg" alt="coffee" />
      </div>
    </div>
  </div>  
);

const rootElement = document.getElementById('react-app');

ReactDOM.render(appContent, rootElement);


