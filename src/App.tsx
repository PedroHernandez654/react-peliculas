import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { text } from 'stream/consumers';
import MostrarTexto from './MostrarTexto';
import ProyectarContenido from './ProyectarContenido';
import ProyectarContenido2 from './ProyectarContenido2';
import EjemploReloj from './EjemploReloj';
import ContenidoDinamico from './ContenidoDinamico';
import FormularioTexto from './FormularioTexto';
import EjemploUseEffect from './EjemploUseEffect';
import ValorContext from './ValorContext';
import Abuelo from './Abuelo';
import ErrorBoundary from './ErrorBoundary';


function App() {

  const imagenURL = "https://www.jovenesprogramadores.cl/wp-content/uploads/2020/07/react.png";

  const manejarClick= () => console.log('Click');
  //useState
  const [texto, setTexto] = useState('Valor por defecto');

  const [checked, setChecked] = useState(true);
  //Manera de obtener lo que el usuario está escribiendo
  /*const manejarKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) =>{
    console.log(e.currentTarget.value);
    setTexto(e.currentTarget.value);
  }*/

  const manejarKeyUp = (textoInput: string) =>{
    console.log(textoInput);
    setTexto(textoInput);
  }

  const parteIntermedia = <EjemploReloj/>
  const estilo = {
    backgroundColor:'red', width: '50px', height:'50px', marginLeft:'1rem'
  }
  const parteInferior = <div style={estilo}>Hola</div>

  const calificaciones = [
    {nombre: 'Felipe', calificacion: 75},
    {nombre: 'Claudia', calificacion: -1},
    {nombre: 'Roberto', calificacion: 95}
  ]

  return(
    <>
      <h1 className='rojo'>Hola Mundo!</h1>


      <ValorContext.Provider value={texto}>
        <Abuelo/>
      </ValorContext.Provider>

      <div>
            <input type="checkbox" 
            onChange={(e) => setChecked(e.currentTarget.checked)}
            checked={checked}/>Mostrar Componente UseEffect
      </div>

      {checked ? <EjemploUseEffect/> : null}

      <ContenidoDinamico calificacion={85}/>

      {calificaciones.map(cal => 
      <ErrorBoundary key={cal.nombre} >
        <ContenidoDinamico  {...cal}/>
      </ErrorBoundary>
      )}

      <button onClick={manejarClick}>Clickeame</button>


      <ProyectarContenido>
        <>
        <span>Hola proyectando contenido</span>
        </>
      </ProyectarContenido>

      <ProyectarContenido2
        parteSuperior={<span>Este es un mensaje del componente padre</span>}
        parteIntermedia={parteIntermedia}
        parteInferior={parteInferior}
      />



      <button 
      onMouseEnter={() => {console.log('Entrando')}}
      onClick={() => {console.log('Click desde el botón')}}>Clickeame!L
      </button>


      <FormularioTexto manejarKeyUp={(e: string) => manejarKeyUp(e)}/>

      <MostrarTexto texto={texto}/>


      
      <br />
      <img alt="logo-react" src={imagenURL}/>      
        <div>
            <input type="checkbox" 
            onChange={(e) => setChecked(e.currentTarget.checked)}
            checked={checked}/>Este es un CheckBox
        </div>
    </>

  );  
}

export default App;
