import { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CartContext from './contextAPIs/cartConext';
import routes from './routes';

function App() {
  const [cartProduct, setCartProduct] = useState();

  return (
    <CartContext.Provider value={{ cartProduct, setCartProduct }}>
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
