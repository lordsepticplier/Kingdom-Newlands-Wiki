import './Info.css';
import React, { useState } from "react";
import RightArrow from './images/right_arrow.png'
import LeftArrow from './images/left_arrow.png'


function Info({ item}) {
  
  const [count, setCount] = useState(1);
  if(count>1){
    return (
      <div className='box'>
        <div className='image'>{item.image}</div>
        <h3 className='title'>{item.name}</h3>
        <p className='infomation'>{item.desc}</p>
        <button onClick={() => setCount(count - 1) }className='close'><img src={RightArrow} width="100px" height="auto" alt="logo" /></button>
      </div>   
    );
  }
  else{
    return (
      <div className='box'>
        <div className='image'>{item.image}</div>
        <h3 className='title'>{item.name}</h3>
        <button onClick={() => setCount(count + 1)}className='expand'><img src={LeftArrow} width="100px" height="auto" alt="logo" /></button>
      </div>
      
    );
  }
}

export default Info;