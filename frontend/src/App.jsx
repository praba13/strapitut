import { createBrowserRouter, RouterProvider, Outlet, Route } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import ReviewDetails from './pages/ReviewDetails';

import Header from './components/Header';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/details/:id',
        element: <ReviewDetails />
      },
      {
        path: '/category/:id',
        element: <Category />
      }],
  },
]);

function App() {
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
