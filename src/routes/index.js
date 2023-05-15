import Home from '../pages/Home';
import ProductDetails from '../pages/ProductDetails';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/product/:id', element: <ProductDetails /> },
];

export default routes;
