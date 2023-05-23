import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import about1 from './image/about1.jpg';
import slid1 from './image/slid1.jpg';
const Destenation = () => {
    const images = [
        require('./image/slid1.jpg'),
        require('./image/about1.jpg'),
        require('./image/about1.jpg'),
    ];

  return (
    <div>
       <Slide autoplay={true}>
            <div className="each-slide-effect" >
                <div style={{ 'backgroundImage': `url(${images[0]})`,  display: 'flex',   alignItems: 'center',
            justifyContent: 'center',  backgroundSize: 'cover', height: '500px' }}>
                    <span style={{padding: '20px',
  fontSize: '20px',
  background: '#efefef',
  textAlign: 'center'}}>Slide 1</span>
                </div>




            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})`,  display: 'flex',   alignItems: 'center',
            justifyContent: 'center',  backgroundSize: 'cover', height: '350px' }}>
                    <span style={{padding: '20px',
  fontSize: '20px',
  background: '#efefef',
  textAlign: 'center'}}>Slide 2</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})`,  display: 'flex',   alignItems: 'center',
            justifyContent: 'center',  backgroundSize: 'cover', height: '350px' }}>
                    <span style={{padding: '20px',
  fontSize: '20px',
  background: '#efefef',
  textAlign: 'center'}}>Slide 3</span>
                </div>
            </div>
        </Slide>
    </div>
  )
}

export default Destenation;
