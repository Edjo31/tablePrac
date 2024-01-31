import React, { useEffect } from "react";
import { useState } from "react";
import './components.css';

export function Order() {
    const [inputValue, setInputValue] = useState("");
    const [datos, setDatos] = useState([]);
    const [ordeData, setOrderData] = useState([]);
    const [lengthR,setLenghtR]=useState()
    const [lengthC,setLenghtC]=useState()
    useEffect(() => {
        order();
    }, [datos]);

    function handleInput(e) {
        setInputValue(e.target.value);
    }
    function handleRow(e){
        
        let value = e.target.value;
      
            setLenghtR(value)
       
    }
    function handleColum(e){
        let value = e.target.value;
            setLenghtC(value)
    }

    function order() {
        const orde = [...datos].sort(function(a, b) {
            return a - b;
        });
        setOrderData(orde);
    }

    function handleBtn() {
        setDatos(inputValue.split(/[\s,]+/));
    }

    return (
        <>
            <h1>Order</h1>
            <div className="dimenciones">
                <input type="number"  min={0} max={99} onChange={handleColum}></input>
                
                <p>X</p>
                <input type="number" min={0} max={99} onChange={handleRow}></input>
                
                {console.log(lengthC,lengthR)}
            </div>
            <input onChange={handleInput} value={inputValue} />
            <button onClick={handleBtn}>Btn</button>
           
           
            <div className="tables">
              <table>
               <tbody>
                {Array.from({length:lengthR}).map((_,rowIndex)=>(
                    <tr>
                        {Array.from({length:lengthC}).map((_,indexColum)=>{
                            const logicIt= rowIndex * lengthC +indexColum
                            const dato=ordeData[logicIt]

                            return <td>{dato}</td>
                        })}
                    </tr>
                ))}
               </tbody>
              
              </table>
            </div>
        </>
    );
}