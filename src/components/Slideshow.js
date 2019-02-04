import React from 'react';
import { Fade } from 'react-slideshow-image';
 
const fadeImages = [   
  'https://www.barnesandnoble.com/blog/sci-fi-fantasy/wp-content/uploads/sites/4/2017/07/onepiece2.jpg',
  'https://upload.wikimedia.org/wikipedia/el/d/dc/Naruto_Character.jpg',
  'https://upload.wikimedia.org/wikipedia/el/d/dc/Naruto_Character.jpg'
];
 
const fadeProperties = {
  duration: 5000,
  transitionDuration: 1000,
  infinite: true,
  indicators: true,
  arrows: true
}
 
const Slideshow = () => {
  return (
    <Fade {...fadeProperties}>
      <div className="each-fade">
        <h2>One piece</h2>
        <div className="image-container">
          <img alt = 'one piece' src={fadeImages[0]} width = '1200px' height='400px' />
        </div>
      </div>
      <div className="each-fade">
        <h2>Naruto</h2>
        <div className="image-container">
          <img alt = 'naruto' src={fadeImages[1]} width = '1200px' height='400px'/>
        </div>
      </div>
      <div className="each-fade">
        <h2>Naruto</h2>
        <div className="image-container">
          <img alt = 'naruto2' src={fadeImages[2]} width = '1200px' height='400px'/>
        </div>
      </div>
    </Fade>
  );
}
export default Slideshow;