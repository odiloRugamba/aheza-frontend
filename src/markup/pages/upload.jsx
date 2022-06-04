import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUploadById, getUploads, getUploadCommnets, postUploadCommnets } from "../../store/uploads/actions";
// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";

// Elements
import AuthorProfile from "../elements/author-profile";
import CommentList from "../elements/comment-list";
import CommentRespond from "../elements/comment-respond";
import WidgetTag from "../elements/widget-tag";
import WidgetSearch from "../elements/widget-search";
import WidgetGallery from "../elements/widget-gallery";
import WidgetRecentPosts from "../elements/widget-recent-posts";
import LoadingComp from "../elements/loading";
import SocialMediaComp from '../elements/shareMedia'


// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import waveBlue from "../../images/shap/wave-blue.png";
import circleDots from "../../images/shap/circle-dots.png";
import plusBlue from "../../images/shap/plus-blue.png";
import blogDefaultPic1 from "../../images/blog/default/pic1.jpg";
import testPic3 from "../../images/testimonials/pic3.jpg";
import galleryPic2 from "../../images/gallery/pic2.jpg";
import galleryPic5 from "../../images/gallery/pic5.jpg";
import PickImage from "../../images/pickImage.png";
import AudioFle from "../../images/audio.mp3";
import PauseIcon from "../../images/pause-button.png";
import playIcon from "../../images/pause.png";
import prevIcon from "../../images/prev.png";
import nextIcon from "../../images/next.png";
import { AudioPlayer } from "./AudioPlayer";


const UploadsDetails = () => {
	const [upload, setUpload] = useState([])
	const [data, setData] = useState([])
	const dispatch = useDispatch()
	const res = useSelector(state => state.UploadsReducers.upload)
	const resRel = useSelector(state => state.UploadsReducers.data)
	const resComments = useSelector(state => state.UploadsReducers.comments)
	const [audioData, setAudioData] = useState(null)
	const { id } = useParams()
	const [loading, setLoading] = useState(false)
	const [playing, setPlaying] = useState(false)
	const [playingStart, setPlayingStart] = useState(true)


	useEffect(() => {
		dispatch(getUploadById(id))
		dispatch(getUploads())
		dispatch(getUploadCommnets(id))
	}, [])

	useEffect(() => {
		setUpload(res)
		setAudioData(new Audio(AudioFle))
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
		await dispatch(postUploadCommnets({ ...data, upload: id }))
		await dispatch(getUploadCommnets(id))
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
		console.log('next')
		console.log('dd', audioData.currentTime)
		console.log('dd', audioData)
		console.log((audioData?.currentTime / audioData?.duration) * 100)
	}

	const playPauseFunc = () => {
		if (playingStart) {
			audioData.play()
			setPlaying(!playing)
			setPlayingStart(false)
		} else {
			if (!playing) {
				console.log('playing')
				audioData.current.play()
				console.log('dd', audioData)
			} else {
				console.log('amm gete')
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
									<div className="blog-card blog-single" style={{width: "100%"}}>
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
												<h2 className="post-title max-lines-2">{upload?.title}</h2>
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


										<WidgetRecentPosts data={data} currentPage="/upload/" more="/uploads" title="Recent News" />
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


export default UploadsDetails;
