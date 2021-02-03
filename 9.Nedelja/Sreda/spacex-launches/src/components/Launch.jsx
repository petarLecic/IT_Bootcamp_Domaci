const Launch = ({ launch }) => {
    return (
        <div>
            <img src={launch.links.patch.small} alt={`${launch.name}`} width="200"/>
            <p>{launch.name}</p>
            <p>{launch.date_utc.slice(0, 10)}</p>
            <hr/>
        </div>
    )
}

export default Launch