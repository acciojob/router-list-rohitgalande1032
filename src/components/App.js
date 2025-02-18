
import React from "react";
import './../styles/App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import ItemDetail from "./ItemDetail";

import ItemList from "./ItemList";

const items = [
  {id: 1, description: "Description fot Item 1"},
  {id: 2, description: "Description fot Item 2"},
  {id: 3, description: "Description fot Item 3"},
]

const App = () => {
  return (
    <BrowserRouter>
    <div id="main">
        <h1>Item List</h1>
        <Routes>
        <Route path="/" element={<ItemList  items={items}/>} />
        <Route path="/items/:id" element={<ItemDetail items={items} />} />
      </Routes>
        
    </div>

  

    </BrowserRouter>
  )
}

export default App
