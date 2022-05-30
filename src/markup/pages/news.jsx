import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getResearchs } from "../../store/research/actions";
import { getLinks } from '../../store/links/actions';
import { getStorys } from '../../store/story/actions';
import { getBlogs } from '../../store/blog/actions';
import { getUploads } from '../../store/uploads/actions';




import LatestNewsSection from "../elements/latest-news-slider";
import ResearchSection from "../elements/research-section";
import UploadsSection from "../elements/uploads-section";
import StoriesSection from "../elements/stories-section";
import BlogSection from "../elements/blog-section";

// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";




const ResearchFindings = () => {

	const [research, setResearch] = useState([])
	const [links, setLinks] = useState([])
	const [stories, setStories] = useState([])
	const [blog, setBlogs] = useState([])
	const [uploads, setUploads] = useState([])
	const dispatch = useDispatch()
    const researchData = useSelector(state => state.ResearchReducers?.data)
    const linksData = useSelector(state => state.linksReducers?.data)
    const storiesData = useSelector(state => state.StorysReducers?.data)
    const blogData = useSelector(state => state.BlogsReducers?.data)
    const uploadsData = useSelector(state => state.UploadsReducers?.data)
    


	useEffect(() => {
		dispatch(getResearchs())
		dispatch(getLinks())
		dispatch(getStorys())
		dispatch(getBlogs())
		dispatch(getUploads())
	}, [])

    useEffect(() => {
        setResearch(researchData)
        setLinks(linksData)
        setStories(storiesData)
        setBlogs(blogData)
        setUploads(uploadsData)
    },[researchData, linksData, storiesData, blogData, uploadsData])




	return (
		<>
			<Header />
			<div className="page-content bg-white" style={{marginTop: 50}}>

				
                <LatestNewsSection content={links} title="Aheza links News" />
                {/* <hr></hr>  */}
                <ResearchSection content={research} />
                {/* <hr></hr> */}
                {/* <UploadsSection content={uploads} /> */}
                {/* <hr></hr> */}
                <StoriesSection content={stories} />
                {/* <hr></hr> */}
                {/* <BlogSection content={blog} /> */}


			</div>

			<Footer />

		</>
	);

}

export default ResearchFindings;
