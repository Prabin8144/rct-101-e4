import { Navigate } from "react-router-dom";

const RequiredAuth = ({ children }) => {
  
  let localToken = localStorage.getItem("token") || "";
  console.log(localToken);

  if (localToken) {
    return children;
  }

  return <Navigate to= "/" />;
};

export default RequiredAuth;
