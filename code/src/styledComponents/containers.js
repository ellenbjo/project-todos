import styled from 'styled-components'

export const MainContainer = styled.main`
  background: white;
  width: 100%;
  padding: 10px;

  @media (min-width: 667px){
    width: 80%;
  }
`

export const HeaderSection = styled.header`
  background: white;
`

export const TopContainer = styled.section`
  background: white;
  display: flex;
  justify-content: space-between;
  padding: 20px 5px 10px 5px;
  border-bottom: 2px solid black;
` 

export const ListContainer = styled.section`
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;
` 

export const FormContainer = styled.section`
  display: flex;
  margin-top: 20px;
  background: white;
  justify-content: center;
  align-items: center;
  height: 150px;
  width: 100%;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
`