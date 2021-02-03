import axios from 'axios'

const BASE_URL = 'https://api.spacexdata.com/v4'
const COMPANY_INFO = '/company'
const LAUNCHES = '/launches'
const PAST = '/past'

export const getCompanyInfo = () => axios.get(`${BASE_URL}${COMPANY_INFO}`)
export const getPastLaunches = () => axios.get(`${BASE_URL}${LAUNCHES}${PAST}`)