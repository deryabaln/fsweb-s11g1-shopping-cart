import React, { useState } from "react";
import { Route } from "react-router-dom";
import { data } from "./data";

// Bileşenler
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

import ProductContext from "./contexts/ProductContext";
import CartContext from "./contexts/CartContext";

function App() {

  const [products, setProducts] = useState(data);
  const [cart, setCart] = useState([]);

  function localStorageWrite(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  const addItem = (item) => {
    if (!cart.find((cartItem) => cartItem.id === item.id)) {
      localStorageWrite([...cart, item]);
      setCart([...cart, item]);
    } else {
      return cart
    }
  };

  return (
    <ProductContext.Provider value={{ products, setProducts, addItem }}>
      <CartContext.Provider value={{ cart, setCart, localStorageWrite }}>
        <div className="App">
          <Navigation cart={cart} />
          {/* Routelar */}
          <main className="content">
            <Route exact path="/">
              <Products />
            </Route>

            <Route path="/cart">
              <ShoppingCart cart={cart} />
            </Route>
          </main>
        </div>
      </CartContext.Provider>
    </ProductContext.Provider>

  );
}

export default App;
