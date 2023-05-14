import './App.css';
import Home from './components/home/Home';
import Info from './components/info/Info';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="*" element={<Home/>} />
        </Routes>
    </Router>
   
  );
}

export default App;
