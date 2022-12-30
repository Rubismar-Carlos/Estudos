import './App.css';

// 1 - config react router
import {BrowserRouter,Routes, Route, Navigate} from 'react-router-dom';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Info from './pages/Info';
import NotFound from './pages/NotFound';
import Search from './pages/Search';

// Components 
import Navbar from './Components/Navbar';
import SearchForm from './Components/SearchForm';

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
    <BrowserRouter>
    {/* 2 - Links com react Router*/}
      <Navbar />
      {/* 9 - pesquisa */}
      <SearchForm />
        <Routes>
          <Route path='/Home' element={<Home/>} />
          <Route path='/About' element={<About/>} />
          {/* 4 - rota dinamica*/}
          <Route path='/products/:id' element={<Product />} />
          {/* 6 - nested route*/}
          <Route path='/products/:id/info' element={<Info />} />
          {/* 9 - pesquisa*/}
          <Route path='/search' element={<Search />} />
          {/* 10 - redirect */}
          <Route path='/company' element={<Navigate to='/About'/>} />
          {/* 7 -  rota nao encontrada erro 404*/}
          <Route path='*' element={<NotFound />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
