import React, {useState, useEffect} from 'react'
import CustomFormField from '../Custom/CustomFormField'
import { FormFieldContainer, FormSectionHeader, HeaderSectionContainer } from '../Custom/CustomFormFieldStyledElements'
import { DisclaimerContainer, DisclaimerTextBold, Divider, MainFormContainer, NextButton } from '../StyledElements/DisclaimerStyledElements'
import { FooterButtonContainer, CDatePicker } from '../StyledElements/GenericStyledElements'
import { AddressContainer, AddressText, AddressTextArea, SubHealineText } from '../StyledElements/FormSectionStyledElements'

import DatePicker from 'react-date-picker'

const FormSection6 = ({handleNext, handleBack}) => {

  const [toggle1, settoggle1] = useState(false)
  const [toggle2, settoggle2] = useState(false)
  const [toggle3, settoggle3] = useState(false)
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  

  const handleToggle1 = () => {
    settoggle1(!toggle1)
    settoggle2(false)
    settoggle3(false)
  }

  const handleToggle2 = () => {
    settoggle2(!toggle2)

  }

  const handleToggle3 = () => {
    settoggle3(!toggle3)
  }



  return (
      <MainFormContainer>

          <CustomFormField label="Have you been employed, contracted, or attended a company orientation in the last 3 years?" required={true} isToggle={true} handle={handleToggle1}/>
          {
            toggle1 && 
            <>
              <HeaderSectionContainer>
                <FormSectionHeader>Employer/Contract Information</FormSectionHeader>
                <Divider/>
              </HeaderSectionContainer>

                <CustomFormField label="Company Name" required={true} />
                <CustomFormField label="Start Date" required={true} isDate={true} date={startDate} setDate={setStartDate}/>
                <CustomFormField label="End Date" required={true}  isDate={true} date={endDate} setDate={setEndDate} hasSubheading={true} subheading="(If you are currently in the military, please enter the current month and year as the End Date)" />
                <CustomFormField label=" treet Address" required={false}/>
                <CustomFormField label="Street Address" required={false}/>
                <CustomFormField label="City" required={true}/>
                <CustomFormField label="Country" required={true} isDropDown= {true} items={["United States of America", "Canada", "Other"]}/>
                <CustomFormField label="State" required={true}/>
                <CustomFormField label="Zip/Postal code" required={false}/>
                <CustomFormField label="Telephone" required={false}/>
                <CustomFormField label="Position Held" required={false}/>
                <CustomFormField label="Reason For Leaving" required={true}/>
                <CustomFormField label="Were you terminated/discharged/laid off?" isToggle={true} handle={handleToggle2} />
                {
                    toggle2 &&
                    <>
                    <AddressContainer>
                        <SubHealineText>Please explain</SubHealineText>
                        <AddressTextArea width="500px" color='#EBF3F5'/>
                    </AddressContainer>
                    </>
                }
                <CustomFormField label="Is this your current employer?" isToggle={true} />
                <CustomFormField label="May we contact this employer at this time?" isToggle={true} />
                <CustomFormField label="Did you operate a commercial motor vehicle?" isToggle={true}  handle={handleToggle3} />
                {
                    toggle3 &&
                    <>
                     <CustomFormField label="Were you subject to the Federal Motor Carrier or Transport Canada Safety Regulations while employed/contracted by this employer/contractor?" isToggle={true} required={true}/>
                     <CustomFormField label="Did you perform any safety sensitive functions in this job, regulated by DOT, and subject to drug and alcohol testing?" isToggle={true} required={true}/>
                     <CustomFormField label="Areas Driven" required={false}/>
                     <CustomFormField label="Miles Driven Weekly" required={false} isDropDown= {true} items={["0-500", "500-1000", "1000-1500", "1500-2000", "2000-2500","2500-3000","3000-3500","3500+"]}/>
                     <CustomFormField label="Pay Range (cents/mile)" required={false}/>
                     <CustomFormField label="Most common truck driven" required={true} isDropDown= {true} items={["Tanker", "Bus - Straight", "Bus - Articulated", "Cabover Tractor", "Class B Vehicle", "Conventional Tractor", "Tractor-Trailer", "Day Cab", "Day Cab Conventional", "Dump Truck", "LC Truck", "Straight Truck", "Yard Horse", "Other"]}/>
                     <CustomFormField label="Most common trailer" required={true} isDropDown= {true} items={["Flatbed", "Van", "Container", "Doubles", "Liftgate", "Reefer Trailer", "Tank Trailer", "Step Deck", "RGN","Car Hauler","Log Hualer", "Other"]}/>
                     <CustomFormField label="Trailer Length" required={true} isDropDown= {true} items={["31 feet or less", "32 to 44 feet", "45 to 52 feet", "53 feet or more", "Other"]}/>
                    </>
                }
            </>
          }
   
          <FooterButtonContainer>
            <NextButton onClick={() => {handleBack()}} isBack={true}>Back</NextButton>
            <NextButton onClick={() => {handleNext()}}>Next</NextButton>
          </FooterButtonContainer>



      </MainFormContainer>
    
  )
}

export default FormSection6;