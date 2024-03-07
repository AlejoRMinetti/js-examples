import { toast } from "react-toastify";

export const UnDoToast = ({ action }) => (
  <div>
    Request sent!
    <button
      onClick={() => {
        toast.dismiss;
        action();
      }}
    >
      Undo
    </button>
  </div>
);

 
