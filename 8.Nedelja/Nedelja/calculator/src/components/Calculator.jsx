import { useState } from "react"
import OperationBtn from "./OperationBtn"

const Calculator = () => {
    const [result, setResult] = useState(0)
    const [inputNumber, setInputNumber] = useState('')
    const [steps, setSteps] = useState(result)
    const [lastOp, setLastOp] = useState('')
    
    return (
        <>
            <h1>Calculator</h1>
            <div>
                <input value={result} readOnly/>
                <input type="number" value={inputNumber} onChange={e => setInputNumber(e.target.value)} />
            </div>
            <OperationBtn 
                operation="+" 
                input={inputNumber} 
                setInput={setInputNumber} 
                setResult={setResult} 
                setSteps={setSteps} 
                lastOp={lastOp} 
                setLastOp={setLastOp}
                />
            <OperationBtn operation="-" 
                input={inputNumber} 
                setInput={setInputNumber} 
                setResult={setResult} 
                setSteps={setSteps} 
                lastOp={lastOp} 
                setLastOp={setLastOp}
                />
            <OperationBtn operation="*" 
                input={inputNumber} 
                setInput={setInputNumber} 
                setResult={setResult} 
                setSteps={setSteps} 
                lastOp={lastOp} 
                setLastOp={setLastOp}
                />
            <OperationBtn operation="/" 
                input={inputNumber} 
                setInput={setInputNumber} 
                setResult={setResult} 
                setSteps={setSteps} 
                lastOp={lastOp} 
                setLastOp={setLastOp}
                />
            <OperationBtn 
                operation="Clear" 
                setInput={setInputNumber} 
                setResult={setResult} 
                setSteps={setSteps} 
                setLastOp={setLastOp}
            />
            <p>{steps}</p>
        </>
    )
}

export default Calculator