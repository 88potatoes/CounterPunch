import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./pages/Home.tsx"
import NewMatch from './pages/NewMatch';
import Match from './pages/Match';
import NewMatchLive from './pages/NewMatchLive';
import RootLayout from './layouts/root-layout';
import DashboardLayout from './layouts/dashboard-layout';

const router = createBrowserRouter([
  {
    element: <RootLayout/>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/newMatch',
        element: <NewMatch />,
      },
      {
        path: '/newMatchLive',
        element: <NewMatchLive />,
      },
      {
        path: '/match',
        element: <Match />,
      },
      {
        element: <DashboardLayout />,
        path: "dashboard",
        children: [
          // { path: "/dashboard", element: <DashboardPage /> },
          // { path: "/dashboard/invoices", element: <InvoicesPage /> }
        ]
      }
    ]
  }
]);

export function Router() {
  return <RouterProvider router={router} />;
}