import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import IndiceGeneros from './Generos/IndiceGeneros';
import LandingPage from './LandingPage';
import Menu from './Utils/Menu';
import rutas from './router-config';

function App() {

  return(
    <>
      
      <BrowserRouter>
        <Menu/>
        <div className='container'>
        <Routes>
          {rutas.map(ruta => <Route 
          key={ruta.path} 
          path={ruta.path}
          element={<ruta.componente/>}
          />)}
          {/* <Route path='/' element={<LandingPage/>}/> */}
          {/* <Route path='/Generos' element={<IndiceGeneros/>}/> */}
        </Routes>
        </div>
      </BrowserRouter>
    </>
  );  
}

export default App;
