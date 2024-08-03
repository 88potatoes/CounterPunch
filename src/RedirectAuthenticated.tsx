import { useAuth } from "@clerk/clerk-react";
import { Navigate, Outlet } from "react-router-dom";

function RedirectAuthenticated() {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return null; // or a loading spinner
  }

  if (isSignedIn) {
    return <Navigate to="/home" replace />;
  }

  return <Outlet />;
}

export default RedirectAuthenticated;