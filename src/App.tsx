import React from 'react';
import './App.css';
import Appbar from "./components/appbar/Appbar";
import Maincontent from "./components/maincontent/Maincontent";

function App() {
  return (
    <div className="App">
      <Appbar/>
      <Maincontent/>
    </div>
  );
}

export default App;
