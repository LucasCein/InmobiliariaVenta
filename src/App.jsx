import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import ItemDetail from "./Components/ItemDetail/ItemDetail";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import { Nav } from "react-bootstrap";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/home"
          element={
            <>
              <NavBar></NavBar>
              <Home></Home>
            </>
          }
        />
        <Route
          path="/propiedades/:cpd"
          element={
            <>
              <NavBar></NavBar>
              <ItemListContainer></ItemListContainer>
            </>
          }
        />
        <Route
          path="/detalleItem/:id"
          element={
            <>
              <NavBar></NavBar>
              <ItemDetail />
            </>
          }
        />
        <Route path="*" element={<Navigate to="/home"></Navigate>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
