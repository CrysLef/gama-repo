import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const Content = styled.div`
  display: flex;
  background-color: var(--blackPearl);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem;
  margin: 0 1.2rem; 
  border-radius: .5rem;
  box-shadow: 0px 0px 20px 5px #000;
`

export const Label = styled.label`
    font-weight: 700;
    font-size: 2.4rem;
    color: var(--whiteBlue);
    margin-bottom: 3rem;
    text-align: center;
`

export const Input = styled.input`
    padding: 1.2rem 1.8rem;
    border-radius: .5rem;
    margin-bottom: 3rem;
    
    &:focus,
    &:active {
      outline: none;
      box-shadow: 0px 0px 5px 2px var(--white);
  }
`

export const Button = styled.button`
  background: var(--white);
  color: var(--black);
  border-radius: .5rem;
  font-weight: 700;
  padding: .7rem;
  cursor: pointer;

  &:hover {
      background-color: var(--black);
      color: var(--white);
  }
`

export const ErrorMsg = styled.span`
  display: inline-block;
  font-size: 1.2rem;
  color: var(--white);
  padding: 4px;
  font-weight: 700;
  margin-top: 2rem;
  background-color: #f00;
  border-radius: .5rem;
`