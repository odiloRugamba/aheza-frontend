import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getResearchs } from "../../store/research/actions";
import { getLinks } from '../../store/links/actions';
import { getStorys } from '../../store/story/actions';
import { getBlogs } from '../../store/blog/actions';
import { getUploads } from '../../store/uploads/actions';
import { getTheater } from "../../store/theater/actions";




import LatestNewsSection from "../elements/latest-news-slider";
import ResearchSection from "../elements/research-section";
import StoriesSection from "../elements/stories-section";
import UploadsSection from "../elements/uploads-section";
import TheatersSection from "../elements/theaters-section";


// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";




const ResearchFindings = () => {
	const [research, setResearch] = useState([])
	const [links, setLinks] = useState([])
	const [stories, setStories] = useState([])
	const [blog, setBlogs] = useState([])
	const [uploads, setUploads] = useState([])
	const [theaters, setTheaters] = useState([])
	const dispatch = useDispatch()
	const researchData = useSelector(state => state.ResearchReducers?.data)
	const linksData = useSelector(state => state.linksReducers?.data)
	const storiesData = useSelector(state => state.StorysReducers?.data)
	const blogData = useSelector(state => state.BlogsReducers?.data)
	const uploadsData = useSelector(state => state.UploadsReducers?.data)
	const theatersData = useSelector(state => state.TheaterReducers.data)



	useEffect(() => {
		dispatch(getResearchs())
		dispatch(getLinks())
		dispatch(getStorys())
		dispatch(getBlogs())
		dispatch(getUploads())
		dispatch(getTheater())
	}, [])

	useEffect(() => {
		setResearch(researchData)
		setLinks(linksData)
		setStories(storiesData)
		setBlogs(blogData)
		setUploads(uploadsData)
		setTheaters(theatersData)
	}, [researchData, linksData, storiesData, blogData, uploadsData, theatersData])




	return (
		<>
			<Header />
			<div className="page-content bg-white" style={{ marginTop: 50 }}>
				<LatestNewsSection content={links} title="Aheza links News" />
				<ResearchSection content={research} />
				<StoriesSection content={stories} />
				<UploadsSection content={uploads} />
				<TheatersSection content={theaters} />
			</div>
			<Footer />

		</>
	);

}

export default ResearchFindings;
