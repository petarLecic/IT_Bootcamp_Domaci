import { useState } from "react"
import OperationBtn from "./OperationBtn"

const Calculator = () => {
    const [result, setResult] = useState(0)
    const [inputNumber, setInputNumber] = useState('')
    const [steps, setSteps] = useState(result)
    
    return (
        <>
            <h1>Calculator</h1>
            <div>
                <input value={result} readOnly/>
                <input type="number" value={inputNumber} onChange={e => setInputNumber(e.target.value)} />
            </div>
            <OperationBtn operation="+" input={inputNumber} setInput={setInputNumber} setResult={setResult} setSteps={setSteps} />
            <OperationBtn operation="-" input={inputNumber} setInput={setInputNumber} setResult={setResult} setSteps={setSteps} />
            <OperationBtn operation="*" input={inputNumber} setInput={setInputNumber} setResult={setResult} setSteps={setSteps} />
            <OperationBtn operation="/" input={inputNumber} setInput={setInputNumber} setResult={setResult} setSteps={setSteps} />
            <OperationBtn operation="Clear" setInput={setInputNumber} setResult={setResult} setSteps={setSteps} />
            <p>{steps}</p>
        </>
    )
}

export default Calculator