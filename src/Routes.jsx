import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import ProductPage from './pages/Product';
import ErrorPage from './pages/Error404';
import App from './App';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'shop',
        element: <Shop />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'product/:id',
        element: <ProductPage />,
      },
    ],
  },
];

export default routes;
