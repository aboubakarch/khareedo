import { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import CartContext from './contextAPIs/cartConext';
import routes from './routes';

import 'react-loading-skeleton/dist/skeleton.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cartProduct, setCartProduct] = useState();

  return (
    <CartContext.Provider value={{ cartProduct, setCartProduct }}>
      <ToastContainer />
      <Router>
        {routes.map(({ path, Component }) => (
          <Route key={path} path={path} exact>
            <Component />
          </Route>
        ))}
      </Router>
    </CartContext.Provider>
  );
}

export default App;
