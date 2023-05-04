import React from "react";
import style from "./QrCode.module.css";

const QrCode = (props) => {
  return (
    <div className={style.qrcontainer}>
      <div className={style.qrcard}>
        <a href={props.url}>
          <img src="/images/image-qr-code.png" alt="QR Code" />
        </a>
      </div>
      <div className={style.textBox}>
        <div className={style.qrtitle}>{props.title}</div>
        <br />
        <div className={style.qrdesc}>{props.descrip}</div>
      </div>
    </div>
  );
};

export default QrCode;
