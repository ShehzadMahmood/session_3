import React from 'react';
import './App.css';
import Juice from './juice.js';

function App() { 
  return (
    <div className="App">
      <h1>We are manufacturing Bottle juice</h1>
      <Juice small="mango guava peach litchi" halfliter="mango guava peach litchi" liter="mango guava litchi peach" literhalf="mango guava litchi peach" />
    </div>
  );
}

export default App;
