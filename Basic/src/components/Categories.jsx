// components/Categories.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateItem } from '../features/shoppingListSlice';

const Categories = ({ id }) => {
  const item = useSelector((state) => state.shoppingList.items.find((item) => item.id === id));
  const dispatch = useDispatch();

  const handleUpdateItem = (item) => {
    dispatch(updateItem(item));
  };

  return (
    <div>
      <h1>Categories</h1>
      <p>Current Category: {item.category}</p>
      <form onSubmit={(e) => handleUpdateItem({ ...item, category: e.target.category.value })}>
        <select name="category">
          <option value="Groceries">Groceries</option>
          <option value="Household">Household</option>
          <option value="Personal Care">Personal Care</option>
        </select>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Categories;