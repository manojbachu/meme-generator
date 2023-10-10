// Style your components here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  @media (min-width: 767px) {
    height: 100vh;
    padding: 55px;
    justify-content: center;
  }
`

export const MainHeading = styled.h1`
  color: #35469c;
  font-family: 'Open Sans';
  @media (max-width: 767px) {
    text-align: center;
  }
`
export const MemeGeneratorContainer = styled.div`
 display: flex;
 flex-direction: column;
 
 align-items: center;

@media(min-width: 767px){
    flex-direction: row;
    justify-content: space-between;
    align-items: center:
}
`
export const MemeGeneratorForm = styled.form`
  width: 100%;
  order: 1;
  @media (min-width: 767px) {
    width: 45%;
    order: 0;
  }
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`

export const MemeInputs = styled.input`
  width: 100%;
  border: 1px solid #d7dfe9;
  padding-left: 15px;
  height: 35px;
  border-radius: 3px;
  font-family: 'Roboto';
  outline: none;
  color: #5a7184;
`

export const InputLabel = styled.label`
  color: #7e858e;
  margin-bottom: 10px;
  font-size: 14px;
`
export const SelectContainer = styled.select`
  border: 1px solid #d7dfe9;
  width: 100%;
  height: 35px;
  padding-left: 15px;
  border-radius: 3px;
  outline: none;
`
export const FontSizeOption = styled.option`
  color: #1e293b;
  margin-top: 5px;
  border-bottom: 5px;
`

export const GenerateButton = styled.button`
  background-color: #0b69ff;
  border: none;
  cursor: pointer;
  color: #ffffff;
  font-size: 14px;
  padding: 10px 25px 10px 25px;
  border-radius: 5px;
`
export const MemeContainer = styled.div`
  background-image: url(${props => props.bgImg});
  width: 45%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  height: 100%;

  @media (max-width: 767px) {
    width: 100%;
    height: 300px;
    margin-bottom: 30px;
  }
`

export const MemeText = styled.p`
  font-size: ${props => props.fontSize}px;
  color: #ffffff;
  text-align: center;
`
