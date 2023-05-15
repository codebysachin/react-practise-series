import { useState } from "react";
import AddItem from './AddItem';
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

export default function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('Shopping List')));
  const [newItem, setNewItem] = useState('');

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem('Shopping List', JSON.stringify(newItems));
  };

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id: id, checked: false, item: item };
    const listItems = [...items, myNewItem];
    console.log(items.length);
    console.log(items[items.length - 1].id);
    console.log(items[items.length - 1].id + 1);
    setAndSaveItems(listItems);
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ?
      { ...item, checked: !item.checked } : item);
      setAndSaveItems(listItems);
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    console.log(newItem);
    addItem(newItem);
    setNewItem('');
  };

  return (
    <div className="App">
      <Header title="Groceries List" />
      <AddItem newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit} />
      <Content items={items} handleCheck={handleCheck} handleDelete={handleDelete} />
      <Footer length={items.length} />
    </div>
  );
}
