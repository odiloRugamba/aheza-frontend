import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getStorysById, getStorys, getStoryComments, postStoryComments } from "../../store/story/actions";
// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";

// Elements
import CommentList from "../elements/comment-list";
import CommentRespond from "../elements/comment-respond";
import WidgetRecentPosts from "../elements/widget-recent-posts";
import LoadingComp from "../elements/loading";
import SocialMediaComp from '../elements/shareMedia'


// Import Images


const StorysDetails = () => {
	const [story, setStory] = useState([])
	const [data, setData] = useState([])
	const dispatch = useDispatch()
	const res = useSelector(state => state.StorysReducers.story)
	const resRel = useSelector(state => state.StorysReducers.data)
	const resComments = useSelector(state => state.StorysReducers.comments)
	const [audioData, setAudioData] = useState(null)
	const { id } = useParams()
	const [loading, setLoading] = useState(false)
	const [playing, setPlaying] = useState(false)
	const [playingStart, setPlayingStart] = useState(true)


	useEffect(() => {
		dispatch(getStorysById(id))
		dispatch(getStorys())
		dispatch(getStoryComments(id))
	}, [])

	useEffect(() => {
		setStory(res)
	}, [res])

	useEffect(() => {
		const revData = resRel?.reverse()
		setData(revData?.slice(0, 3))
	}, [resRel])

	useEffect(() => {
		setLoading(false)
	}, [resComments]);

	const convertData = (date) => {
		const day = new Date(date)
		let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(day);
		let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(day);
		let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(day);
		return `${da} ${mo} ${ye}`
	}
	const submitFunc = async (data) => {
		setLoading(true)
		await dispatch(postStoryComments({ ...data, story: id }))
		await dispatch(getStoryComments(id))
	}
	const getVideoId = (url) => {
		var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
		var match = url.match(regExp);
		return (match && match[7].length == 11) ? match[7] : false;
	}

	const prevFunc = () => {
		console.log('prev')
	}


	const nextFunc = () => {
		console.log((audioData?.currentTime / audioData?.duration) * 100)
	}

	const playPauseFunc = () => {
		if (playingStart) {
			audioData.play()
			setPlaying(!playing)
			setPlayingStart(false)
		} else {
			if (!playing) {
				audioData.current.play()
			} else {
				audioData.current.pause()
			}
			setPlaying(!playing)
		}

	}
	useEffect(() => {
		console.log((audioData?.currentTime / audioData?.duration) * 100)
	}, [audioData?.current])





	return (
		<>

			<Header />
			{
				res?._id ? <div className="page-content bg-white" style={{ marginTop: 100 }}>
					<section className="section-area section-sp1 bg-white">
						<div className="container">
							<div className="row">
								<div className="col-md-12 col-lg-7 col-xl-8 mb-30 mb-md-50">
									<div className="blog-card blog-single" style={{ width: "100%" }}>
										<div className="post-">
											{
												res?.youtubeVideoLink &&
												<>
													<iframe
														className="youtube-frame"
														src={`https://www.youtube.com/embed/${getVideoId(res?.youtubeVideoLink)}`}
														frameBorder="0"
														allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
														allowFullScreen
														title="Embedded youtube"
													/>
													<br /><br />
												</>
											}
										</div>
										<div className="info-bx">
											<div className="ttr-post-title">
												<h4 className="post-title">{story?.title}</h4>
											</div>
											<div className="ttr-post-text">
												<div dangerouslySetInnerHTML={{ __html: story?.content }}></div>

											</div>
											<ul className="post-meta">
												<li className="date">{story?.updatedAt ? convertData(story?.updatedAt) : null}</li>
											</ul>
											<div className="ttr-post-footer">
												<div className="post-tags">
													<strong>Tags:</strong>
													{
														story?.tags?.map(el => (
															<Link to="#">{el}</Link>
														))
													}
												</div>
												<SocialMediaComp />
											</div>
										</div>
									</div>
									<div className="clear" id="comment-list">
										<div className="comments-area" id="comments">
											<h4 className="widget-title">{resComments?.length} Comments</h4>

											<div className="clearfix">

												<CommentList coments={resComments} />

												<CommentRespond loading={loading} submit={submitFunc} placeholder="Comment" />

											</div>
										</div>
									</div>
								</div>
								<div className="col-md-12 col-lg-5 col-xl-4 mb-30">
									<aside className="side-bar sticky-top aside-bx">
										<WidgetRecentPosts data={data} currentPage="/story/" more="/storys" title="Recent Stories" />
									</aside>
								</div>
							</div>
						</div>
					</section>
				</div> : <div style={{ position: "relative", top: "200px" }}><LoadingComp /></div>
			}
			<Footer />
		</>
	);
}


export default StorysDetails;
