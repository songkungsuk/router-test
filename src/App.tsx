import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Buttons } from './components/Button';
import { Menu } from './components/Menu';
import { State } from './components/State';
import { Contact } from './components/contact';
import { Grid1 } from './components/grid1/Grid1';
import { Grid2 } from './components/grid2/Grid2';
import { Home } from './components/home';
import { Topic } from './components/topic';
import { Boot } from './components/Boot';
import 'bootstrap/dist/css/bootstrap.min.css'
import { AlertTest } from './components/AlertTest';
import { CarousleTest } from './components/CarousleTest';
import { Login } from './components/Login';



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
          <Route path='/state' element={<State />}></Route>
          <Route path='/grid1' element={<Grid1 />}></Route>
          <Route path='/grid2' element={<Grid2 />}></Route>
          <Route path='/boot' element={<Boot />}></Route>
          <Route path='/alert' element={<AlertTest />}></Route>
          <Route path='/carousel' element={<CarousleTest />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
