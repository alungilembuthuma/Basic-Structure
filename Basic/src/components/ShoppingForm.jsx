import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem, deleteItem } from '../components/shoppingListSlice'
import { useEffect } from 'react';


function ShoppingListForm() {
  const dispatch = useDispatch();
  const [item, setItem] = useState('');
  const [quantity, setQuantity] = useState('');
  const [category, setCategory] = useState('');
  const [items, setItems] = useState([]); // store items in state

  useEffect(() => {
    fetch('http://localhost:3000/items')
      .then(response => response.json())
      .then(data => setItems(data));
  }, []);

  const handleAddItem = () => {
    if (item && quantity && category) {
      let shoppingItem = {
        id: Date.now(),
        item,
        quantity: parseInt(quantity),
        category,
      };
      fetch('http://localhost:3000/items', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(shoppingItem),
      })
        .then(response => response.json())
        .then(data => {
          setItems([...items, data]);
          setItem('');
          setQuantity('');
          setCategory('');
        });
    }
  };

  const categories = ['Household', 'Personal Care', 'Clothes', 'Food'];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#F7B1C9', margin: 0, padding: 20, width: "100%", height: "100vh" }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Shopping List</h1>
      <div style={{ background: '#5b2c5d', padding: 20, borderRadius: 5, boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', margin: '0 auto', width: '50%' }}>
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
          <option value="">Category</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
        <button onClick={handleAddItem} style={{ backgroundColor: 'pink', color: 'black', border: 'none', padding: 10, borderRadius: 4, cursor: 'pointer', transition: 'background-color 0.3s', width: '100%' }}>
          Add
        </button>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
          {categories.map(category => (
            <div key={category} style={{ background: '#fff', padding: 20, borderRadius: 5, boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', margin: 20, width: 'calc(30% - 20px)' }}>
              <h2 style={{ textAlign: 'center', color: '#333' }}>{category}</h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 20 }}>
                {items.filter(item => item.category === category).map(item => (
                  <li key={item.id} style={{ padding: 10, borderBottom: '1px solid #ccc' }}>
                    {item.item} ({item.quantity})
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShoppingListForm;