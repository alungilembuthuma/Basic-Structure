import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem, deleteItem } from '../components/shoppingListSlice'

function ShoppingListForm() {
  const dispatch = useDispatch();
  const [item, setItem] = useState('');
  const [quantity, setQuantity] = useState('');
  const [category, setCategory] = useState('');
  const [items, setItems] = useState([]); // store items in state

  const handleAddItem = () => {
    if (item && quantity && category) {
      let shoppingItem = {
        id: Date.now(),
        item,
        quantity: parseInt(quantity),
        category,
      };
      dispatch(addItem(shoppingItem));
      setItems([...items, shoppingItem]); // add item to state
      setItem('');
      setQuantity('');
      setCategory('');
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f4', margin: 0, padding: 20 }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Shopping List</h1>
      <div style={{ background: '#fff', padding: 20, borderRadius: 5, boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', margin: '0 auto', width: 500 }}>
        <input
          type="text"
          placeholder="Enter item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          style={{ width: 'calc(100% - 20px)', padding: 10, margin: '10px 0', border: '1px solid #ccc', borderRadius: 4 }}
        />
        <input
          type="number"
          placeholder="Enter quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          style={{ width: 'calc(100% - 20px)', padding: 10, margin: '10px 0', border: '1px solid #ccc', borderRadius: 4 }}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)} style={{ width: 'calc(100% - 20px)', padding: 10, margin: '10px 0', border: '1px solid #ccc', borderRadius: 4 }}>
          <option value="Category">Category</option>
          <option value="Household">Household</option>
          <option value="Personal Care">Personal Care</option>
          <option value="Clothes">Clothes</option>
          <option value="food">Food</option>
        </select>
        <button onClick={handleAddItem} style={{ backgroundColor: '#28a745', color: 'white', border: 'none', padding: 10, borderRadius: 4, cursor: 'pointer', transition: 'background-color 0.3s', width: '100%' }}>
          Add
        </button>
        <ul style={{ listStyle: 'none', padding: 0, margin: 20 }}>
          {items.map((item) => (
            <li key={item.id} style={{ padding: 10, borderBottom: '1px solid #ccc' }}>
              {item.item} ({item.quantity}) - {item.category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ShoppingListForm;