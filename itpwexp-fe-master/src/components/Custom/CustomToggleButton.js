import React, { useState, useEffect } from 'react'
import { ToggleButton, ToogleButtonContainer } from './CustomFormFieldStyledElements'

const CustomToggleButton = ({handle, setYesSelect}) => {

  const [isYesClicked, setisClicked] = useState(setYesSelect)

  useEffect(() => {
    if (setYesSelect) {
      setisClicked(true)
    } else {
      setisClicked(false)
    }
  }, [])
  

  const handleAction = () => {
    if (setYesSelect) {
      setisClicked(!isYesClicked || !setYesSelect)
      if (isYesClicked) {
        handle()
      } else {
        handle()
      }
    } else {
      setisClicked(!isYesClicked || setYesSelect)
      if (isYesClicked) {
        handle()
      } else {
        handle()
      }
    }
    
  }

  return (
    <ToogleButtonContainer>
        <ToggleButton isClicked ={isYesClicked} onClick={() => {handleAction()}}>Yes</ToggleButton>
        <ToggleButton isClicked ={!isYesClicked}  onClick={() =>  {handleAction()}}>No</ToggleButton>
    </ToogleButtonContainer>
  )
}

export default CustomToggleButton