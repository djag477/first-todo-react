import { useState } from 'react';
import './App.css';
import Bar from './Components/Bar/Bar.js';


function App() {

  const [items, setItems] = useState([]);
  
  const addItem = item => {
    setItems([...items, item])
  }

  

  return (
    <div className="App">
      <Bar addItemProp = {addItem} allItems={items}/>  
    </div>
  );
}

export default App;
