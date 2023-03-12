import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import Login from "./Components/Authentication/Login";
import AppLayout from "./layout";

function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/authenticated" element={<AppLayout />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
