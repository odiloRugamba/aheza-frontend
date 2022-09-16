import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTheaterById, getTheater, getTheaterCommnets, postTheaterCommnets } from "../../store/theater/actions";
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
import { AudioPlayer } from "./AudioPlayer";





const UploadsDetails = () => {
	const [upload, setUpload] = useState([])
	const [data, setData] = useState([])
	const dispatch = useDispatch()
	const res = useSelector(state => state.TheaterReducers.upload)
	const resRel = useSelector(state => state.TheaterReducers.data)
	const resComments = useSelector(state => state.TheaterReducers.comments)
	const [audioData, setAudioData] = useState(null)
	const { id } = useParams()
	const [loading, setLoading] = useState(false)
	const [playing, setPlaying] = useState(false)
	const [playingStart, setPlayingStart] = useState(true)


	useEffect(() => {
		dispatch(getTheaterById(id))
		dispatch(getTheater())
		dispatch(getTheaterCommnets(id))
	}, [])

	useEffect(() => {
		console.log('helllo', res)
		setUpload(res)
	}, [res])

	useEffect(() => {
		const revData = resRel?.reverse()
		setData(revData?.slice(0, 3))
	}, [resRel])

	useEffect(() => {
		console.log('resComments', resComments)
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
		await dispatch(postTheaterCommnets({ ...data, theater: id }))
		await dispatch(getTheaterCommnets(id))
	}


	const getVideoId = (url) => {
		var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
		var match = url.match(regExp);
		return (match && match[7].length == 11) ? match[7] : false;
	}





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
										<div className="post-media">
											{
												res?.youtubeVideoLink ?
													<iframe
														className="youtube-frame"
														src={`https://www.youtube.com/embed/${getVideoId(res?.youtubeVideoLink)}`}
														frameBorder="0"
														allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
														allowFullScreen
														title="Embedded youtube"
													/> : <AudioPlayer />

											}
										</div>
										<div className="info-bx">
											<ul className="post-meta">
												<li className="date">{upload?.updatedAt ? convertData(upload?.updatedAt) : null}</li>
											</ul>
											<div className="ttr-post-title">
												<h2 className="post-title">{upload?.title}</h2>
											</div>
											<div className="ttr-post-text">
												<div dangerouslySetInnerHTML={{ __html: upload?.content }}></div>
											</div>
											<div className="ttr-post-footer">
												<div className="post-tags">
													<strong>Tags:</strong>
													{
														upload?.tags?.map(el => (
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
										<WidgetRecentPosts data={data} currentPage="/theater/" more="/theaters" title="Recent theaters" />
									</aside>
								</div>
							</div>
						</div>
					</section>
				</div> : <div style={{ position: "relative", top: "200px", minHeight: 500 }}><LoadingComp /></div>
			}
			<Footer />
		</>
	);
}


export default UploadsDetails;


