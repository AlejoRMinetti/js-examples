import React from "react";

const QrCode = (props) => {
  return (
    <div className="qr-container">
      <div className="qr-card">
        <a href={props.url}>
          <img src="/images/image-qr-code.png" alt="QR Code" />
        </a>
      </div>
      <div className="qr-title">{props.title}</div>
      <div className="qr-desc">{props.descrip}</div>
    </div>
  );
};

export default QrCode;
