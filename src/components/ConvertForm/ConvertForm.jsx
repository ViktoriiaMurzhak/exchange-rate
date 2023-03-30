import React, { useCallback, useEffect, useState } from 'react'
import { useCurrencyConverter } from '../../hooks/apiHook'
import { Container } from '../Container'

import { FormBox, Input, InputBox, Select, Title } from './ConvertForm.styled'

export default function ConvertForm() {
  const [amount1, setAmount1] = useState('')
  const [amount2, setAmount2] = useState('')
  const [currency1, setCurrency1] = useState('UAH')
  const [currency2, setCurrency2] = useState('USD')
  const [lastChanged, setLastChanged] = useState('')
  const { getRates } = useCurrencyConverter()

  const getData = useCallback(
    (type, amount, fromCurrency, toCurrency) => {
      if (amount > 0) {
        return getRates(amount, fromCurrency, toCurrency).then(
          (convertedRate) => {
            const result = amount * convertedRate
            if (type === 'amount1') {
              setAmount2(result.toFixed(2))
            } else {
              setAmount1(result.toFixed(2))
            }
          }
        )
      } else {
        if (type === 'amount1') {
          setAmount2('')
        } else {
          setAmount1('')
        }
      }
    },
    // eslint-disable-next-line
    [getRates]
  )

  useEffect(() => {
    if (amount1 && currency1 && currency2 && lastChanged !== 'amount1') {
      getData('amount1', amount1, currency1, currency2)
    } else if (amount2 && currency1 && currency2 && lastChanged !== 'amount2') {
      getData('amount2', amount2, currency2, currency1)
    }
    // eslint-disable-next-line
  }, [
    amount1,
    currency1,
    currency2,
    lastChanged,
    getRates,
    setAmount2,
    amount2,
    getData,
  ])

  const handleChange = (e) => {
    const { name, value } = e.target

    switch (name) {
      case 'amount1':
        setLastChanged('amount2')
        setAmount1(value)
        break
      case 'amount2':
        setLastChanged('amount1')
        setAmount2(value)
        break
      case 'currency1':
        setLastChanged('amount2')
        setCurrency1(value)
        break
      case 'currency2':
        setCurrency2(value)
        break
      default:
        break
    }
  }

  return (
    <Container>
      <FormBox>
        <Title>Currency Converter</Title>

        <InputBox>
          <Input
            placeholder="enter the amount..."
            name="amount1"
            type="number"
            onChange={handleChange}
            value={amount1 ? amount1 : ''}
            required
          />
          <Select name="currency1" value={currency1} onChange={handleChange}>
            <option value="UAH">UAH</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="PLN">PLN</option>
          </Select>
        </InputBox>
        <InputBox>
          <Input
            placeholder="enter the amount..."
            name="amount2"
            type="number"
            value={amount2 ? amount2 : ''}
            onChange={handleChange}
          />
          <Select name="currency2" value={currency2} onChange={handleChange}>
            <option value="UAH">UAH</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="PLN">PLN</option>
          </Select>
        </InputBox>
      </FormBox>
    </Container>
  )
}
