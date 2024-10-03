import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, updateItem } from "./shoppingListSlice";

function ShoppingList() {
  const dispatch = useDispatch();
  const shoppingList = useSelector((state) => state.shoppingList);

  const [newItem, setNewItem] = useState("");

  const handleAddItem = () => {
    dispatch(addItem(newItem));
    setNewItem("");
  };

  const handleRemoveItem = (index) => {
    dispatch(removeItem(index));
  };

  const handleUpdateItem = (index, value) => {
    dispatch(updateItem(index, value));
  };

  return (
    <div style={{ backgroundColor: "#F7B1C9", width: "100vw", height: "100vh", margin: "0", position: "fixed" }}>
      <h1 style={{ fontFamily: "sans", fontSize: "70px", marginLeft: "33%" }}>Shopping List</h1>
      {shoppingList && shoppingList.map((item, index) => (
        <div key={index} style={{ margin: "20px", padding: "20px", border: "1px solid #ccc", borderRadius: "10px", width: "300px" }}>
          <h2>{item}</h2>
          <input
            type="text"
            value={item}
            onChange={(e) => handleUpdateItem(index, e.target.value)}
            style={{ width: "100%", padding: "10px", margin: "10px 0" }}
          />
          <button onClick={() => handleRemoveItem(index)}>Remove</button>
        </div>
      ))}
      <div style={{ margin: "20px", padding: "20px", border: "1px solid #ccc", borderRadius: "10px", width: "300px" }}>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add new item"
          style={{ width: "100%", padding: "10px", margin: "10px 0" }}
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
    </div>
  );
}

export default ShoppingList;