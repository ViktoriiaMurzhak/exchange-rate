import styled from 'styled-components'
import { breakpoints } from '../../helpers/variables'

export const FormBox = styled.div`
  margin: 40px auto;
  padding: 40px 20px;
  min-width: 280px;

  background: rgb(0 0 0 / 20%);
  backdrop-filter: blur(7px);
  border-radius: 10px;

  @media ${breakpoints.minTablet} {
    width: 600px;
  }

  @media ${breakpoints.desktop} {
    width: 900px;
  }
`

export const Title = styled.h1`
  font-weight: 700;
  font-size: 30px;
  text-align: center;
  margin-bottom: 20px;

  @media ${breakpoints.desktop} {
    font-size: 38px;
  }
`

export const InputBox = styled.div`
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`

export const Input = styled.input`
  padding: 0 15px;
  min-width: 140px;
  max-width: 180px;
  height: 40px;
  background: transparent;
  outline: none;
  border: 1px solid rgb(220, 231, 255);
  font-size: 18px;
  color: rgb(220, 231, 255);
  transition-property: background-color;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &::placeholder {
    font-size: 18px;
    color: rgb(220, 231, 255);
  }

  :hover {
    background-color: #283657;
  }

  @media ${breakpoints.minTablet} {
    min-width: 400px;
    height: 50px;
    font-size: 22px;
  }
`

export const Select = styled.select`
  height: 40px;
  background: transparent;
  outline: none;
  border: 1px solid rgb(220, 231, 255);
  font-size: 18px;
  color: rgb(220, 231, 255);
  transition-property: background-color;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    background-color: #283657;
  }

  @media ${breakpoints.minTablet} {
    height: 50px;
    font-size: 22px;
  }
`
