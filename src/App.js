import React from "react";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import NavBar from "./components/NavBar/NavBar";
import "./components/NavBar/Styles.css";





const App = () => {

  return (
    <>
      <NavBar />
      <ItemListContainer />
    </>
  );
};

export default App;
