import './App.css';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About'
import Articles from './components/Articles';
import Topics from './components/Topics';
import Article from './components/Article';

function App() {
  return (
    <div className="App">
    <Header />
    <Nav />
    <Routes>
      <Route path='/' element={<About />} />
      <Route path='/about' element={<About />} />
      <Route path='/articles' element={<Articles />} />
      <Route path='/topics' element={<Topics />} />
      <Route path='*' element={<p className="loading">404 not found!</p>} />  
      <Route path='/articles/:topic' element={<Articles />} />
      <Route path='/articles/article/:article_id' element={<Article />} />
    </Routes>
   </div>
  );
}

export default App;

