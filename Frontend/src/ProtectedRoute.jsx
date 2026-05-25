import { Navigate, Outlet } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function ProtectedRoute(){
  const token=localStorage.getItem("token");

  if (!token){
    return <Navigate to="/" replace />;
  }

  try{
    const decoded=jwtDecode(token);
    const isExpired=decoded.exp * 1000 < Date.now();

    if (isExpired){
      localStorage.removeItem("token");
      return <Navigate to="/" replace />;
    }

    return <Outlet />;
  } catch(error){
    localStorage.removeItem("token");
    return <Navigate to="/" replace />;
  }
}

export default ProtectedRoute;