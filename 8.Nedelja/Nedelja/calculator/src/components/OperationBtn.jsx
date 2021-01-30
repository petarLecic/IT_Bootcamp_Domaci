const OperationBtn = ({ operation, input, setInput, setResult, setSteps, lastOp, setLastOp }) => {
    input = Number(input)
    
    return (
        <button 
            onClick={() => {
                if (input === 0) setResult(0) // Izbegava pojavu "Infinity" i "NaN" u deljenju sa 0
                else switch (operation) {
                    case '+': setResult(prev => Number(prev) + input); break;
                    case '-': setResult(prev => Number(prev) - input); break;
                    case '*': setResult(prev => Number(prev) * input); break;
                    case '/': setResult(prev => Number(prev) / input); break;
                    default: setResult(0); break;
                }

                if (operation === 'Clear') setSteps(0)
                else setSteps(prev => {
                    if ((lastOp === '+' || lastOp === '-') && (operation === '*' || operation === '/')) {
                        return `(${prev}) ${operation} ${input}`
                    }
                    else {
                        return `${prev} ${operation} ${input}`
                    }
                })
                
                setInput('')
                setLastOp(operation)
            }}
            >{operation}
        </button>
    )
}

export default OperationBtn
