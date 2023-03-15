import './App.css';
import About from './Pages/About';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Skills from './Pages/Skills';
import Project from './Pages/Project';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path ="/About" element= {<About/>}/>
        <Route path ="/Skills" element ={<Skills/>}/>
        <Route path ="/Project" element={<Project/>}/>
        <Route path = "/Contact" element = {<Contact/>}/>

      </Routes>
    </BrowserRouter>    
    </div>
  );
}

export default App;
