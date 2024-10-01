// components/ShoppingList.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, updateItem } from '../components/shoppingListSlice';

const ShoppingList = () => {
  const items = useSelector((state) => state.shoppingList.items);
  const dispatch = useDispatch();
  const [itemName, setItemName] = useState('');

  const handleAddItem = (event) => {
    event.preventDefault();
    dispatch(addItem({ name: itemName, id: Date.now() }));
    setItemName('');
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const handleUpdateItem = (item) => {
    dispatch(updateItem(item));
  };

  return (
    <div style={{backgroundColor: "#F7B1C9", width: "100vw", height: "100vh", margin: "0", position: "fixed" }}>
      <h1>Shopping List</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            <button onClick={() => handleUpdateItem(item)}>Update</button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleAddItem}>
        <input
          type="text"
          name="name"
          value={itemName}
          placeholder="Add item"
          onChange={(event) => setItemName(event.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default ShoppingList;