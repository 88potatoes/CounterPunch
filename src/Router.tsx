import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "@/Home.tsx"
import NewMatch from './NewMatch';
import Match from './Match';
import NewMatchLive from './NewMatchLive';

const router = createBrowserRouter([
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
]);

export function Router() {
  return <RouterProvider router={router} />;
}