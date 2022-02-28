import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import LoadingImage from "../../images/loading.gif";


const LoadingComp = () => {
 console.log('loading')
 return (
  <div className='loadingComp'>
   <img src={LoadingImage} />
  </div>
 );

}

export default LoadingComp;