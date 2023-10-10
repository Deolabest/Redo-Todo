import React, { useState } from "react";

function TodoList() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  function addItem() {
    if (!newItem) {
      alert("Enter an item.");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 10000),
      value: newItem
    };
    setItems((oldList) => [...oldList, item]);

    setNewItem("");
  }

  return (
    <div>
      <input
        placeholder="Add an item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        type="text"
      />

      <button onClick={() => addItem()}>Add</button>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.value}
            <button
              onClick={() => {
                setItems(items.filter((a) => a.id !== item.id));
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
