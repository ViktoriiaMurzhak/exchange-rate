import { requestOptions } from '../services/api'
import { Loading } from 'notiflix/build/notiflix-loading-aio'
import { Report } from 'notiflix/build/notiflix-report-aio'

export const useCurrencyConverter = () => {
  const getRates = (amount, fromCurrency, toCurrency) => {
    Loading.circle('Loading...', {
      svgColor: '#4286f4',
    })

    return fetch(
      `https://api.apilayer.com/exchangerates_data/convert?to=${toCurrency}&from=${fromCurrency}&amount=${amount}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => data.info.rate)
      .catch((error) => {
        console.log(error)
        Report.failure('Sorry, you should reload this page and try again')
      })
      .finally(() => Loading.remove())
  }

  return { getRates }
}
