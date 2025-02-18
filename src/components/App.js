
import React from "react";
import './../styles/App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import ItemDetail from "./ItemDetail";

import ItemList from "./ItemList";

const items = [
  {id: 1, description: "Description for Item 1"},
  {id: 2, description: "Description for Item 2"},
  {id: 3, description: "Description for Item 3"},
]

const App = () => {
  return (
    <BrowserRouter>
    <div id="main">
        <Routes>
        <Route path="/" element={<ItemList  items={items}/>} />
        <Route path="/items/:id" element={<ItemDetail items={items} />} />
      </Routes>
        
    </div>

  

    </BrowserRouter>
  )
}

export default App
