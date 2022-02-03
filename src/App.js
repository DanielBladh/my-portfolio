import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Sidebar from './components/Sidebar';
import SidebarRight from './components/SidebarRight';


function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <SidebarRight />
      <Footer />
      <div className="content">
      <Routes>
        <Route exact path='/'
        element={<Home />} />
        <Route exact path='/about'
        element={<About />} />
        <Route exact path='/resume'
        element={<Resume />} />
        <Route exact path='/contact'
        element={<Contact />} />
        <Route path="*"
        element={<NotFound />}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;

