import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "@/Home.tsx"
import NewMatch from './NewMatch';
import Match from './Match';
import NewMatchLive from './NewMatchLive';
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