import React from 'react';
import {Router} from "@reach/router"
import Main from "./pages/Main"
import ProductDetail from "./components/ProductDetail"
import ProductEdit from "./components/ProductEdit"


function App() {
  return (
    <div>
      <Router>
        <Main path="/products" default/>
        <ProductDetail path="/product/:id"/>
        <ProductEdit path="/product/update/:id"/>
      </Router>
    </div>
  );
}

export default App;
