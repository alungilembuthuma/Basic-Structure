// components/SortingFiltering.js
import React from 'react';
import { useSelector } from 'react-redux';

const SortingFiltering = () => {
  const items = useSelector((state) => state.shoppingList.items);

  const handleSort = (e) => {
    const sortType = e.target.value;
    const sortedItems = items.sort((a, b) => {
      if (sortType === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortType === 'category') {
        return a.category.localeCompare(b.category);
      }
    });
    // Update the state with the sorted items
  };

  const handleFilter = (e) => {
    const filterType = e.target.value;
    const filteredItems = items.filter((item) => item.category === filterType);
    // Update the state with the filtered items
  };

  return (
    <div>
      <h1>Sorting and Filtering</h1>
      <select onChange={handleSort}>
        <option value="name">Sort by Name</option>
        <option value="category">Sort by Category</option>
      </select>
      <select onChange={handleFilter}>
        <option value="Groceries">Filter by Groceries</option>
        <option value="Household">Filter by Household</option>
        <option value="Personal Care">Filter by Personal Care</option>
      </select>
    </div>
  );
};

export default SortingFiltering;