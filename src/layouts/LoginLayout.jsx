import React from "react";
import { Navigate } from "react-router-dom";

import { ROUTERS } from "../constants/routers";

const LoginLayout = ({ children }) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  if (userInfo) {
    return <Navigate to={ROUTERS.USER.HOME} />;
  }

  return <div className="app">{children}</div>;
};

export default LoginLayout;
