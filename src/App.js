import React from "react";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./components/NavBar/NavBar";
import Cart from "./components/Cart/Cart"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./components/NavBar/Styles.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartCustomProvider from "./components/Context/CartContext";

const App = () => {

  return (
    <BrowserRouter>
      <CartCustomProvider>
        <NavBar />
        <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
                path="/category/:categoryId"
                element={<ItemListContainer />}
            />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartCustomProvider>
    </BrowserRouter>
  );
};

export default App;
