import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

function App() {
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
