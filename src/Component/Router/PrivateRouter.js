import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  let location = useLocation();

  if (loading) {
    return (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }
  if (!user?.uid) {
    return <Navigate to="/user/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRouter;
