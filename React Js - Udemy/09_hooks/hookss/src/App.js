// css
import './App.css';

// hooks
import { HookuseContext } from './components/HookUseContext';

// rrd
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'

// pages
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div className="App"> 
      <HookuseContext>
      <h1>React Hooks</h1>
      <BrowserRouter>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
      </HookuseContext>
    </div>
  );
}

export default App;
