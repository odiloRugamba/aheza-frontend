import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// Images
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
            history.push('/book-appointment')
        }
    }, [data]);
    function numberWithCommas(x) {
        return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    const changeMoney = (item) => {
        setMoney(item === 'IN-PERSON' ? 30000 : item === 'PHONE-CALL' ? 10000 : item === 'ZOOM-CALL' ? 15000 : item === 'AHEZA-CHAT' ? 100 : null)
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
        dispatch(createAppointment({
            ...data,
            amount: money
        }))
    }
    useEffect(() => {
        if (paymentData) {
            console.log('paymentData', paymentData)
            window.location.replace(paymentData.link)
            setLoading(false)
        }
    }, [paymentData])

    return (
        <>
            <section className="section-area account-wraper1">
                <div className="container-fluid" style={{ paddingTop: 100 }}>
                    <div className="appointment-inner section-sp2" >
                        <div className="container">
                            <div className="rowAppo">
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                    <div className="appointment-form form-wraper appointmentCont">
                                        <div className='appointmentF'>
                                            <div>
                                                <h3 className="title">
                                                    Finalize Appointment
                                                </h3>
                                            </div>
                                        </div>

                                        <div className='questionCont'>
                                            <div className='title text-secondary mb-1 chooseText'>Method of Communication </div>
                                            <ul className='finalize'>
                                                {
                                                    appointmentOps.map(el =>
                                                        <li onClick={() => selectMethod(el)} style={{ marginLeft: 10, marginBottom: 10 }}>
                                                            <span className='checkBox'>
                                                                <label className='radioBtn'>
                                                                    {console.log(el)}
                                                                    <input checked={el.selected} name='appointment' type="radio" id="scales" />
                                                                    <span />
                                                                </label>
                                                            </span>
                                                            <a>{el.name}</a>
                                                        </li>
                                                    )
                                                }
                                            </ul>
                                        </div>



                                        <div>
                                            <div className="work-content">
                                                <p>
                                                    Once you pay, our program cordinator reviews your answers and matches you with the best therapist for you.
                                                    Based on the therapist's schedule, we will call you to confirm your session.
                                                </p>

                                                <div>
                                                    <u><div className="textRepresent">Session Payment:</div></u>
                                                    <div className='title text-secondary mb-1'>RWF {numberWithCommas(money)}</div>
                                                </div>
                                            </div>
                                            <div>
                                            </div>
                                        </div>
                                        <div>
                                            <b>
                                                <button onClick={() => checkOut()} type="submit" className="btn btn-secondary btn-lg">
                                                    {
                                                        loading ?
                                                            <div className="spinner-border" role="status">
                                                                <span className="sr-only">
                                                                    <b style={{ fontSize: 20, color: "white" }} >Loading... </b>
                                                                </span>
                                                            </div> : <span><b style={{ fontSize: 20, color: "white" }} >Pay </b></span>
                                                    }
                                                </button>
                                            </b>
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
