import React, { useState } from "react";
import { Navigate } from "react-router-dom";

import PrivateHeader from "./PrivateHeader";
import PrivateSidebar from "./PrivateSidebar";

import { ROUTERS } from "../constants/routers";

const PrivateLayout = ({ children, userInfo, setUserInfo }) => {
  const [isShowSidebar, setIsShowSidebar] = useState(false);

  if (!userInfo || userInfo.role !== "admin") {
    return <Navigate to={ROUTERS.USER.HOME} />;
  }

  return (
    <div className="app">
      <PrivateHeader
        isShowSidebar={isShowSidebar}
        setIsShowSidebar={setIsShowSidebar}
        userInfo={userInfo}
        setUserInfo={setUserInfo}
      />
      <div className="main-container">
        <div
          className={
            isShowSidebar ? "main-content main-show-sidebar" : "main-content"
          }
        >
          {children}
        </div>
        <PrivateSidebar
          isShowSidebar={isShowSidebar}
          setIsShowSidebar={setIsShowSidebar}
        />
      </div>
    </div>
  );
};

export default PrivateLayout;
