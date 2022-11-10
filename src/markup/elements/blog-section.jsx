import React from 'react';
import { Link , useParams} from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { FormattedMessage } from 'react-intl';


const LatestNewsSection = ({ title, content }) => {
	let { lang } = useParams();

	content = content?.slice(0, 3)


	const convertData = (date) => {
		const day = new Date(date)
		let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(day);
		let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(day);
		let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(day);
		return `${da} ${mo} ${ye}`
	}

	const routeChange = (link) => {
		const rouLink = link.split('/')[2]
		const httpLink = link.split('/')[0]
		window.open(`${httpLink}//${rouLink}`, '_blank')
	}

	const getVideoId = (url) => {
		var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
		var match = url.match(regExp);
		return (match && match[7].length == 11) ? match[7] : false;
	}

	return (
		<>

			<section className="section-area  blog-area" >
				<div className="container">
					<div className="heading-bx text-center" style={{ display: "flex", justifyContent: "space-between" }}>
						<h2 className="title title-80" style={{ textAlign: "left" }}>Additional Information</h2>
						<div>
							<br></br>
							<Link
								to='/blog-grid'
								className="btn btn-outline-primary btn-sm"
								style={{ background: '#565ACF', color: '#fff', fontSize: 17, fontWeight: 700 }}
							>
								See More Blog articles
							</Link>
						</div>
					</div>
					<div className="tt-slider blog-slide slider-sp0 slick-arrow-none blogCard">
						{
							content ? content.map(item =>
								<div className="col-xl-4 col-md-6">
									<div className="blog-card mb-30">
										<div className="post-info">
											<h6 className="post-title max-lines-2"><Link to={`/${lang}`+"/blog-grid/" + item.title?.replaceAll(" ", "-") + '/' + item._id}>{item.title}</Link></h6>

											<ul className="post-meta" style={{ justifyContent: 'space-between' }}>
												<li onClick={() => { routeChange(item.link) }} className="date" style={{ cursor: 'pointer' }}>
													Aheza<br></br>
													<h5 style={{ fontSize: 15 }}>{convertData(item.updatedAt)} </h5>
												</li>
												<Link style={{ background: '#565ACF', color: '#fff', fontSize: 17, fontWeight: 700 }} to={"/blog-grid/" + item.title?.replaceAll(" ", "-") + '/' + item._id} className="btn btn-outline-primary btn-sm">
											<FormattedMessage id="ReadMore" defaultMessage="ReadMore" />
													 </Link>
											</ul>
										</div>
									</div>
								</div>
							) : null
						}
					</div>
				</div>
				<br></br>
				<br></br>
				<br></br>
			</section >

		</>
	);

}

export default LatestNewsSection;