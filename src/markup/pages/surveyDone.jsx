import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import logo from '../../images/logo-2.png';








const SaveyPage = () => {
  const history = useHistory()
  const goToAheza = () => {
    history.push('/')
  }

  return (
    <>
      <div className="page-content bg-white">
        <div className='logoImageCont'>
          <Link to="/"><img className='logo' src={logo} alt="" /></Link>
        </div>
        <div className="banner-wraper">
          <div className="page-banner banner-lg contact-banner" style={{ maxHeight: 400 }}>

          </div>
        </div>
        <section className="saveyCont">
          <div className="container saveyContainer">
            <div className="contact-wraper">
              <>
                <div className="page-banner-entry text-center pt-20 pl-20 pr-20 pb-20">
                  <h4>Thank you</h4>
                  <div className='thnk-par'>
                    <p>
                      Your responses have been submited successfully
                    </p>
                  </div>
                  <div className="col-lg-12 m-20">
                    <button onClick={() => goToAheza()} name="submit" type="submit" value="Submit" className="btn w-100 btn-secondary btn-lg"> Go Home</button>
                  </div>
                </div>
              </>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}



export default SaveyPage;
