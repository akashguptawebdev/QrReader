import React, { useEffect, useState } from "react";
import Scanner from './components/Scanner'
// import "./App.css"


const App = () => {

  return (
    <div className="App">
      <h2 style={{ textAlign: "center" }}> Qr Code scanning in React</h2>

      <Scanner />
    
    </div>
  );
};

export default App;
