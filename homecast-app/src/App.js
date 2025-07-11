import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Step1Form from './Step1Form';
import Confirmation from './Confirmation';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Step1Form />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
