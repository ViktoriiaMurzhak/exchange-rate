import React, { useState } from 'react'
import { Data, Eur, HeaderBox, RateBox, Span, Usd } from './Header.styled'
import { Container } from '../Container'
import { useEffect } from 'react'
import { requestOptions, fetchUSD, fetchEUR } from '../../services/api'
import { Report } from 'notiflix/build/notiflix-report-aio'

export default function Header() {
  const [usd, setUsd] = useState('')
  const [eur, setEur] = useState('')

  useEffect(() => {
    Promise.all([
      fetch(fetchUSD, requestOptions),
      fetch(fetchEUR, requestOptions),
    ])
      .then(([usdResponse, eurResponse]) =>
        Promise.all([
          usdResponse.json(),
          eurResponse.json(),
          usdResponse.status,
          eurResponse.status,
        ])
      )
      .then(([usdData, eurData, usdStatus, eurStatus]) => {
        if (usdStatus === 429 || eurStatus === 429) {
          throw new Error('Too many requests')
        }
        setUsd(usdData?.rates?.UAH)
        setEur(eurData?.rates?.UAH)
      })
      .catch((error) => {
        if (error.message === 'Too many requests') {
          console.log(
            'Error 429: the allowable limit of server requests has been exceeded. Please contact the repository owner to replace the access key.'
          )
          Report.failure(
            'Error 429',
            'The allowable limit of server requests has been exceeded. Please contact the repository owner to replace the access key.'
          )
        } else {
          Report.failure('Sorry, you should reload this page and try again')
        }
      })
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
            <Span>USD:</Span>
            {usd ? usd : 'loading...'}
          </Usd>
          <Eur>
            <Span>EUR:</Span>
            {eur ? eur : 'loading...'}
          </Eur>
        </RateBox>
      </Container>
    </HeaderBox>
  )
}
