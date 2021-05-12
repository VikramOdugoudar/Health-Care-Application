import React from "react";
import ReactDom from "react-dom";
import { RiCloseLine } from "react-icons/ri";
const OtpModal = ({ open, onClose }) => {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className="otp-overlay position-fixed top-0 start-0 bottom-0 end-0"></div>

      <div className="otp-style position-fixed top-50 start-50 ">
        <button className="close-btn h3 mt-1" onClick={onClose}>
          <RiCloseLine />
        </button>
        <div className="otp-class">
          <div className="otp-logo display-2 fw-bold p-3 pb-2 pt-2 text-center text-white rounded-circle m-auto mt-2 mb-3">
            C
          </div>
          <br />
          <form className="d-flex flex-column justify-content-center align-items-center">
            <input
              className="otp-input mt-1 mb-2"
              type="text"
              name="name"
              placeholder="Enter Phone Number"
            />
            <button className="btn btn-primary btn-sm otp-button text-black text-dark">
              Request OTP
            </button>

            <br />
            <input
              className="otp-input mt-1 mb-2"
              type="text"
              name="name"
              placeholder="Enter OTP"
            />
            <button className="btn btn-primary btn-sm otp-button text-black text-dark">
              Verify
            </button>
          </form>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default OtpModal;
