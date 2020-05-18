import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

const coffee = [
  {
    headerText: 'What do you look forward to in the morning?',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1200px-A_small_cup_of_coffee.JPG'
  },
  {
    headerText: 'What keeps you going through the day?',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Cup_of_coffee_in_Caf%C3%A9_Butter_-_Prenzlauer_Berg%2C_Berlin.jpg/512px-Cup_of_coffee_in_Caf%C3%A9_Butter_-_Prenzlauer_Berg%2C_Berlin.jpg'
  }
]

const imageFrame = (props) => {
  return (
    <div className="frame">
      <h1 className="frame_header">
          { props.header }
      </h1>

      <div className="frame_content">
        <img src={ props.image } />
      </div>
    </div>
  )
}

const appContent = (
  <div className="app">
    <imageFrame 
      header={ coffee[0].headerText }
      image={ coffee[0].imageUrl }
    />

    <imageFrame
      header={ coffee[1].headerText }
      image={ coffee[1].imageUrl }
    />
  </div>  
);

const rootElement = document.getElementById('react-app');

ReactDOM.render(appContent, rootElement);


