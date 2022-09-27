import './App.css';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header'
import Articles from './components/Articles'
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
    <Header />
    <Nav />
    <Routes>
        <Route path='/' element={<Articles />} />
        <Route path='/articles' element={<Articles />} />
        <Route path='*' element={<p>404 not found!</p>} />
      </Routes>
   </div>
  );
}

export default App;
