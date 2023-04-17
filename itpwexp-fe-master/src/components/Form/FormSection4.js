import React, {useState, useEffect} from 'react'
import CustomFormField from '../Custom/CustomFormField'
import { FormFieldContainer, FormSectionHeader, HeaderSectionContainer } from '../Custom/CustomFormFieldStyledElements'
import { DisclaimerContainer, DisclaimerTextBold, Divider, MainFormContainer, NextButton } from '../StyledElements/DisclaimerStyledElements'
import { FooterButtonContainer, CDatePicker } from '../StyledElements/GenericStyledElements'
import { AddressContainer, AddressText, AddressTextArea, SubHealineText } from '../StyledElements/FormSectionStyledElements'

import DatePicker from 'react-date-picker'

const FormSection4 = ({handleNext, handleBack}) => {

  const [toggle1, settoggle1] = useState(false)
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  

  const handleToggle1 = () => {
    settoggle1(!toggle1)
  }


  return (
      <MainFormContainer>
             
          <CustomFormField label="Were you ever in the U.S. military?" required={true} isToggle={true} handle={handleToggle1}/>
          {
            toggle1 && 
            <>
              <HeaderSectionContainer>
                <FormSectionHeader> U.S. Military Service</FormSectionHeader>
                <Divider/>
              </HeaderSectionContainer>

              <CustomFormField label="Branch of Service" required={true} isDropDown={true} items={["Army", "Army Reserve", "Army National Guard", "Air Force", "Air Force", "Air Force Reserve", "Air National Guard", "Marines", "Marine Corps Reserve", "Navy", "Navy Reserve", "Coast Guard", "Coast Guard Reserve", "Merchant Marines", "National Guard"]}/>
              <CustomFormField label="Start Date" required={true} isDate={true} date={startDate} setDate={setStartDate}/>
              <CustomFormField label="End Date" required={true}  isDate={true} date={endDate} setDate={setEndDate} hasSubheading={true} subheading="(If you are currently in the military, please enter the current month and year as the End Date)" />
              <CustomFormField label="Can you obtain your DD214?" isToggle={true} />
           
            </>
          }
   
          <FooterButtonContainer>
            <NextButton onClick={() => {handleBack()}} isBack={true}>Back</NextButton>
            <NextButton onClick={() => {handleNext()}}>Next</NextButton>
          </FooterButtonContainer>



      </MainFormContainer>
    
  )
}

export default FormSection4;