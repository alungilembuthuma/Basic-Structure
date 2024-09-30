import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function List() {
  const [searchQuery, setSearchQuery] = useState('');
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [editedItem, setEditedItem] = useState(null);

  // Fetch the items from the server
  useEffect(() => {
    axios.get('/items')
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.error('Error fetching items:', error);
      });
  }, []);

  // Handle the addition of a new item
  const handleAddItem = () => {
    if (newItem.trim() === '') return; // Don't add empty items

    axios.post('/items', { name: newItem })
      .then(response => {
        setItems((prevItems) => [...prevItems, response.data]); // Add new item to the list
        setNewItem(''); // Clear input field
      })
      .catch(error => {
        console.error('Error adding item:', error);
      });
  };

  // Handle the edit of an item
  const handleEdit = async (id, updatedName) => {
    try {
      const response = await axios.put(`/items/${id}`, { name: updatedName });
      setItems(items.map((item) => (item.id === id ? response.data : item))); // Update the edited item
      setEditedItem(null); // Reset the edited item after saving
    } catch (error) {
      console.error('Error editing item:', error);
    }
  };

  // Handle the deletion of an item
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/items/${id}`);
      setItems(items.filter((item) => item.id !== id)); // Remove the deleted item
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  // Handle the submission of the edit form
  const handleEditSubmit = (event) => {
    event.preventDefault();
    handleEdit(editedItem.id, editedItem.name);
  };

  // Filter items based on search query
  const filteredItems = Array.isArray(items)
    ? items.filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  return (
    <div className="login-container" style={{
      backgroundColor: "#48cbff",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100%",
      width: "100%",
      height: "100vh",
      position: "fixed",
    }}>
      <h1 style={{ marginLeft: "5%" }}>Shopping List</h1>
      
      {/* Input Section */}
      <div className="inputs">
        <input
          type="search"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          placeholder="Search..."
          style={{
            width: "35%",
            padding: "10px",
            fontSize: "18px",
            marginLeft: "4%",
            marginTop: "3%",
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
            marginTop: "3%",
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
            marginTop: "3%",
          }}
        >
          Add Item
        </button>
      </div>

      {/* Items List */}
      <div className="inside">
        <ul style={{ fontSize: "35px" }}>
          {filteredItems.map((item) => (
            <li key={item.id}>
              {editedItem && editedItem.id === item.id ? (
                // Editing Form
                <form onSubmit={handleEditSubmit}>
                  <input
                    type="text"
                    value={editedItem.name}
                    onChange={(event) => setEditedItem({ ...editedItem, name: event.target.value })}
                    style={{
                      width: "50%",
                      padding: "10px",
                      fontSize: "18px",
                      marginLeft: "10px",
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      backgroundColor: "#4CAF50",
                      color: "white",
                      padding: "5px 10px",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                      marginLeft: "10px",
                    }}
                  >
                    Save
                  </button>
                </form>
              ) : (
                // Displaying Items
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
                  marginLeft: "10px",
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
                  marginLeft: "10px",
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
