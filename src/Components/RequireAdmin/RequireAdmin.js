import { Navigate, useLocation } from "react-router-dom";
import React from "react";
import useAdmin from "../../Hooks/useAdmin";
import Loading from "../Loading/Loading";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const RequireAdmin = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);
  let location = useLocation();

  if (loading || adminLoading) {
    return <Loading />;
  }

  if (!user || !admin) {
    signOut(auth);
    localStorage.removeItem("accessToken");
    return (
      <Navigate
        to="/login"
        state={{
          from: location,
        }}
        replace
      />
    );
  }

  return children;
};

export default RequireAdmin;
