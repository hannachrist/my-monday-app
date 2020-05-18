import React from 'react';
import './index.css';
import coffee from './coffee';
import ImageFrame from './ImageFrame';

class App extends React.Component {
    render () {
        return (
            <div className="app">
                <ImageFrame 
                    header={ coffee[0].headerText }
                    image={ coffee[0].imageUrl }
                    skipHeader={ false }
                />

                <ImageFrame
                    header={ coffee[1].headerText }
                    image={ coffee[1].imageUrl }
                    skipHeader={ false }
                >
                <h3>Some header</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </ImageFrame>
            </div>
        );
    }    
}

export default App;