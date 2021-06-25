import React, { useState } from "react";
import rulesImg from "../images/image-rules.svg";
import close from "../images/icon-close.svg";

const Rules = () => {
  const [ispressed, setIspressed] = useState(false);
  const modalState = (e) => {
    setIspressed(!ispressed);
  };
  return (
    <div>
      <div className={ispressed ? "modal-container" : "modal-unpressed"}>
        <div className="rules-modal">
          <div className="modal-header">
            <p>Rules</p>
            <img src={close} alt="close-icon" onClick={modalState} />
          </div>
          <img src={rulesImg} alt="rules" />
        </div>
      </div>
      <button className="rules-btn" onClick={modalState}>
        Rules
      </button>
    </div>
  );
};
export default Rules;
