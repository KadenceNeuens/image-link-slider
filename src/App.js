import React from 'react';
import ImageLinkSlider from './ImageLinkSlider/imageLinkSlider'
import {sliderItems} from './ImageLinkSlider/SliderItems/sliderItems'
import {sliderItems as sliderItems2} from './ImageLinkSlider/SliderItems/sliderItems2'
import './App.css';

function App() {

  var codeText = String.raw
`import {items} from './ImageLinkSlider/SliderItems/Items'
...
return(
< >
  <ImageLinkSlider data={items} height="50%" width="10rem"/>
</>
)`;

var codeText2 = String.raw
`// You can also pass "none" through the easeIn and 
// arrow props to remove the animation or arrow 
// indicators. e.g.
return(
< >
  // No staggered animation
  <ImageLinkSlider data={sliderItems2} 
    height="100vh" width="100vw" easeIn="none"/>
  // No arrow indicators
  <ImageLinkSlider data={sliderItems} 
    height="12rem" width="12rem" arrow="none"/>
</>
)`;

  return (
    <div className="App">

      <header className="App-header">
        <h1>
          Image Link Slider
        </h1>
          <ImageLinkSlider data={sliderItems} height="70%" width="20rem"/>
      </header>

      <div className="ContentContainer">

        <p className="TagText">
          <i>A simple image link slider using react-use-gesture, react-spring, and react-router-dom.</i>
        </p>

        <div className="TextBox">
          <span style={{width: 100 + "%"}}>To use the slider, import a js array file with three fields:</span>
          <ul>
            <li><b>Title:</b> Shown on hover on bottom label (Leave blank for no label)</li>
            <li><b>Image:</b> Path to image to be displayed in this block</li>
            <li><b>Link:</b> Path to link when clicking through</li>
          </ul>
          then pass the file through props as 'data'.

          In addition, you can specify the height and width through props as shown in the example.
        </div>

        <div className="CodeBox">
          <pre><code>{codeText}</code></pre>
        </div>

      </div>

      <ImageLinkSlider data={sliderItems2} height="100vh" width="100vw" easeIn="none"/>

      <div className="ContentContainer">
        <div className="CodeBox">
          <pre><code>{codeText2}</code></pre>
        </div>
        <div className="TextBox">
          <ImageLinkSlider data={sliderItems} height="15rem" width="12rem" arrow="none"/>
        </div>
      </div>
      
      <div className="Footer">
        Made by Kadence Neuens | <a href="https://github.com/KadenceNeuens/">Github</a>
      </div>
    </div>
  );
}

export default App;
