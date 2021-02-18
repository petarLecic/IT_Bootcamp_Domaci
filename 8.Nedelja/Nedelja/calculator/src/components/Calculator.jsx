import { useState } from "react"
import OperationBtn from "./OperationBtn"

const Calculator = () => {
    const [result, setResult] = useState(0)
    const [inputNumber, setInputNumber] = useState('')
    const [steps, setSteps] = useState(result)
    const [lastOp, setLastOp] = useState('')

    const stateSetter = operation => {
        //Setting result
        if (inputNumber === 0) setResult(0) // Izbegava pojavu "Infinity" i "NaN" u deljenju sa 0
        else switch (operation) {
            case '+': setResult(prev => Number(prev) + Number(inputNumber)); break;
            case '-': setResult(prev => Number(prev) - inputNumber); break;
            case '*': setResult(prev => Number(prev) * inputNumber); break;
            case '/': setResult(prev => Number(prev) / inputNumber); break;
            default: setResult(0); break;
        }
        //Setting steps
        operation === 'Clear' ? setSteps(0) : setSteps(prev => {
                    if ((lastOp === '+' || lastOp === '-') && (operation === '*' || operation === '/')) {
                        return `(${prev}) ${operation} ${inputNumber}`
                    }
                    else {
                        return `${prev} ${operation} ${inputNumber}`
                    }
                })
        
        setInputNumber('')
        setLastOp(operation)
    }

    return (
        <>
            <h1>Calculator</h1>
            <div>
                <input value={result} readOnly/>
                <input type="number" value={inputNumber} onChange={e => setInputNumber(e.target.value)} />
            </div>
            <OperationBtn operation="+" stateSetter={stateSetter} />
            <OperationBtn operation="-" stateSetter={stateSetter} />
            <OperationBtn operation="*" stateSetter={stateSetter} />
            <OperationBtn operation="/" stateSetter={stateSetter} />
            <OperationBtn operation="Clear" stateSetter={stateSetter} />
            <p>{steps}</p>
        </>
    )
}

export default Calculator