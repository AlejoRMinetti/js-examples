import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const notify = () => {
    const toastId = toast.loading("Please wait for the promise...");
    new Promise((resolve, reject) => {
      // Simulate an async operation
      setTimeout(() => {
        resolve("Promise resolved");
      }, 2000);
      // never will reject
      setTimeout(() => {
        reject("Promise rejected");
      }, 3000);
    })
      .then((message) => {
        toast.success(message, {
          id: toastId
        });
        toast.done(toastId);
      })
      .catch((error) => {
        toast.error(error, {
          id: toastId
        });
        toast.done(toastId);
      });
  };

  return (
    <div>
      <button onClick={notify}>Notify!</button>
      <ToastContainer
      stacked 
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      rtl={false}
      draggable
      pauseOnHover
      theme="dark"/>
    </div>
  );
}

export default App;
