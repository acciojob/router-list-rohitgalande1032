import React from "react";
import { Link } from "react-router-dom";



const ItemList = ({items}) => {
  return (
    <div>
      <ul>
      {items.map((item) => (
        <li key={item.id}><Link to={`/items/${item.id}`}>Item {item.id}</Link></li>
      ))}
      </ul>
    </div>
  );
};

export default ItemList;
