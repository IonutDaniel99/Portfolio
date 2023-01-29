import { BrowserRouter, Switch, Route, Link, NavLink, Routes } from 'react-router-dom'
import HomeApp from './Home/HomeApp';
import IndonesiaApp from './Projects/FromDesignToCode/Indonesia/IndonesiaApp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeApp />}></Route>
        <Route path='/Projects/FromDesignToCode/Indonesia' element={<IndonesiaApp />} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
