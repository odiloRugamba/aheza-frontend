import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const widgetTag = ({ tags }) => {
	const data = [
		"Improvement",
		"Life",
		"Improvement",
		"Life",
		"Improvement",
		"Life",
	]
	return (
		<>
			<div className="widget widget_tag_cloud">
				<h4 className="widget-title">Tags</h4>
				<div className="tagcloud"> {
					tags.length > 0 ? tags.map(el =>
						<Link to="#">{el}</Link>
					) : data.map(el =>
						<Link to="#">{el}</Link>
					)
				}
				</div>
			</div>

		</>
	);
}

export default widgetTag;
