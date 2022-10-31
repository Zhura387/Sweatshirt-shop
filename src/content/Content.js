import './Content.css';
import React from 'react';
import { Carousel } from 'antd';


function Content(props) {

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  const contentStyle = {
    height: '100%',
    width: '100%',
    color: '#000000',
    lineHeight: '160px',
    textAlign: 'center',
    borderRadius: '5%',
    background: 'linear-gradient(36.83deg, rgba(107, 34, 119, 0.74) 16.4%, rgba(165, 120, 172, 0.74) 61.64%, rgba(255, 252, 255, 0.74) 131.65%)',
  };


  return (
    <div className="content">
      <div className='contentStart'>
        <div className='contentText'>
          <p className='contentTitle'>Твой новый свитшот</p>
          <p className='contentTitle'>всего за пару кликов </p>
          <p>Онлайн-магазин свитшотов на ваш вкус и цвет, по низким ценам и хорошим качеством !</p>

        </div>

        <div className='slider'>
          <Carousel afterChange={onChange}>
            <div>
              <img style={contentStyle} src='./11.png' alt='swit-1'></img>
            </div>
            <div>
              <img style={contentStyle} src='./12.png' alt='swit-2'></img>
            </div>
            <div>
              <img style={contentStyle} src='./13.png' alt='swit-3'></img>
            </div>
            <div>
              <img style={contentStyle} src='./14.png' alt='swit-4'></img>
            </div>
          </Carousel>
        </div>
      </div>
      <div className='contentEnd'>
        <div> <img src='/1.png' alt='Swit'></img></div>
      </div>

    </div>
  )
}
export default Content;