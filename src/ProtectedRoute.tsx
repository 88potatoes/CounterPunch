import { useAuth } from "@clerk/clerk-react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return null; // or a loading spinner
  }

  if (!isSignedIn) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;