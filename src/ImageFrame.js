import React from 'react';

import './ImageFrame.css';

const ImageFrame = (props) => {
    return (
      <div className="frame">
        
        {!props.skipHeader && (
            <h1 className="frame_header">
                { props.header }
            </h1>
        )}
  
        <div className="frame_content">
          <img src={ props.image } />
        </div>

        {props.children && (
            <div className="frame_children">
                { props.children }
            </div>
        )}    

      </div>
    )
  }

export default ImageFrame;  
