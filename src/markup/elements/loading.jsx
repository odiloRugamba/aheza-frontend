import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import LoadingImage from "../../images/loading.gif";
import { FormattedMessage } from 'react-intl';


const LoadingComp = () => {
 return (
  <div>
   <div className='loadingComp'>
    <div className="page-banner-entry text-center">
     <h2 className='title-80' >
<FormattedMessage id="LoadingNot" defaultMessage="LoadingNot" />
     </h2>
    </div>
    <div>
     <img src={LoadingImage} />
    </div>
   </div>
  </div>
 );
}

export default LoadingComp;
