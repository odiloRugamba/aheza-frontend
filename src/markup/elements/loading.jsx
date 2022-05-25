import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import LoadingImage from "../../images/loading.gif";


const LoadingComp = () => {
 // console.log('loading')
 return (
  <div>
   <div className='loadingComp'>
    <div className="page-banner-entry text-center">
     <h2 style={{ fontSize: 80 }}>Loading</h2>
    </div>
    <div>
     <img src={LoadingImage} />
    </div>
   </div>
  </div>
 );
}

export default LoadingComp;