import { useEffect, useState } from "react";

export default function EjemploUseEffect(){

    const [clicks, setClicks] = useState(0);
    const [fecha, setFecha] = useState(new Date());

    useEffect(() => {
        console.log('UseEffect del click');

        document.title = `${clicks} veces`

        return () => {
            //se ejecuta al destruir el componente
            console.log('El componente se va a destruir');
        }
    }, [clicks]);

    useEffect(() => {
        console.log('UseEffect del Interval');

        const intervalId = setInterval(()=>{
            setFecha(new Date());
    }, 1000);

        return () => clearInterval(intervalId);
    });

    useEffect(()=>{
        console.log('Ejecución de una sola vez')
    }, []);

    return(
        <>
            <button onClick={() => setClicks(clicks + 1)}>Me has clickeado {clicks} veces</button>
            <div>{fecha.toString()}</div>
        </>
    )
}