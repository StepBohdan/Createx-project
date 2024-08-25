import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FirstPage from './Pages/FirstPage/FirstPage';
import SecondPage from './Pages/SecondPage/SecondPage';
import ThirdPage from './Pages/ThirdPage/ThirdPage';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/services" element={<SecondPage />} />
        <Route path='/services/seo' element={<ThirdPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
