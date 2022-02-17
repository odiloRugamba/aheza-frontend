import React from 'react';
import Markup from './markup/markup';

// Plugins Stylesheet
import 'bootstrap/dist/css/bootstrap.min.css';

// Slick Carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// StyleSheet
// import './css/style.css';
// import './scss/main.css';
import './scss/main.scss';

function App() {
	return (
		<div className="page-wraper">
			<Markup />
		</div>
	);
}

export default App;
