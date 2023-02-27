import { BrowserRouter, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import HomeApp from './Home/HomeApp';
import Projects from './Home/Screens/Projects';
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
        <Route path='/Projects/porto' element={<Projects />} ></Route>
      </Routes>
      <BackToPortfolio />
    </BrowserRouter>
  );
}

const BackToPortfolio = () => {
  const isHomeRoute = useLocation();
  if (isHomeRoute.pathname === '/') return
  return <NavLink to={'/'} className="absolute top-10 left-10">
    <p className='flex items-center justify-center w-40 h-12 font-bold text-gray-700 duration-500 ease-in-out bg-white border-2 border-blue-400 hover:text-orange-600 rounded-xl hover:w-56 hover:border-orange-600'>Back To Portfolio</p>
  </NavLink>
}

export default App;
