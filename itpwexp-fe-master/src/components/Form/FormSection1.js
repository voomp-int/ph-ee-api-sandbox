import { set } from 'mongoose'
import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import Checkbox from '../Custom/Checkbox'
import CustomFormField from '../Custom/CustomFormField'
import { CheckboxLabel, FormFieldContainer, FormSectionHeader, HeaderSectionContainer, MainCheckBoxWrapper } from '../Custom/CustomFormFieldStyledElements'
import CustomToggleButton from '../Custom/CustomToggleButton'
import { DisclaimerContainer, Divider, MainFormContainer, NextButton } from '../StyledElements/DisclaimerStyledElements'
import { FooterButtonContainer, FormLabel } from '../StyledElements/GenericStyledElements'
import { AddressContainer, AddressText, AddressExample , AddressTextArea, SubHealineText, CheckBoxWrapper, CheckboxInput} from '../StyledElements/FormSectionStyledElements'
import NetworkRoute from '../Utils/Network.js'

const FormSection1 = ({info_, handleNext, handleBack, showHeader = true}) => {
  
  const [isResident, setisResident] = useState(false)
  const [firstCheckBox, setfirstCheckBox] = useState(false)
  const [secondCheckBox, setsecondCheckBox] = useState(false)
  const [country, setcountry] = useState("")
  const [state, setstate] = useState("")
  const countries = ["United States of America", "Canada", "Other"]
  const states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina","South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
  const [dob, setdob] = useState(new Date())
  const [info, setInfo] = useState( {
        "first_name": ["", "error"],
        "middle_name":  ["", "error"],
        "last_name": ["", "error"],
        "suffix":  ["", "error"],
        "ssn":  ["", "error"],
        "dob":  [dob, "error"],
        "gender": ["Male", "error"],
        "current_street_address_line1":  ["", "error"],
        "current_street_address_line2": ["", "error"],
        "country":  ["", "error"],
        "city":  ["", "error"],
        "state_province":  ["", "error"],
        "zip_code":  ["", "error"],
        "residence_address_for_3_years_or_more":  [false, "error"],
        "all_residence_addresss_in_last_3years": ["", "error"],
        "primary_phone": ["", "error"],
        "cell_phone":  ["", "error"],
        "email":  ["", "error"],
        "confirm_email":  ["", "error"],
        "receive_communication_via_email": [false, "error"],
        "receive_communication_via_text":  [false, "error"]
    })

  const handleIsResident = () => {
    setisResident(!isResident)
  
  }

  const onChange = (event) => {
    var value = event.target.value
    switch (event.target.name) {
      case "first_name":
        setInfo(info => ({...info, first_name: [value, "error" ]}))
        break;
      case "middle_name":
        setInfo(info => ({...info, middle_name: [value, "error"]}))
        break;
      case "last_name":
        setInfo(info => ({...info, last_name: [value, "error"]}))
        break;
      case "ssn":
        setInfo(info => ({...info, ssn: [value, "error"]}))
        break;
      case "primary_phone":
        setInfo(info => ({...info, primary_phone: [value, "error"]}))
        break;
      case "current_street_address_line1":
        setInfo(info => ({...info, current_street_address_line1: [value, "error"]}))
        break;
      case "current_street_address_line2":
          setInfo(info => ({...info, current_street_address_line2: [value, "error"]}))
          break;
      case "email":
        setInfo(info => ({...info, email: [value, "error"]}))
        break;
      case "confirm_email":
        setInfo(info => ({...info, confirm_email: [value, "error"]}))
        break;
      case "zip_code":
        setInfo(info => ({...info, zip_code: [value, "error"]}))
        break;
      case "city":
        setInfo(info => ({...info, city: [value, "error"]}))
        break;
      case "state_province":
        setInfo(info => ({...info, state_province: [state, "error"]}))
        break;
      case "country":
          setInfo(info => ({...info, country: [country, "error"]}))
          break;
      case "all_residence_addresss_in_last_3years":
          setInfo(info => ({...info, all_residence_addresss_in_last_3years: [value, "error"]}))
          break;
      default:
        break;
    }

  }

  const validateInput = () => {
    var isValid = true
    Object.keys(info).forEach(key => {
      if (key === "first_name") {
          if (info["first_name"][0].length < 1) {
            setInfo(info => ({...info, first_name: ["", "first name should be atleast 3 characters long"]}))
            isValid = false
          } else {
            setInfo(info => ({...info, first_name: [info["first_name"][0], "error"]}))
          }
      } else if (key === "last_name") {
        if (info["last_name"][0].length < 1) {
          setInfo(info => ({...info, lname: ["", "last name should be atleast 1 characters long"]}))
          isValid = false
        } else {
          setInfo(info => ({...info, last_name: [info["last_name"][0], "error"]}))
        }
      } else if (key === "ssn") {
          if (info["ssn"][0].length > 0) {
            var ssn = info["ssn"][0]
            const regex = /^\d{3}-?\d{2}-?\d{4}-?$/
            if (regex.test(ssn)) {
              setInfo(info => ({...info, ssn: [ssn, "error"]}))
            } else {
              setInfo(info => ({...info, ssn: ["", "ssn not valid"]}))
              return false
            }
          } else {
            setInfo(info => ({...info, ssn: ["", "please enter your ssn"]}))
            isValid = false
          } 
      } else if (key === "primary_phone") {
        if (info["primary_phone"][0].length > 0) {
          var number = info["primary_phone"][0]
          const regex = /^\d{3}-?\d{3}-?\d{4}-?$/
          if (regex.test(number)) {
            setInfo(info => ({...info, primary_phone: [number, "error"]}))
          } else {
            setInfo(info => ({...info, primary_phone: ["", "phone number not valid"]}))
            isValid = false
          }
        } else {
          setInfo(info => ({...info, primary_phone: ["", "please enter your number"]}))
          isValid = false
        } 
      } else if (key === "email") {
        if (info["email"][0].length > 0) {
          var email = info["email"][0]
          const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
          if (regex.test(email)) {
            setInfo(info => ({...info, email: [email, "error"]}))
          } else {
            setInfo(info => ({...info, email: ["", "please enter valid email"]}))
            isValid = false
          }
        } else {
          setInfo(info => ({...info, email: ["", "please enter your email"]}))
          isValid = false
        } 
      } else if (key === "confirm_email") {
        if (info["confirm_email"][0].length > 0) {
          if (info["confirm_email"][0] === info["email"][0]) {
            setInfo(info => ({...info, confirm_email: [info["confirm_email"][0], "error"]}))
          } else {
            setInfo(info => ({...info, confirm_email: ["", "emails dont match"]}))
            isValid = false
          }
        } else {
          setInfo(info => ({...info, confirm_email: ["", "please enter your email again"]}))
          isValid = false
        } 
      } else if (key === "current_street_address_line1")  {
        if (info["current_street_address_line1"][0].length > 0) {
            setInfo(info => ({...info, current_street_address_line1: [info["current_street_address_line1"][0], "error"]}))
        } else {
          setInfo(info => ({...info, current_street_address_line1: ["", "please enter your mailing address"]}))
          isValid = false
        } 
      } else if (key === "current_street_address_line2") {
        if (info["current_street_address_line2"][0].length > 0) {
          setInfo(info => ({...info, current_street_address_line1: [info["current_street_address_line1"][0] + " " + info["current_street_address_line2"][0], "error"]}))
        } 
      } else if (key === "zip_code") {
        if (info["zip_code"][0].length > 0) {
          var zip = info["zip_code"][0]
          const regex = /^\d{5}(?:[-\s]\d{4})?$/
          if (regex.test(zip)) {
            setInfo(info => ({...info, zip_code: [zip, "error"]}))
          } else {
            setInfo(info => ({...info, zip_code: ["", "please enter valid zipcode"]}))
            isValid = false
          }
        } else {
          setInfo(info => ({...info, zip_code: ["", "please enter zip/postal code"]}))
          isValid = false
        } 
      } else if (key === "country") {
        if (country.length > 0) {
          if (countries.includes(country)) {
            setInfo(info => ({...info, country: [country, "error"]}))
          } else {
            setInfo(info => ({...info, country: ["", "please enter valid country"]}))
            isValid = false
          }
        } else {
          setInfo(info => ({...info, country: ["", "please select a country"]}))
          isValid = false
        } 
      } else if (key === "state_province") {
        if (state.length > 0) {
          if (states.includes(state)) {
            setInfo(info => ({...info, state_province: [state, "error"]}))
          } else {
            setInfo(info => ({...info, state_province: ["", "please enter valid state"]}))
            isValid = false
          }
        } else {
          setInfo(info => ({...info, state_province: ["", "please select a state"]}))
          isValid = false
        } 
      } else if (key === "city") {
        if (!(info["city"][0].length > 0)) {
          setInfo(info => ({...info, city: ["", "please enter your city"]}))
          isValid = false
        } else {
          setInfo(info => ({...info, city: [info["city"][0], "error"]}))
        }
      } else if (key === "all_residence_addresss_in_last_3years") {
        if (isResident) {
          if (!(info["all_residence_addresss_in_last_3years"][0].length > 0)) {
            setInfo (info => ({...info, all_residence_addresss_in_last_3years: ["", "please enter all your addresses"]}))
            isValid = false
          } else {
            setInfo(info => ({...info, all_residence_addresss_in_last_3years: [info["all_residence_addresss_in_last_3years"][0], "error"]}))
          }
        } else {
          setInfo(info => ({...info, residence_address_for_3_years_or_more: [isResident, "error" ]}))
        }
      } else if (key === "dob") {
        console.log(dob)
        var today = (new Date())
        console.log(today)
        if (today.getFullYear() - dob.getFullYear() < 23 ) {
          setInfo(info => ({...info, dob: ["", "you must be atleast 23 years or older to apply "]}))
          isValid = false
        } else {
          setInfo(info => ({...info, dob: [dob, "error"]}))
          console.log(info)
        }
      } else if (key === "residence_address_for_3_years_or_more") {
        if (isResident) {
          setInfo(info => ({...info, residence_address_for_3_years_or_more: [true, "error" ]}))
        } else {
          setInfo(info => ({...info, residence_address_for_3_years_or_more: [false, "error" ]}))
        }
      } else if (key === "receive_communication_via_email") {
        if (firstCheckBox) {
          setInfo(info => ({...info, receive_communication_via_email: [true, "error" ]}))
        } else {
          setInfo(info => ({...info, receive_communication_via_email: [false, "error" ]}))
        }
      }  else if (key === "receive_communication_via_text") {
        if (secondCheckBox) {
          setInfo(info => ({...info, receive_communication_via_text: [true, "error" ]}))
        } else {
          setInfo(info => ({...info, receive_communication_via_text: [false, "error" ]}))
        }
      } 
   });
  return isValid
 }

  useEffect(() => {
    window.scrollTo(0, 0)

    console.log(info_)
    if (info_) {
        setInfo(info_)
        setcountry(info_["country"])
        setstate(info_["state"])
    }
  }, [])
  
  const handleEmailCommunication = () => {
    setfirstCheckBox(!firstCheckBox)
    console.log(firstCheckBox)
 }

  const handleContactCommunication = () => {
      setsecondCheckBox(!secondCheckBox)
      console.log(secondCheckBox)
  }

  const getDropDownValue = (item, value) => {
    console.log(item, value)
    if (item === "country") {
        setcountry(value)
        setInfo(info => ({...info, country: [value, "error"]}))
    } else {
        setstate(value)
        setInfo(info => ({...info, state_province: [value, "error"]}))
    }
  }

  const handleNextButton = () => {
    var result = validateInput()
    if (result) {
      var data = {}
      Object.keys(info).forEach(key => {
        data[key] = info[key][0]
      });
      console.log(data)
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      };
      const url = NetworkRoute.base + NetworkRoute.user + "/1"
      console.log(url)
      fetch(url, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          handleNext(data.user._id)
        })
        .catch((error) => console.error(error));
    } else {
      window.scrollTo(0, 0)
    }
}


  return (
      <MainFormContainer>

        {
          showHeader &&
          <HeaderSectionContainer>
          <FormSectionHeader>Personal</FormSectionHeader>
          <Divider/>
        </HeaderSectionContainer>
        }
         
   
          <CustomFormField  label="First Name" value={info_ ? info_["first_name"] : info["first_name"][0]} required={true} inputName="first_name" inputType="text" onChange={onChange} isError={info_ ? false : info["first_name"][1] != "error"} error={info_ ? "" : info["first_name"][1]} />
          <CustomFormField label="Middle Name" value={info_ ? info_["middle_name"] : info["middle_name"][0]} required={false}  inputName="middle_name" inputType="text" onChange={onChange} />
          <CustomFormField label="Last Name" value={info_ ? info_["last_name"] : info["last_name"][0]} required={true} inputName="last_name" inputType="text" onChange={onChange} isError={info_ ? false : info["last_name"][1] != "error"} error={info_ ? "" : info["last_name"][1]}/>
          <CustomFormField label="SSN" value={info_ ? info_["ssn"] : info["ssn"][0]}  required={true} inputName="ssn" inputType="text" onChange={onChange} isError={info_ ? false : info["ssn"][1] != "error"} error={info_ ? ""  : info["ssn"][1]}/>
          <CustomFormField label="DOB:" required={true} inputName="dob" isDate={true} date={info_ ? info_["dob"] : dob} setDate={setdob} isError={info_ ? false : info["dob"][1] != "error"} error={info_ ? "" :info["dob"][1]} />

          {
            showHeader &&
            <HeaderSectionContainer>
            <FormSectionHeader>Address</FormSectionHeader>
            <Divider/>
        </HeaderSectionContainer>
          }
         

          <CustomFormField label="Current Street Address (line 1)"  value={ info_ ? info_["current_street_address_line1"]  :info["current_street_address_line1"][0]} required={true} inputName="current_street_address_line1" inputType="text" onChange={onChange} isError={info_ ? false :info["current_street_address_line1"][1] != "error"} error={ info_ ? "" : info["current_street_address_line1"][1]}/>
          <CustomFormField label="Current Street Address (line 2)"  value={info_ ? info_["current_street_address_line2"] : info["current_street_address_line2"][0]} inputName="current_street_address_line2" inputType="text" onChange={onChange} isError={info_ ? false : info["current_street_address_line2"][1] != "error"} error={info_ ? "" : info["current_street_address_line2"][1]} required={false}/>
          <CustomFormField selectedValue={info_["country"]} itemKey={"country"} getDropDownValue={getDropDownValue} label="Country" required={true}  value={info_ ? info_["country"] :info["country"][0]} inputName="country" inputType="text" onChange={onChange} isError={info_ ? false : info["country"][1] != "error"} error={info_ ? "" : info["country"][1]} isDropDown= {true} items={countries}/>
          <CustomFormField label="City" required={true}  value={info_ ? info_["city"]  :info["city"][0]} inputName="city" inputType="text" onChange={onChange} isError={info_ ? false : info["city"][1] != "error"} error={info_ ?  "" :info["city"][1]}/>
          <CustomFormField itemKey={"state"} getDropDownValue={getDropDownValue} label="State" required={true}  value={info["state_province"][0]} inputName="state_province" inputType="text" onChange={onChange} isError={info["state_province"][1] != "error"} error={info["state_province"][1]}  isDropDown={true} items={states}/>
          <CustomFormField label="Zip/Postal code" value={info["zip_code"][0]} inputName="zip_code" inputType="text" onChange={onChange} isError={info["zip_code"][1] != "error"} error={info["zip_code"][1]} required={true}/>
          <CustomFormField label="Residence address for 3 or more years?" required={true} isToggle={true} handle={handleIsResident}/>
          {
            isResident &&
            <>
            <AddressContainer>
              <SubHealineText>Please supply ALL residence addresses within the last 3 years in the box below. Include start and end dates of residence at each address.
              <AddressExample>Example</AddressExample></SubHealineText>
              <AddressText>123 E. 15th St. <br/> Tulsa, OK 74133<br/>9-2001 to 12-2004</AddressText>
              <>
              {
                  isResident && info["all_residence_addresss_in_last_3years"][1] !== "error" &&
                    <FormLabel isError={true}>{info["all_residence_addresss_in_last_3years"][1].toUpperCase()}</FormLabel>
              } 
              </>
              <AddressTextArea name='all_residence_addresss_in_last_3years' value={info["all_residence_addresss_in_last_3years"][0]} inputType="text" onChange={onChange} width="100%" color='#EBF3F5'/>
            </AddressContainer>
            </> 
          }

          {
            showHeader &&

            <HeaderSectionContainer>
            <FormSectionHeader>Contact</FormSectionHeader>
            <Divider/>
            <SubHealineText>If your cell phone is also your primary phone, enter it in both fields below.</SubHealineText>
        </HeaderSectionContainer>
          }


          <CustomFormField label="Primary Number" value={info["primary_phone"][0]} required={true} inputName="primary_phone" inputType="text" onChange={onChange} isError={info["primary_phone"][1] != "error"} error={info["primary_phone"][1]}/>
          <CustomFormField label="Cell Phone" required={false}/>
          <CustomFormField label="Email Address" value={info["email"][0]} required={true} inputName="email" inputType="text" onChange={onChange} isError={info["email"][1] != "error"} error={info["email"][1]} />
          <CustomFormField label="Confirm Email Address" value={info["confirm_email"][0]} required={true} inputName="confirm_email" inputType="confirm_email" onChange={onChange} isError={info["confirm_email"][1] != "error"} error={info["confirm_email"][1]}/>



          {
            showHeader &&
            <>

          <AddressText>
          Yes, I agree to receive information concerning future opportunities or promotions from ITP Western Express Inc by email or other commercial electronic communications. 
          </AddressText>

          <MainCheckBoxWrapper>
            <CheckBoxWrapper>
              <CheckboxInput type="checkbox" name="receive_communication_via_email" value={firstCheckBox} onChange={handleEmailCommunication} ></CheckboxInput>
              <FormLabel>Yes</FormLabel>
            </CheckBoxWrapper>
          </MainCheckBoxWrapper>

          <AddressText>
          Would you like to receive communication from ITP Western Express Inc via text message?
         </AddressText>

          <AddressText size="10px">
            By participating, you consent to receive text messages sent by an automatic telephone dialing system, which may contain recruiting/advertising messages. Consent to these terms is not a condition of being hired, contracted, or leased. You may opt out at any time by texting STOP to unsubscribe. You also agree that ITP Western Express Inc's service provider receives in real time and logs your text messages with ITP Western Express Inc.
          </AddressText>

          <MainCheckBoxWrapper>
            <CheckBoxWrapper>
              <CheckboxInput type="checkbox" name="receive_communication_via_text" value={secondCheckBox} onChange={handleContactCommunication} ></CheckboxInput>
              <FormLabel>Yes</FormLabel>
            </CheckBoxWrapper>
          </MainCheckBoxWrapper>


          <FooterButtonContainer>
            <NextButton onClick={() => {handleBack()}} isBack={true}>Back</NextButton>
            <NextButton onClick={() => {handleNextButton()}}>Next</NextButton>
          </FooterButtonContainer>

            
            
            
            </>

          }
          

      </MainFormContainer>
    
  )
}

export default FormSection1