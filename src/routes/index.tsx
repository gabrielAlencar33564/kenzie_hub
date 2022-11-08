import { Routes, Route, Navigate } from "react-router-dom";
import PageLogin from "../pages/PageLogin";
import PageRegistration from "../pages/PageRegistration";
import Deshboard from "../pages/Dashboard";
import { AnimatePresence } from "framer-motion";
import { ToastContainer } from "react-toastify";
import { useUserContextProps } from "../contexts/userContext";

import "react-toastify/dist/ReactToastify.min.css";

function RoutesPage() {
  const { isAuthenticated } = useUserContextProps();

  console.log(isAuthenticated);

  const token = localStorage.getItem("@TOKEN");
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/login" element={<PageLogin />} />
        <Route path="/cadastrar" element={<PageRegistration />} />
        <Route
          path="/deshboard"
          element={
            isAuthenticated ? (
              <Deshboard />
            ) : token !== null ? (
              <Deshboard />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route path="*" element={<Navigate replace to="/login" />} />
      </Routes>

      <ToastContainer />
    </AnimatePresence>
  );
}

export default RoutesPage;
