import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Play from './components/Play';

function App() {
  return (
    <div className='flex flex-col items-center justify-center w-screen bg-black h-screen text-white'>
     <Routes>
      <Route path='/' element = {<Home></Home>}></Route>
      <Route path='/PlayGame' element = {<Play></Play>}></Route>
     </Routes>
    </div>
  );
}

export default App;
