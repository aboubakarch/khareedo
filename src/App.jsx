import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartContext from './contextAPIs/cartConext';
import routes from './routes';

function App() {
  const [cartProduct, setCartProduct] = useState();

  return (
    <CartContext.Provider value={{ cartProduct, setCartProduct }}>
      <BrowserRouter>
        <Routes>
          {routes.map(({ path, element }) => (
            <Route path={path} element={element} key={path} />
          ))}
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
