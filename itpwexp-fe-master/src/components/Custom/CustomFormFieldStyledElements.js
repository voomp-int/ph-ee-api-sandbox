import styled from "styled-components";

export const FormFieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin-top: 10px;
`

export const RequiredLabel = styled.p`
    color: red;
    background: white;
    margin-left: 10px;
`

export const LabelContainer = styled.div`
    display: flex;
    background: white;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
`

export const HeaderSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    justify-content: flex-start;
    align-items: center;
    width: 90%;
    margin-bottom: 20px;
    margin-top: 20px;
`

export const HeaderWrapper  = styled.div`
    display: flex;
    width: 100%;
`

export const FormSectionHeader = styled.div`
    font-weight: bold;
    background: white;
    width: 100%;
    font-size: 2em;
`


export const ToogleButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    background: white;
    width:100px;
    border-radius: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
    border: 0.5px solid gray;

`

export const ToggleButton = styled.div`
    display: flex;
    height: 44px;
    border-radius: 20px;
    align-items: center;
    width: 50%;
    justify-content: center;
    background: ${({isClicked}) => isClicked ? 'black' : 'white'};
    color: ${({isClicked}) => isClicked ? 'white' : 'black'}
`

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  padding-top: 10px;
  padding-bottom: 10px;
  background: white;
`

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;

`
// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
   
`

export const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${props => (props.checked ? 'salmon' : 'papayawhip')}
  border-radius: 3px;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }

  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')}
  }

`

export const CheckboxLabel = styled.p`
    margin-left: 8px;
    background: white;
    font-weight: 800px;
`  
export const MainCheckBoxWrapper = styled.div`
  display: flex;
  background: white;
  justify-content: flex-start;
  align-items: center;;
  width: 80%;
`