import React from "react";
import QrCode from "./components/QrCode";

export default function App() {
    const desc = `Scan the QR code to visit Frontend Mentor and 
      take your coding skills to the next level or click 
      to go the github profile of its creator`;
  return (
    <QrCode
      title="Improve your front-end skills by building projects"
      descrip= {des}
      url="https://github.com/AlejoRMinetti"
    />
  );
}
