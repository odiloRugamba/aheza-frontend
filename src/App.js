import React, { useEffect } from 'react';
import Markup from './markup/markup';

// Plugins Stylesheet
import 'bootstrap/dist/css/bootstrap.min.css';

// Slick Carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// StyleSheet
import './scss/main.scss';
import { getServices } from "./store/services/actions";
import { useDispatch } from "react-redux";


function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getServices())
	}, []);


	return (
		<div className="page-wraper">
			<Markup />
		</div>
	);
}

export default App;

