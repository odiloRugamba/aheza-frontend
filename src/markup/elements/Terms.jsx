import React from 'react';
import Header from "../layout/header";
import Footer from "../layout/footer";
import "../../scss/pages/donation.scss";
import { FormattedMessage } from 'react-intl';



const Terms = () => {
    return (
        <>
            <Header />
            <div className="page-content bg-white" style={{ marginTop: 100 }}>
                <div className="banner-wraper">
                    <div className="page-banner" style={{ maxHeight: 250 }}>
                        <div className="container">
                            <div className="page-banner-entry text-center">
                                <h2>
                                    <FormattedMessage id="TermsandConditions" defaultMessage="TermsandConditions" />
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <section>
                            <p className={"h5"}>
                            <FormattedMessage id="Acceptance" defaultMessage="Acceptance" />
                            </p>
                            <p className={"expText"}>
                                <FormattedMessage id="termsParaOne" defaultMessage="termsParaOne" />
                            </p>


                            <p className={"h5"}>
                                <FormattedMessage id="MedicalEmergency" defaultMessage="MedicalEmergency" />
                                </p>

                            <p>
                                <FormattedMessage id="termsParaTwo" defaultMessage="termsParaTwo" />
                                <br></br><br></br>
                                <b>
                                    <FormattedMessage id="GeneralInformation" defaultMessage="GeneralInformation" />
                                </b>
                                <br></br>
                                <FormattedMessage id="termsParaThree" defaultMessage="termsParaThree" />
                            </p>


                            <p className={"h5"}>
                                <FormattedMessage id="NoPhysician" defaultMessage="NoPhysician" />
                            </p>

                            <p>
                                <FormattedMessage id="ThePresentation" defaultMessage="ThePresentation" />
                                <br></br><br></br>
                                <b>
                                    <FormattedMessage id="NoEndorsements" defaultMessage="NoEndorsements" />
                                </b>
                                <br></br>
                                <FormattedMessage id="UnlessSpecifically" defaultMessage="UnlessSpecifically" />
                            </p>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Terms;