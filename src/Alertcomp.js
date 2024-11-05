import React from "react";
import { useState } from "react";
import Styles from './alert.module.css';

function AlertBtn() {
const [mostrar, setMostrar] = useState(false);
const mostrarAlerta = () =>{


    alert('you clicked me!!')
    setMostrar(!mostrar)
}


        return (
            <>
                <button onClick={mostrarAlerta}className={Styles.alert}>Muestra Alerta</button>

            </>
        )
    
}
export default AlertBtn;