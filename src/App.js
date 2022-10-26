import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import ReactGA from 'react-ga';
import React, { useEffect } from 'react';

ReactGA.initialize('UA-91368724-2', {
  debug: true,
});

function App() {
  useEffect(() => {
    document.title = 'Hola baby';
  });

  return (
    <div className='wrapper'>
      <Router>
        <Routes>
          <Route path="*" element={<Login/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
