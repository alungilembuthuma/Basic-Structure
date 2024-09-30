import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function List() {
  const [searchQuery, setSearchQuery] = useState('');
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [editedItem, setEditedItem] = useState(null);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleAddItem = () => {
    setItems((prevItems) => [...prevItems, { id: Date.now(), name: newItem }]);
    setNewItem('');
  };

  const handleEdit = async (id, item) => {
    try {
      const response = await axios.put(`/items/${id}`, { name: item.name });
      setItems(items.map((item) => item.id === id ? response.data : item));
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/items/${id}`);
      setItems(items.filter((item) => item.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const filteredItems = items.filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className='login-container' style={{
      backgroundColor:"#48cbff",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100%",
      width: "100%",
      height: "100vh",
      position: "fixed",
    }}>
      <h1 style={{marginLeft:"5%"}}>Shopping List</h1>
      <div className='login-container' >
        <div className='inputs' >
          <input
            type="search"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search..."
            style={{
              width: "35%",
              padding: "10px",
              fontSize: "18px",
              marginLeft: "4%",
              marginTop: "3%"
            }}
          />
          <input
            type="text"
            value={newItem}
            onChange={(event) => setNewItem(event.target.value)}
            placeholder="Add new item..."
            style={{
              width: "35%",
              padding: "10px",
              fontSize: "18px",
              marginLeft: "4%",
              marginTop: "3%"
            }}
          />
          <button
            onClick={handleAddItem}
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginLeft: "4%",
              marginTop: "3%"
            }}
          >
            Add Item
          </button>
        </div>

        <div className='inside'>
          <ul style={{ fontSize: "35px" }}>
            {filteredItems.map((item) => (
              <li key={item.id}>
                {editedItem && editedItem.id === item.id ? (
                  <input
                    type="text"
                    value={editedItem.name}
                    onChange={(event) => setEditedItem({ ...editedItem, name: event.target.value })}
                    style={{
                      width: "50%",
                      padding: "10px",
                      fontSize: "18px",
                      marginLeft: "10px",
                      marginTop:"15%"
                    }}
                  />
                ) : (
                  <span>{item.name}</span>
                )}
                <button
                  onClick={() => setEditedItem(item)}
                  style={{
                    backgroundColor: "#FFC107",
                    color: "white",
                    padding: "5px 10px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginLeft: "10px"
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  style={{
                    backgroundColor: "#FF0000",
                    color: "white",
                    padding: "5px 10px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginLeft: "10px"
                  }}
                >
                  Delete
                </button>
                     </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  )}
