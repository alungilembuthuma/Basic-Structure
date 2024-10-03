import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem } from '../components/shoppingListSlice';

function ShoppingList() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.shopping);
  const handleDelete = (id) => {
    dispatch(deleteItem(id));
  };
  return (
    <div className="shopping-list">
      <h3>Shopping List</h3>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <span>{item.itemName}</span>
            <span>{item.quantity}</span>
            <button className='delete-btn' onClick={() => handleDelete(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;