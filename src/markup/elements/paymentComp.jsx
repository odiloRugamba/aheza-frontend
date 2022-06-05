import React, { Component, useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// Images
import lineBg from '../../images/appointment/line-bg.png';

import verified from '../../images/verified.png';
import { createAppointment } from "../../store/appointment/actions";




const AboutSection = () => {
    const [money, setMoney] = useState(null)
    const [loading, setLoading] = useState(null)
    const data = useSelector(state => state.AppointmentReducers.postData)
    const paymentData = useSelector(state => state.AppointmentReducers.paymentData)

    const [appointmentOps, setAppointmentOps] = useState([])
    const history = useHistory()
    const dispatch = useDispatch()
    const appOption = [
        { value: 'IN-PERSON', selected: false, name: 'In Preson' },
        { value: 'PHONE-CALL', selected: false, name: 'Phone Call' },
        { value: 'ZOOM-CALL', selected: false, name: ' Zoom Video Call' },
        { value: 'AHEZA-CHAT', selected: false, name: 'Aheza Chat' }
    ]
    useEffect(() => {
        if (data?.firstName) {
            appOption.forEach(el => {
                if (el.value === data.CommunicationMethod) {
                    el.selected = true
                    changeMoney(el.value)
                }
            })
            setAppointmentOps(appOption)
        } else {
            // history.push('/book-appointment')
        }
    }, [data]);

    const changeMoney = (item) => {
        setMoney(item === 'IN-PERSON' ? 30000 : item === 'PHONE-CALL' ? 10000 : item === 'ZOOM-CALL' ? 15000 : item === 'AHEZA-CHAT' ? 10000 : null)
    }
    const selectMethod = (item) => {
        appOption.forEach(el => {
            if (el.value === item.value) {
                el.selected = true
            } else {
                el.selected = false
            }
        })
        changeMoney(item.value)
        setAppointmentOps(appOption)
    }



    const checkOut = () => {
        setLoading(true)
        // history.push('/thankyou')
        dispatch(createAppointment({
            ...data,
            amount: money
        }))
    }
    useEffect(() => {
        if (paymentData) {
            console.log('paymentData', paymentData)
            // window.open(paymentData.link)
            window.location.replace(paymentData.link)
            setLoading(false)
        }
    }, [paymentData])

    return (
        <>
            <section className="section-area account-wraper1">
                <div className="container-fluid" style={{ paddingTop: 100, paddingLeft: 100 }}>
                    <div className="appointment-inner section-sp2" style={{ backgroundImage: "url(" + lineBg + ")", backgroundRepeat: " no-repeat", backgroundPosition: "20px 140px" }}>
                        <div className="container">
                            <div className="rowAppo">
                                <div className="col-xl-8 col-lg-12 col-md-12">
                                    <div className="appointment-form form-wraper appointmentCont">
                                        <div className='appointmentF'>
                                            <div>
                                                <h3 className="title">
                                                    Finalize  Appointment
                                                </h3>
                                            </div>
                                            <div>
                                                <img src={verified} />
                                            </div>
                                        </div>

                                        <div>
                                            <div className="work-content">
                                                <p>
                                                    Once you pay, our program cordinator reviews your answers and match you with the best therapist for you and based on their
                                                    schedule we call you to fix time for your session.
                                                </p>
                                            </div>
                                            <div>
                                            </div>
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
