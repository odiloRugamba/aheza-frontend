import React, { Component, useState } from 'react';


// Layout
import { useDispatch } from "react-redux";
import Header from "../layout/header";
import Footer from "../layout/footer";

// Elements
import ApplyForm from '../elements/apply-form';

const Index = () => {


	return (
		<>
			<Header />
			<div className="page-content bg-white" style={{ marginTop: 100 }}>

				<section className="section-area section-sp1 bg-white">
					<div className="container">
						<div className="row">
							<div className="col-md-12 col-lg-8 col-xl-10 mb-30 mb-md-50">


								<div className="clear" id="comment-list">
									<div className="comments-area" id="comments">
										<ApplyForm />
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

			</div>

			<Footer />

		</>
	);
}

export default Index;