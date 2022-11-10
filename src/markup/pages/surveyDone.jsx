import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import logo from '../../images/logo-2.png';
import { FormattedMessage } from 'react-intl';








const SaveyPage = () => {
  const history = useHistory()
  let { lang } = useParams();

  const goToAheza = () => {
    history.push(`/${lang}`)
  }

  return (
    <>
      <div className="page-content bg-white">
        <div className='logoImageCont'>
          <Link to={'/'+ lang}><img className='logo' src={logo} alt="" /></Link>
        </div>
        <div className="banner-wraper">
          <div className="page-banne banner-lg contact-banne" style={{ maxHeight: 400, paddingTop:150 }}>
          </div>
        </div>
        <section className="saveyCont">
          <div className="container saveyContainer">
            <div className="contact-wraper">
              <>
                <div className="page-banner-entry text-center pt-20 pl-20 pr-20 pb-20">
                  <h4>
                    <FormattedMessage id="Thankyou" defaultMessage="Thankyou" />
                  </h4>
                  <div className='thnk-par'>
                    <p>
                    <FormattedMessage id="YourResponses" defaultMessage="YourResponses" />

                    </p>
                  </div>
                  <div className="col-lg-12 m-20">
                    <button onClick={() => goToAheza()} name="submit" type="submit" value="Submit" className="btn w-100 btn-secondary btn-lg">
                      <FormattedMessage id="YourResponses" defaultMessage="YourResponses" />
                    </button>
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
