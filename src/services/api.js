import axios from 'axios'

const API_KEY = '28RQ5cGW0Ddyb1vayLAh4zhvGPWxekxP'
axios.defaults.baseURL = 'https://api.apilayer.com/exchangerates_data'

export async function getRates(to, from, amount) {
  const { data } = await axios.get(
    `/convert?apikey=${API_KEY}&to=${to}&from=${from}&amount=${amount}`
  )
  // console.log('data', data)
  return data
}
