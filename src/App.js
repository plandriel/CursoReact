import React from "react";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./components/NavBar/Styles.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartCustomProvider from "./components/Context/CartContext";
import { Products } from "./components/Products/Products";

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
            <Route path="/productos" element={<Products />}></Route>
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </CartCustomProvider>
    </BrowserRouter>
  );
};

export default App;
