import React, { Component } from 'react';
import {
 FacebookShareButton,
 LinkedinShareButton,
 TwitterShareButton
} from "react-share";
import { useHistory, useParams, useLocation } from "react-router-dom";



const SocialMediaComp = () => {
 const { pathname } = useLocation()
 const currentUrl = 'http://localhost:3000' + pathname
 return (
  <>
   <div className="share-post ml-auto">
    <ul className="social-media mb-0">
     <li><strong>Share:</strong></li>
     <FacebookShareButton url={currentUrl}>
      <li><a rel="noreferrer" target="_blank" href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a></li>
     </FacebookShareButton>
     {/* <li ><a rel="noreferrer" target="_blank" href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li> */}
     <LinkedinShareButton url={currentUrl}>
      <li ><a rel="noreferrer" target="_blank" href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a></li>
     </LinkedinShareButton>
     <TwitterShareButton url={currentUrl}>
      <li><a rel="noreferrer" target="_blank" href="https://twitter.com/"><i className="fab fa-twitter"></i></a></li>
     </TwitterShareButton>
    </ul>
   </div>
  </>
 );
}

export default SocialMediaComp;