import { Navigate, useLocation } from "react-router";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  const location = useLocation();
  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  console.log("TOKEN");
  
  console.log(token);
  return children;
}

export default ProtectedRoute;
