import React, { Component } from 'react';

// Import Images
import testPic2 from "../../images/testimonials/pic2.jpg";

class AuthorProfile extends Component{
	render(){
		return(
			<>
				<div className="author-box blog-user mb-50">
					<div className="author-profile-info">
						<div className="author-profile-pic">
							<img src={testPic2} alt=""/>
						</div>
						<div className="author-profile-content">
							<h5>Sonar Z. Moyna</h5>
							<p>Aenean sollicitudin, lorem quis biber idum auctor anisi elit consequat happ quam vel enim augue.</p>
							
						</div>
					</div>
				</div>
				
			</>
		);
	}
}

export default AuthorProfile;