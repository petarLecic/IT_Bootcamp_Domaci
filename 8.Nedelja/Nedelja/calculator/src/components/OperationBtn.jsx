const OperationBtn = ({ operation, stateSetter }) => {
    return (
        <button onClick={() => stateSetter(operation)}>
            {operation}
        </button>
    )
}

export default OperationBtn
