import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import FirstPage from './Pages/FirstPage/FirstPage';
import SecondPage from './Pages/SecondPage/SecondPage';
import ThirdPage from './Pages/ThirdPage/ThirdPage';
import CaseStudiesPage from './Pages/CaseStudiesPage/CaseStudiesPage';
import OrSalePage from "./Pages/orSalePage/orSalePage"

import './App.css';

function App() {

  function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }
  
 

  return (
  
    <Router>
      <ScrollToTop />
      <Routes>
      
        <Route path="/" element={<FirstPage />} />
        <Route path="/services" element={<SecondPage />} />
        <Route path='/services/seo' element={<ThirdPage/>} />
        <Route path='/case-studies' element={<CaseStudiesPage/>} />
        <Route path='/case-studies/or-sale' element={<OrSalePage/>} />
      </Routes>
    </Router>
  );
}

export default App;
