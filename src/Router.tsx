import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import NewMatch from "./pages/NewMatch";
import Match from "./pages/Match";
import NewMatchLive from "./pages/NewMatchLive";
import RootLayout from "./layouts/root-layout";
import DashboardLayout from "./layouts/dashboard-layout";
import MatchInfo from "./pages/MatchInfo.tsx";
import ProtectedRoute from "./ProtectedRoute.tsx";
import Landing from "./pages/Landing.tsx";
import RedirectAuthenticated from "./RedirectAuthenticated.tsx";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        element: <RedirectAuthenticated />,
        children: [
          {
            path: "/",
            element: <Landing />,
          },
        ],
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "/home",
            element: <Home />,
          },
          {
            path: "/newMatch",
            element: <NewMatch />,
          },
          {
            path: "/newMatchLive",
            element: <NewMatchLive />,
          },
          {
            path: "/match",
            element: <Match />,
          },
          {
            path: "/match/:id",
            element: <MatchInfo />,
          },
        ],
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
