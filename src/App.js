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
                />

                <ImageFrame
                    header={ coffee[1].headerText }
                    image={ coffee[1].imageUrl }
                />
            </div>
        );
    }    
}

export default App;