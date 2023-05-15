<<<<<<< HEAD
import React from "react";
import ItemList from "./ItemList";

const Content = ({items, handleCheck, handleDelete}) => {
  return (
    <main>
      {items.length ? (
        <ItemList items={items} handleCheck={handleCheck} handleDelete={handleDelete} />
=======
import React, { useState } from "react";
import { FaTrashAlt } from 'react-icons/fa';

const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "One half pound bag of Cocoa Covered Almonds Unsalted"
    },
    {
      id: 2,
      checked: false,
      item: "Item 2"  
    },
    {
      id: 3,
      checked: false,
      item: "Item 3"
    }
  ]);

  const handleCheck = (id) => {
      const listItems = items.map((item) => item.id === id ? 
      {...item, checked: !item.checked}: item);
      setItems(listItems);
      localStorage.setItem('Shopping List', JSON.stringify(listItems));
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item)=> item.id !== id);
    setItems(listItems);
    localStorage.setItem('Shopping List', JSON.stringify(listItems));
  };
    
  return (
    <main>
      {items.length ? (
      <ul>
        {items.map((item)=>(
          <li key={item.id}>
          <input type="checkbox"
            onChange={() => handleCheck(item.id)}
            checked={item.checked} />
          <label 
          style={(item.checked) ? {textDecoration: 'line-through'}: null}
          onDoubleClick={() => handleCheck(item.id)}>{item.item}</label>
          <FaTrashAlt onClick={() => handleDelete(item.id)} role="button" tabIndex='0'/> 
        </li>
        ))}
      
      </ul>
>>>>>>> 2fb3620351947d7925a91ed8ea4f8e2cfec8df9b
      ) : <p>Your List is empty</p> }
    </main>
  );
};

export default Content;
