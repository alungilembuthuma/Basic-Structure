// components/ShareList.js
import React from 'react';
import { useSelector } from 'react-redux';

const ShareList = () => {
  const list = useSelector((state) => state.shoppingList.list);

  const handleShareList = () => {
    // Implement sharing logic here
  };

  return (
    <div>
      <h1>Share List</h1>
      <p>Share your shopping list with others:</p>
      <button onClick={handleShareList}>Share</button>
    </div>
  );
};

export default ShareList;