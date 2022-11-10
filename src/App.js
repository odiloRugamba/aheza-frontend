import React, { useEffect, useState } from 'react';
import Markup from './markup/markup';
import { IntlProvider } from 'react-intl';

// Plugins Stylesheet
import 'bootstrap/dist/css/bootstrap.min.css';

// Slick Carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useParams } from 'react-router-dom';

// StyleSheet
import './scss/main.scss';
import { getServices } from "./store/services/actions";
import { useDispatch, useSelector } from "react-redux";
import EnLang from "./languages/en.json";
import KinyLang from "./languages/kiny.json";




const  App= ()=> {
	const dispatch = useDispatch();
	const data = useSelector(state => state.langReducers.lang)
	const [messages, setMessages] = useState({})
	const [locale, setLocale] = useState('iny');
	// let {lang }= useParams()


	useEffect(() => {
		dispatch(getServices())
		setMessages({
				en: EnLang,
				iny: KinyLang,
		})
		
}, [])

useEffect(()=>{
	if (data == 'en') {
		setLocale(data)
	}else{
		setLocale('iny')
	}
}, [data])


	return (
		<div className="page-wraper">
			<IntlProvider messages={messages[locale]}locale={locale}>
				<Markup />
			</IntlProvider>
		</div>
	);
}

export default App;

