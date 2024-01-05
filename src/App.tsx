import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Menu } from './components/Menu';
import { Contact } from './components/contact';
import { Home } from './components/home';
import { Topic } from './components/topic';
import { Buttons } from './components/Button';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/buttons' element={<Buttons />}></Route>
          <Route path='/topic' element={<Topic />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
