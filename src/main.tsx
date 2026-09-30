import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import App from './App.tsx';
import { Home } from '@/pages/Home';
import { InProgressPage } from '@/pages/InProgressPage';
import { NotFound } from '@/pages/NotFound';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/work', element: <InProgressPage label="Work" /> },
      { path: '/about', element: <InProgressPage label="About" /> },
      { path: '/contact', element: <InProgressPage label="Contact" /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
