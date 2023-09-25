import React from 'react';
import { useState } from 'react';
import { Header, Body, Footer, Menu } from './Components/import';
import './App.css';

function App() {

  const [items, setItems] = useState([
    { id: 1, name: 'iphone 14', isChecked: false },
    { id: 2, name: 'iphone 13', isChecked: false },
    { id: 3, name: 'iphone 12', isChecked: false },
    { id: 4, name: 'iphone 11', isChecked: false },
  ]);

  const handleCheckboxChange = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />

      <ul className='ul-product'>
        {items.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.isChecked}
              onChange={() => handleCheckboxChange(item.id)}
            />
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;