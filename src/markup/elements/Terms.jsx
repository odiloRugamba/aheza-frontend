import React from 'react';
import Header from "../layout/header";
import bnrImg1 from "../../images/banner/img1.jpg";
import waveBlue from "../../images/shap/wave-blue.png";
import plusBlue from "../../images/shap/plus-blue.png";
import "../../scss/pages/donation.scss";

const Terms = () => {
    return (
        <>
            <Header />
            <div className="page-content bg-white" style={{ marginTop: 100 }}>
                <div className="banner-wraper">
                    <div className="page-banner" style={{ maxHeight: 250 }}>
                        <div className="container">
                            <div className="page-banner-entry text-center">
                                <h2>Terms and Conditions</h2>
                            </div>
                        </div>
                        {/* <img className="pt-img1 animate-wave" src={waveBlue} alt="" />
                        <img className="pt-img3 animate-rotate" src={plusBlue} alt="" /> */}
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <section>
                            <p className={"h5"}>Acceptance</p>
                            <p className={"expText"}>
                                It is important that you read all the following terms and conditions carefully. This Terms of Use Agreement
                                (“Agreement”) is a legal agreement between you and [name of legal owner of the website, i.e. Dr. John Smith or
                                John Smith Professional Corporation; if multiple owners, contact the CMPA for advice], tthe owner and operator (“Owner”) of
                                this Website (the “Website”). It states the terms and conditions under which you may access and use the Website and all
                                written and other materials displayed or made available through the Website, including, without limitation, articles, text,
                                photographs, images, illustrations, audio clips, video clips, computer software, and code (the “Content”). By accessing and
                                using the Website, you are indicating your acceptance to be bound by the terms and conditions of this Agreement. If you
                                do not accept these terms and conditions, you must not access or use the Website. The Owner may revise this Agreement
                                at any time by updating this posting. Use of the Website after such changes are posted will signify your acceptance of
                                these revised terms. You should visit this page periodically to review this Agreement.
                            </p>


                            <p className={"h5"}>Medical emergency</p>

                            <p>
                                Do NOT use the Website for medical emergencies. If you have a medical emergency, call a physician or qualified
                                healthcare provider, or CALL 911 immediately. Under no circumstances should you attempt self-treatment based on
                                anything you have seen or read on the Website.
                                General information is not medical advice
                                The general information provided on the Website is for informational purposes only and is not professional medical
                                advice, diagnosis, treatment, or care, nor is it intended to be a substitute therefore. Always seek the advice of your
                                physician or other qualified health provider properly licensed to practise medicine or general healthcare in your
                                jurisdiction concerning any questions you may have regarding any information obtained from this Website and any
                                medical condition you believe may be relevant to you or to someone else. Never disregard professional medical advice
                                or delay in seeking it because of something you have read on this Website. Always consult with your physician or other
                                qualified healthcare provider before embarking on a new treatment, diet, or fitness program. Information obtained on
                                the Website is not exhaustive and does not cover all diseases, ailments, physical conditions, or their treatment.
                                Page 1
                            </p>


                            <p className={"h5"}>No physician-patient relationship</p>

                            <p>
                                The presentation of general information on the Website does not establish a physician-patient relationship between
                                you and the Owner (or any of its physicians) and is not intended as a solicitation of individuals to become patients or
                                clients of the Owner (or any of its physicians). This section does not apply to the extent that you are using the Website to
                                communicate with a physician with whom you have an existing physician-patient relationship.
                                No endorsements
                                Unless specifically stated, the Owner does not recommend or endorse any specific brand of products, services,
                                procedures, or other information that appears or that may be advertised on the Website.
                            </p>

                        </section>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Terms;