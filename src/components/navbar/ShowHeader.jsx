import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ShowHeader = ({ children }) => {
  const [showHeader, setShowHeader] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/" && location.pathname !== "/dashboard") {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }
  }, [location]);

  return <div>{showHeader && children}</div>;
};

export default ShowHeader;
