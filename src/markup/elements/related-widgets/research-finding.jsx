import React from 'react';
import { Link } from 'react-router-dom';

const ResearchFindingWidget = ({ title, data }) => {

	return (
		<>
			<div className="widget recent-posts-entry">
				<h4 className="widget-">{title ? title : "Related Research"}</h4>
				<div className="widget-post-bx">
					{
						data ? data.map(el =>
							<div className="widget-post clearfix">
								<div className="ttr-post-info" style={{padding: 0}}>
									<div className="ttr-post-header">
										<p className="post-title max-lines-2" style={{fontSize: 20}}><a href={"/research-finding/" + el?.title?.replaceAll(" ","-") + '/' + el?._id}>{el?.title}</a></p>
									</div>
								</div>
							</div>
						) : null
					}
					<div className="more">
						<Link to="/research-findings"  style={{fontSize: 20, color: "white", textTransform: "initial", fontWeight: 700}}>See All</Link>
					</div>
				</div>
			</div>

		</>
	);
}

export default ResearchFindingWidget;