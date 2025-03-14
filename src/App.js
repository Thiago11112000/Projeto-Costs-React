import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NewProject from './components/pages/NewProject';
import Contact from './components/pages/Contact';
import Company from './components/pages/Company';
import Home from './components/pages/Home';

import Container from './components/layout/Container';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Link to="/">Home</Link>
          <Link to="/contact">Contato</Link>
          <Link to="/company">Empresa</Link>
          <Link to="/newProject">Novo Projeto</Link>
        </div>

        <Container customClass="min-height">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/company" element={<Company />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/newProject" element={<NewProject />} />
          </Routes>
        </Container>
        
        <p>Footer</p>
      </Router>
    </div>
  );
}

export default App;