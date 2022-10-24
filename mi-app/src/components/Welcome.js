import {useState,useEffect} from "react";

export default function Welcome(props){
    const [counter, setCounter] = useState(0);
    const [semaforo, setSemaforo] = useState(false);
    const {message, name}  = props;


    useEffect(()=>{
        console.log(semaforo);
    }, [semaforo]);

    const contar = () => {
        setCounter(counter + 1);
        setSemaforo(!semaforo);
    };
    

    return(
    <div>
        <p>Hola, {name}</p>
        <h2>Conrador de React con Hooks</h2>
        <h4>El nùmero de contador es {counter}</h4>
        <p>El semaforo está en color {semaforo ? "red" : "green"}</p>
        <button type="submit" onClick={contar}>
            Sumar contador
        </button>
        <p>{message}</p>        
    </div>
    );

    
}   