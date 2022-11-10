import React, { useState, useEffect } from 'react';
import { useHistory, useParams, useLocation } from "react-router-dom";
import { FormattedMessage } from 'react-intl';





const AboutSection = () => {
 const [money, setMoney] = useState(null)
 const history = useHistory()
 const routerData = useParams()
 const routerLink = useLocation()
let { lang } = useParams();

 const gotoAheza = () => {
  history.push(`/${lang}`)
 }

 return (
  <>
   <section className="section-area account-wraper1">
    <div className="container-fluid" style={{ paddingTop: 100, minHeight: 100 + 'vh' }}>
     <div className="appointment-inner section-sp2">
      <div className="container" style={{ padding: 0 }}>
       <div className="rowAppo">
        <div className="col-xl-12 col-lg-12 col-md-12">
         <div className="appointment-form form-wraper appointmentCont">
          <div className='appointmentF'>
           <div>
            <h3 className="title">
<FormattedMessage id="Failedto" defaultMessage="Failedto" />
            </h3>
           </div>
          </div>
          <div>
           <div className="work-content">
            <p>
            <FormattedMessage id="Weapologise" defaultMessage="Weapologise" />
             <br /><br /><br />
             <FormattedMessage id="Thankyou" defaultMessage="Thankyou" />
            </p>
           </div>
           <div>
           </div>
          </div>
          <div>
           <button onClick={() => gotoAheza()} type="submit" className="btn btn-secondary btn-lg" style={{ fontSize: 20, fontWeight: 700 }}>
<FormattedMessage id="GoHome" defaultMessage="GoHome" />

           </button>
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
   </section>
  </>
 );
}




export default AboutSection;

