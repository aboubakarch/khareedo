import Cart from '../pages/Cart';
import Home from '../pages/Home';
import ProductDetails from '../pages/ProductDetails';

export const PAGES_ROUTES = {
  home: '/',
  productDetails: '/product',
  cart: '/cart',
};

const routes = [
  { path: PAGES_ROUTES.home, Component: Home },
  { path: `${PAGES_ROUTES.productDetails}/:id`, Component: ProductDetails },
  { path: PAGES_ROUTES.cart, Component: Cart },
];

export default routes;
