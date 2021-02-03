import { useEffect, useState } from "react";
import { getCompanyInfo, getPastLaunches } from "./service";
import Header from "./components/Header";
import Launches from "./components/Launches";
import Select from "./components/Select";

const App = () => {
    const [companyName, setCompanyName] = useState('')
    const [pastLaunches, setPastLaunches] = useState([])
    const [launchesYears, setLaunchesYears] = useState([])
    const [selectValue, setSelectValue] = useState('')

    useEffect(() => {
        getCompanyInfo().then(res => setCompanyName(res.data.name))
    }, [])

    useEffect(() => {
        getPastLaunches().then(res => {
            setPastLaunches(res.data)
            setLaunchesYears(res.data.map(launch => launch.date_utc.slice(0, 4)))
        })
    }, [])

    return (
        <>
            <Header companyName={companyName} />
            <Select options={launchesYears} onChange={e => setSelectValue(e.target.value)} />
            <Launches 
                launches={pastLaunches.filter(launch => launch.date_utc.startsWith(selectValue))} 
            />
        </>
    )
}

export default App;
