import React from "react";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

import NavBar from "./components/NavBar/NavBar";
import "./components/NavBar/Styles.css";




const App = () => {

  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenido a la tienda rapida de PergaminoIT" />
      
    </>
  );
};

export default App;
