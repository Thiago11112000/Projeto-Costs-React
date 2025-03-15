import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewProject from './components/pages/NewProject';
import Contact from './components/pages/Contact';
import Company from './components/pages/Company';
import Home from './components/pages/Home';

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Projects from './components/pages/Projects';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Container customClass="min-height">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/company" element={<Company />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/newProject" element={<NewProject />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </Container>
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;