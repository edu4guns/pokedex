import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Pokelist from "./pages/Homepage";
import Details from "./pages/Details";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className='App'>
      <Navbar />

      <div className='routes'>
        <Routes>
          <Route exact path='/' element={<Pokelist />} />
          <Route exact path='/pokedetails' element={<Details />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
