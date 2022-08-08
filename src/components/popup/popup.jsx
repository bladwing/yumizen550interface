import React, { useRef, useState } from "react";

import "./popup.scss";

export default function Popup() {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);

  const handlePopupClick = (e) => {
    if (!popupRef.current.contains(e.target)) {
      setShowPopup(false);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const openPopup = () => {
    setShowPopup(true);
  };

  return (
    <div className="buttons-wrapper">
      <button className="startUp" onClick={openPopup}>
        <img src="./img/middleMenu/startup.jpg" alt="" />
      </button>
      {showPopup && (
        <div
          style={{
            visibility: showPopup ? "visible" : "hidden",
            opacity: showPopup ? "1" : "0",
          }}
          className="overlay"
          onClick={handlePopupClick}
        >
          <div className="popup" ref={popupRef}>
            <h3>Do you want startup device?</h3>

            <span className="close button2" onClick={closePopup}>
              X
            </span>

            <button onClick={closePopup}>Yes</button>

            <button onClick={closePopup}>no</button>
          </div>
        </div>
      )}
    </div>
  );
}
