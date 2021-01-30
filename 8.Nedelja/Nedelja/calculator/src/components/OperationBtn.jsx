const OperationBtn = ({ operation, input, setInput, setResult, setSteps }) => {
    input = Number(input)
    
    return (
        <button 
            onClick={() => {
                switch (operation) {
                    case '+': setResult(prev => Number(prev) + input); break;
                    case '-': setResult(prev => Number(prev) - input); break;
                    case '*': setResult(prev => Number(prev) * input); break;
                    case '/': setResult(prev => Number(prev) / input); break;
                    default: setResult(0); break;
                }
                operation === 'Clear' ? setSteps(0) : setSteps(prev => prev +  operation + input) // Ako je poslednja operacija + ili - staviti zagrade na oko prev
                setInput('')
            }}
            >{operation}
        </button>
    )
}

export default OperationBtn