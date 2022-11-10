import React from 'react';
import { Link, useParams } from 'react-router-dom';
// Import Images
import { FormattedMessage } from 'react-intl';




const LatestNewsSection = ({ title, content }) => {

	content = content?.slice(0, 3)
	let { lang } = useParams();


	const convertData = (date) => {
		const day = new Date(date)
		let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(day);
		let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(day);
		let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(day);
		return `${da} ${mo} ${ye}`
	}

	return (
		<>

			<section className="section-area section- blog-area" style={{ paddingTop: 20 }}>
				<div className="container">
					<div className="heading-bx" style={{ display: "flex", justifyContent: "space-between" }}>
						<h2 className="title title-80" >Publications</h2>
						<div>
							<br></br>
							<Link
								to={`/${lang}`+'/research-findings'}
								className="btn btn-outline-primary btn-sm big-screen-only "
								style={{ background: '#565ACF', color: '#fff', fontSize: 17, fontWeight: 700 }}
							>
								See More Publications
							</Link>
						</div>
					</div>
					<div className="tt-slider blog-slide slider-sp0 slick-arrow-none blogCard">
						{
							content ? content.map(item =>
								<div className="col-xl-4 col-md-6">
									<div className="blog-card mb-30">
										<div className="post-info">
											<p className="post-title max-lines-3" style={{ fontSize: 20 }}><a href={`/${lang}`+"/research-finding/" + item.title?.replaceAll(" ", "-") + '/' + item._id} >{item.title}</a></p>
											<ul className="post-meta" style={{ justifyContent: 'space-between' }}>
												<li className="date">
													{convertData(item?.updatedAt)}</li>
												<Link style={{ background: '#565ACF', color: '#fff', fontSize: 17, fontWeight: 700 }} to={`/${lang}`+"/research-finding/" + item.title?.replaceAll(" ", "-") + '/' + item._id} className="btn btn-outline-primary btn-sm">
											<FormattedMessage id="ReadMore" defaultMessage="ReadMore" />
													 </Link>

											</ul>
										</div>
									</div>
								</div>
							) : null
						}
					</div>
					<div className="mobile-only" style={{ paddingLeft: "10%" }}>

						<Link
							to={`/${lang}`+'/research-findings'}
							className="btn btn-outline-primary btn-sm"
							style={{ background: '#565ACF', color: '#fff', fontSize: 17, fontWeight: 700 }}
						>
							See More Publications
						</Link>
					</div>
				</div>
			</section >

		</>
	);

}

export default LatestNewsSection;