import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Home from '../pages/Home';
import ProductDetails from '../pages/ProductDetails';
import Shop from '../pages/Shop';

export const PAGES_ROUTES = {
  home: '/',
  productDetails: '/product',
  cart: '/cart',
  shop: '/shop',
  checkout: '/checkout',
};

const routes = [
  { path: PAGES_ROUTES.home, Component: Home },
  { path: `${PAGES_ROUTES.productDetails}/:id`, Component: ProductDetails },
  { path: PAGES_ROUTES.cart, Component: Cart },
  { path: PAGES_ROUTES.shop, Component: Shop },
  { path: PAGES_ROUTES.checkout, Component: Checkout },
];

export default routes;
