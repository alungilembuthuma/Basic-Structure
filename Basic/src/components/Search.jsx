// components/Search.js
import React from 'react';
import { useSelector } from 'react-redux';

const Search = () => {
  const items = useSelector((state) => state.shoppingList.items);

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredItems = items.filter((item) => item.name.toLowerCase().includes(searchTerm));
    // Update the state with the filtered items
  };

  return (
    <div>
      <h1>Search</h1>
      <input type="search" onChange={handleSearch} placeholder="Search for items" />
    </div>
  );
};

export default Search;