// components/ItemDetails.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateItem } from './features/shoppingListSlice';

const ItemDetails = ({ id }) => {
  const item = useSelector((state) => state.shoppingList.items.find((item) => item.id === id));
  const dispatch = useDispatch();

  const handleUpdateItem = (item) => {
    dispatch(updateItem(item));
  };

  return (
    <div>
      <h1>Item Details</h1>
      <p>Name: {item.name}</p>
      <p>Quantity: {item.quantity}</p>
      <p>Notes: {item.notes}</p>
      <form onSubmit={(e) => handleUpdateItem({ ...item, name: e.target.name.value, quantity: e.target.quantity.value, notes: e.target.notes.value })}>
        <input type="text" name="name" value={item.name} />
        <input type="number" name="quantity" value={item.quantity} />
        <textarea name="notes" value={item.notes} />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default ItemDetails;