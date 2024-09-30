// components/Categories.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Categories = ({ id }) => {
  const item = useSelector((state) => state.shoppingList.items.find((item) => item.id === id));
  const dispatch = useDispatch();

  const handleUpdateItem = (event) => {
    event.preventDefault(); // Add this line to prevent the default form submission behavior
    dispatch(updateItem({ ...item, category: event.target.category.value }));
  };

  return (
    <div>
      <h1>Categories</h1>
      <p>Current Category: {item.category}</p>
      <form onSubmit={handleUpdateItem}>
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