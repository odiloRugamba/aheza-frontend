import React from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";


const Notification = ({ isVisible }) => {
 console.log(isVisible)
 return (
  <div className={`notification-holder ${isVisible ? '' : 'd-none'} notification`}>
   <div className={`alert alert-success content`}>
    <div>
     <span>password or email is incorrect.</span>
     <span>password or email is incorrect.</span>
     <span>password or email is incorrect.</span>
    </div>
    <div className="closeBtn">
     <IoMdCloseCircleOutline />
    </div>
   </div>

  </div>
 )
}

export default Notification

