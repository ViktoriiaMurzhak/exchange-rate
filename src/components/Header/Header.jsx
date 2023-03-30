import React, { useState } from 'react'
import { Data, Eur, HeaderBox, HeaderList, RateBox, Usd } from './Header.styled'
import { Container } from '../Container'
import { useEffect } from 'react'
import { getRates } from '../../services/api'
import { Status } from '../../config/status'

export default function Header() {
  const { init, loading, success, error } = Status

  const [usd, setUsd] = useState('')
  const [eur, setEur] = useState('')
  const [status, setStatus] = useState(init)

  // const [rates, setRates] = useState([])

  // const usdRate = usd
  // const eurRate = rates.find((rate) => rate.cc === 'EUR').rate

  useEffect(() => {
    setStatus(loading)

    async function getUSD() {
      try {
        const data = await getRates('UAH', 'USD', '1')
        setUsd(String(data.result))
        console.log(data.result)

        setStatus(success)
      } catch {
        setStatus(error)
        console.log('error')
      }
    }
    getUSD()

    async function getEUR() {
      try {
        const data = await getRates('UAH', 'EUR', '1')
        setEur(String(data.result))
        console.log(data.result)

        setStatus(success)
      } catch {
        setStatus(error)
        console.log('error')
      }
    }
    getEUR()

    // eslint-disable-next-line
  }, [])

  const getDate = () => {
    const today = new Date()
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
    return today.toLocaleString('en-US', options)
  }

  return (
    <HeaderBox>
      <Container>
        <Data>{getDate()}</Data>
        <RateBox>
          <Usd>
            <span>USD:</span> {status === 'loading' ? '---' : usd}
          </Usd>
          <Eur>
            <span>EUR:</span> {status === 'loading' ? '---' : eur}
          </Eur>
        </RateBox>
        <HeaderList></HeaderList>
      </Container>
    </HeaderBox>
  )
}
