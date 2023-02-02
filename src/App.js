import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeApp from './Home/HomeApp';
import CardsApp from './Projects/FromDesignToCode/Cards/CardsApp';
import IndonesiaApp from './Projects/FromDesignToCode/Indonesia/IndonesiaApp';
import MazdaRx8Main from './Projects/MazdaRx8/MazdaRx8Main';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeApp />}></Route>
        <Route path='/Projects/FromDesignToCode/Indonesia' element={<IndonesiaApp />} ></Route>
        <Route path='/Projects/FromDesignToCode/Cards' element={<CardsApp />} ></Route>
        <Route path='/Projects/MazdaRx8' element={<MazdaRx8Main />} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
