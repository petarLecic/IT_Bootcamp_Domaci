const Select = ({options, onChange}) => {
    options = Array.from(new Set(options))
    return (
        <div>
            <label htmlFor="selectYear">Choose year: </label>
            <select name="selectYear" onChange={onChange}>
                <option value="">All</option>
                {
                    options.map(option => <option key={option} value={option}>{option}</option>)
                }
            </select>
            <hr/>
        </div>
    )
}

export default Select