import React from 'react';
import ImageLinkSlider from './ImageLinkSlider/imageLinkSlider'
import {sliderItems} from './ImageLinkSlider/SliderItems/sliderItems'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Image Link Slider
        </h1>
        <div className="SliderContainer">
          <ImageLinkSlider data={sliderItems}/>
        </div>
        <p>A simple React image link slider component</p>
      </header>
      <p>
        A simple image link slider using react-use-gesture and react-spring.
      </p>
    </div>
  );
}

export default App;
