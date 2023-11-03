export default function ContenidoDinamico(props: any){
    //Ejemplo 1 Operador Ternario
    /*return(
        <div>
            {props.mostrarMensajeSecreto ? <span>Mensaje secreto: 42</span> : null}
        </div>
    )*/
    //Ejemplo 2 If
    if(props.calificacion > 90 ){
        return(
            <div>
                <h3>{props.nombre}: Excelente Calificación</h3>
            </div>
        )
    }else if(props.calificacion >= 80 && props.calificacion <= 90){
        return(
            <div>
                <h3>{props.nombre}: Muy bien hecho</h3>
            </div>
        )
    }else if(props.calificacion >= 0 && props.calificacion < 80){
        return(
            <div>
                <h3>{props.nombre}: Otra calificacion</h3>
            </div>
        )
    }else{
        throw `Ha habido un error ocn la calificación de ${props.nombre}`
    }
}