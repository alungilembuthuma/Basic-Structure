// components/ShoppingList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, updateItem } from './features/shoppingListSlice';

const ShoppingList = () => {
  const items = useSelector((state) => state.shoppingList.items);
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const handleUpdateItem = (item) => {
    dispatch(updateItem(item));
  };

  return (
    <div>
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
      <form onSubmit={(e) => handleAddItem({ name: e.target.name.value, id: Date.now() })}>
        <input type="text" name="name" placeholder="Add item" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default ShoppingList;