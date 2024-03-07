import { useState } from 'react'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UnDoToast } from './UnDoToast'

export const App = () => {
  const [undo, setUndo] = useState(false);

  const sendRequest = async () => {
    // Send your request to the server here.
    // If the request is successful, show the toast notification with an undo option.
    toast(<UnDoToast action={undoRequest} />, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const undoRequest = () => {
    setUndo(true);
    toast("Undo Done!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div>
      <button onClick={sendRequest}>Send Request</button>
      <ToastContainer />
      {undo ? <p>UnDo</p> : <p>SinUnDo</p>}
    </div>
  );
};
