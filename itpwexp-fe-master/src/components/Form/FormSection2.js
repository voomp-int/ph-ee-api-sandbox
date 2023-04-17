import React, {useState, useEffect} from 'react'
import CustomFormField from '../Custom/CustomFormField'
import { FormFieldContainer, FormSectionHeader, HeaderSectionContainer } from '../Custom/CustomFormFieldStyledElements'
import { DisclaimerContainer, DisclaimerTextBold, Divider, MainFormContainer, NextButton } from '../StyledElements/DisclaimerStyledElements'
import { FooterButtonContainer, CDatePicker, FormLabel } from '../StyledElements/GenericStyledElements'
import { AddressContainer, AddressText, AddressTextArea, SubHealineText } from '../StyledElements/FormSectionStyledElements'

import NetworkRoute from '../Utils/Network'

const FormSection2 = ({user_id, handleNext, handleBack, showHeader}) => {

  const [if_applied_as_owner_operator_or_fleet_owner, setif_applied_as_owner_operator_or_fleet_owner] = useState(false)
  const [legally_eligible_for_employment_in_US, setlegally_eligible_for_employment_in_US] = useState(false)
  const [currently_employed, setcurrently_employed] = useState(false)
  const [read_write_speak_english, setread_write_speak_english] = useState(false)
  const [previously_employed_by_same_company, setpreviously_employed_by_same_company] = useState(false)
  const [current_TWIC_card, setcurrent_TWIC_card] = useState(false)
  const [known_other_names, setknown_other_names] = useState(false)

  const [employmentEndDate, setemploymentEndDate] = useState(new Date())
  const [expirationDate, setexpirationDate] = useState(new Date())

  const positions = ["Company Driver", "Owner Operator", "Fleet Owner", "Driver for Owner Operator"]
  const straightTrucksExp = ["None", "Less than a year", "1-2 years", "2-3 years","3-4 years","4-5 years", "5-6 years","6-7 years","7-8 years", "8-9 years","9-10 years","10+ years"]
  const trailer_semi = ["None", "Less than a year", "1-2 years", "2-3 years","3-4 years","4-5 years", "5-6 years","6-7 years","7-8 years", "8-9 years","9-10 years","10+ years"]
  const trailer_two = ["None", "Less than a year", "1-2 years", "2-3 years","3-4 years","4-5 years", "5-6 years","6-7 years","7-8 years", "8-9 years","9-10 years","10+ years"]

  useEffect(() => {
    console.log("Form 2 " +  user_id)
    
    console.log("This is the cookie: "+ document.getElementById("cookies"))
  }, [])
  

  const [info, setInfo] = useState(
    {
      "position_applied": ["", "error"],
      "if_applied_as_owner_operator_or_fleet_owner": [false, "error"],
      "legally_eligible_for_employment_in_US": [false, "error"],
      "currently_employed": [false, "error"],
      "last_date_of_employment": [new Date(), "error"],
      "read_write_speak_english": [false, "error"],
      "previously_employed_by_same_company": [false, "error"],
      "info_about_employment_by_same_company": ["", "error"],
      "current_TWIC_card": [false, "error"],
      "twic_card_expiration": [new Date(), "error"],
      "known_other_names": [false, "error"],
      "other_name": ["", "error"],
      "how_do_you_hear_about_us": ["", "error"],
      "if_driver_referral_enter_drivers_name": ["", "error"],
      "type": ["", "error"],
      "year_made": ["",  "error"],
      "make": ["", "error"],
      "model": ["", "error"],
      "color": ["", "error"],
      "vin": ["", "error"],
      "weight": ["", "error"],
      "mileage":["", "error"],
      "fifth_wheel_height": ["", "error"]
  })

  const [drivingExp, setDrivingExp] = useState(
    {
      "straight_truck": ["1-2 years", "error"],
      "tractor_and_semi_trailers":  ["1-2 years", "error"],
      "tractor_two_trailers":  ["1-2 years", "error"]
      // "__id": [user_id, "error"]
    }
  )
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const onChange = (event) => {
    var value = event.target.value
    switch (event.target.name) {
      case "position_applied":
        setInfo(info => ({...info, position_applied: [value, "error" ]}))
        break;
      case "if_applied_as_owner_operator_or_fleet_owner":
        setInfo(info => ({...info, if_applied_as_owner_operator_or_fleet_owner: [if_applied_as_owner_operator_or_fleet_owner, "error"]}))
        break;
      case "legally_eligible_for_employment_in_US":
        setInfo(info => ({...info, legally_eligible_for_employment_in_US: [legally_eligible_for_employment_in_US, "error"]}))
        break;
      case "currently_employed":
        setInfo(info => ({...info, currently_employed: [currently_employed, "error"]}))
        break;
      case "last_date_of_employment":
        setInfo(info => ({...info, last_date_of_employment: [employmentEndDate, "error"]}))
        break;
      case "read_write_speak_english":
        setInfo(info => ({...info, read_write_speak_english: [read_write_speak_english, "error"]}))
        break;
      case "previously_employed_by_same_company":
        setInfo(info => ({...info, previously_employed_by_same_company: [previously_employed_by_same_company, "error"]}))
        break;
      case "info_about_employment_by_same_company":
        setInfo(info => ({...info, info_about_employment_by_same_company: [value, "error"]}))
        break;
      case "current_TWIC_card":
        setInfo(info => ({...info, current_TWIC_card: [current_TWIC_card, "error"]}))
        break;
      case "twic_card_expiration":
        setInfo(info => ({...info, twic_card_expiration: [expirationDate, "error"]}))
        break;
      case "known_other_names":
        setInfo(info => ({...info, known_other_names: [value, "error"]}))
        break;
      case "other_name":
        setInfo(info => ({...info, other_name: [value, "error"]}))
        break;
      case "type":
        setInfo(info => ({...info, type: [value, "error"]}))
        break;
      case "how_do_you_hear_about_us":
        setInfo(info => ({...info, how_do_you_hear_about_us: [value, "error"]}))
        break;
      case "year_made":
        setInfo(info => ({...info, year_made: [value, "error"]}))
        break;
      case "make":
        setInfo(info => ({...info, make: [value, "error"]}))
        break;
      case "model":
        setInfo(info => ({...info, model: [value, "error"]}))
        break;
      case "vin":
        setInfo(info => ({...info, vin: [value, "error"]}))
        break;
      case "color":
        setInfo(info => ({...info, color: [value, "error"]}))
        break;
      case "weight":
        setInfo(info => ({...info, weight: [value, "error"]}))
        break;
      case "mileage":
        setInfo(info => ({...info, mileage: [value, "error"]}))
        break;
      case "fifth_wheel_height":
        setInfo(info => ({...info, fifth_wheel_height: [value, "error"]}))
        break;
      case "if_driver_referral_enter_drivers_name":
        setInfo(info => ({...info, if_driver_referral_enter_drivers_name: [value, "error"]}))
        break;
      case "straight_truck":
          setDrivingExp(drivingExp => ({...drivingExp, straight_truck: [value, "error"]}))
          break;
      case "tractor_and_semi_trailers":
          setDrivingExp(drivingExp => ({...drivingExp, tractor_and_semi_trailers: [value, "error"]}))
          break;
      case "tractor_two_trailers":
          setDrivingExp(drivingExp => ({...drivingExp, tractor_two_trailers: [value, "error"]}))
          break;
      
      default:
        break;
    }

  }

  const validateInput = (info) => {
    var isValid = true
    Object.keys(info).forEach(key => {
      if (key === "position_applied") {
          if (info["position_applied"][0].length < 1) {
            setInfo(info => ({...info, position_applied: ["", "please choose an option"]}))
            isValid = false
          } else {
            setInfo(info => ({...info, position_applied: [info["position_applied"][0], "error"]}))
          }
      } else if (key === "if_applied_as_owner_operator_or_fleet_owner") {
        if (if_applied_as_owner_operator_or_fleet_owner) {
          setInfo(info => ({...info, if_applied_as_owner_operator_or_fleet_owner: [true, "error"]}))
        } else {
          setInfo(info => ({...info, if_applied_as_owner_operator_or_fleet_owner: [false, "error"]}))
        }
      } else if (key === "legally_eligible_for_employment_in_US") {
        if (legally_eligible_for_employment_in_US) {
          setInfo(info => ({...info, legally_eligible_for_employment_in_US: [true, "error"]}))
        } else {
          setInfo(info => ({...info, legally_eligible_for_employment_in_US: [false, "error"]}))
        }
      } else if (key === "legally_eligible_for_employment_in_US") {
        if (legally_eligible_for_employment_in_US) {
          setInfo(info => ({...info, legally_eligible_for_employment_in_US: [true, "error"]}))
        } else {
          setInfo(info => ({...info, legally_eligible_for_employment_in_US: [false, "error"]}))
        }
      } else if (key === "currently_employed") {
        if (currently_employed) {
          setInfo(info => ({...info, currently_employed: [true, "error"]}))
        } else {
          setInfo(info => ({...info, currently_employed: [false, "error"]}))
        }
      } else if (key === "last_date_of_employment") {
        var today = (new Date(info["last_date_of_employment"][0]))
        if (currently_employed) {
          if (today < employmentEndDate) {
            setInfo(info => ({...info, last_date_of_employment: [today, "it cannot be a future date"]}))
          } else {
            setInfo(info => ({...info, last_date_of_employment: [employmentEndDate, "error"]}))
          }
        }
      } else if (key === "previously_employed_by_same_company")  {
        if (previously_employed_by_same_company) {
          setInfo(info => ({...info, previously_employed_by_same_company: [true, "error"]}))
        } else {
          setInfo(info => ({...info, previously_employed_by_same_company: [false, "error"]}))
        }
      } else if (key === "info_about_employment_by_same_company") {
        if (previously_employed_by_same_company) {
          if (info["info_about_employment_by_same_company"][0].length < 1) {
            setInfo(info => ({...info, info_about_employment_by_same_company: ["", "please enter "]}))
            isValid = false
          } else {
            setInfo(info => ({...info, info_about_employment_by_same_company: [info["info_about_employment_by_same_company"][0], "error"]}))
          }
        }
      } if (if_applied_as_owner_operator_or_fleet_owner) {
        if (key === "type") {
          if (info["type"][0].length < 1) {
            setInfo(info => ({...info, type: ["", "please enter the type"]}))
            isValid = false
          } else {
            setInfo(info => ({...info, type: [info["type"][0], "error"]}))
          }
      }
      }
   });
  return isValid
 }

const getDropDownValue = (item, value) => {
  if (item === "straight") {
    setInfo(info => ({...info, straight: [value, "error"]}))
  } else if (item === "trailer_semi") {
    setInfo(info => ({...info, trailer_semi: [value, "error"]}))
  } else if ( item === "how_do_you_hear_about_us" ){
    setInfo(info => ({...info, how_do_you_hear_about_us: [value, "error"]}))
  }else if ( item === "position_applied" ){
    console.log(value)
    if (value === "Owner Operator" || value === "Fleet Owner") {
      setif_applied_as_owner_operator_or_fleet_owner(true)
    } else {
      setif_applied_as_owner_operator_or_fleet_owner(false)
    }
    setInfo(info => ({...info, position_applied: [value, "error"]}))

  }  else {
    setInfo(info => ({...info, trailer_two: [value, "error"]}))
  } 
}

const handleToggle1 = () => {
  setif_applied_as_owner_operator_or_fleet_owner(!if_applied_as_owner_operator_or_fleet_owner)
}
const handleToggle2 = () => {
  setlegally_eligible_for_employment_in_US(!legally_eligible_for_employment_in_US)
}
const handleToggle3 = () => {
  setcurrently_employed(!currently_employed)
}
const handleToggle4 = () => {
  setread_write_speak_english(!read_write_speak_english)
}
const handleToggle5 = () => {
  setpreviously_employed_by_same_company(!previously_employed_by_same_company)
}
const handleToggle6 = () => {
  setcurrent_TWIC_card(!current_TWIC_card)
}
const handleToggle7 = () => {
  setknown_other_names(!known_other_names)
}

const getRequestOptions = (data) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  };

  return requestOptions
}

const handleNextButton = () => {
  
  var val_result = validateInput(info)
  var val_result2 = validateInput(drivingExp)
  if (val_result && val_result2) {
    var data = {}
    Object.keys(info).forEach(key => {
      data[key] = info[key][0]
    });
    const url = NetworkRoute.base + NetworkRoute.user + "/2/" + user_id
    console.log(info)
    fetch(url, getRequestOptions(data))
      .then((response) => response.json())
      .then((result) => {
          var data2 = {}
          Object.keys(drivingExp).forEach(key => {
            data2[key] = drivingExp[key][0]
          });
          console.log(data2)
          const url1 = NetworkRoute.base + NetworkRoute.user + "/3/" + user_id
          fetch(url1, getRequestOptions(data2))
            .then((response) => response.json())
            .then((result2) => {
              console.log(result)
              console.log(result2)
            })
            .catch((error) => console.error(error + "\nfrom second fetch"));
      })
      .catch((error) => console.error(error + "\nfrom first fetch"));
  } else {
    window.scrollTo(0, 0)
  }
}

  return (
      <MainFormContainer>

          <HeaderSectionContainer>
              <FormSectionHeader>General Information</FormSectionHeader>
              <Divider/>
          </HeaderSectionContainer>
   
          <CustomFormField itemKey={"position_applied"} getDropDownValue={getDropDownValue} required={true}  value={info["position_applied"][0]} inputName="position_applied" inputType="text" onChange={onChange} isError={info["position_applied"][1] != "error"} error={info["position_applied"][1]} isDropDown={true} label="What position are you applying for?" items={positions}/>
          <CustomFormField setYesSelect={if_applied_as_owner_operator_or_fleet_owner} label="If you answered 'Owner Operator' or 'Fleet Owner', select yes." required={true} isToggle={true} handle={handleToggle1}/>
          {
            if_applied_as_owner_operator_or_fleet_owner && 
            <>
              <HeaderSectionContainer>
                <FormSectionHeader> Equipment (Owner/Operators Only)</FormSectionHeader>
                <Divider/>
              </HeaderSectionContainer>

              <DisclaimerTextBold>Equipment Description (Tractor):</DisclaimerTextBold>

              <CustomFormField label="Type" required={true} value={info["type"][0]} inputName="type" inputType="text" onChange={onChange} isError={info["type"][1] != "error"} error={info["type"][1]} />
              <CustomFormField label="Year" required={true} value={info["year_made"][0]} inputName="year_made" inputType="text" onChange={onChange} isError={info["year_made"][1] != "error"} error={info["year_made"][1]} />
              <CustomFormField label="Make" required={true} value={info["make"][0]} inputName="make" inputType="text" onChange={onChange} isError={info["make"][1] != "error"} error={info["make"][1]} />
              <CustomFormField label="Model" required={true} value={info["model"][0]} inputName="model" inputType="text" onChange={onChange} isError={info["model"][1] != "error"} error={info["model"][1]} />
              <CustomFormField label="Color" required={true} value={info["color"][0]} inputName="color" inputType="text" onChange={onChange} isError={info["color"][1] != "error"} error={info["color"][1]} />
              <CustomFormField label="VIN" required={false} value={info["vin"][0]} inputName="vin" inputType="text" onChange={onChange} isError={info["vin"][1] != "error"} error={info["vin"][1]} />
              <CustomFormField label="Weight" required={false} value={info["weight"][0]} inputName="weight" inputType="text" onChange={onChange} isError={info["weight"][1] != "error"} error={info["weight"][1]} />
              <CustomFormField label="Mileage" required={false} value={info["mileage"][0]} inputName="mileage" inputType="text" onChange={onChange} isError={info["mileage"][1] != "error"} error={info["mileage"][1]} />
              <CustomFormField label="Fifth Wheel Height" required={true} value={info["fifth_wheel_height"][0]} inputName="fifth_wheel_height" inputType="text" onChange={onChange} isError={info["fifth_wheel_height"][1] != "error"} error={info["fifth_wheel_height"][1]} />
           
            </>
          }
          <CustomFormField label="Are you legally eligible for employment in the United States?" required={true} isToggle={true} handle={handleToggle2}/>
          
          <CustomFormField label="Are you currently employed?" required={true} isToggle={true} handle={handleToggle3}/>
          {
            currently_employed && 
            <>
            <CustomFormField label="What date did your last employment end?" isError={info["last_date_of_employment"][1] != "error"} error={info["last_date_of_employment"][1]} inputName="last_date_of_employment" required={true} isDate={true} date={employmentEndDate} setDate={setemploymentEndDate}/>
            </>
          }
          <CustomFormField label="Do you read, write, and speak English?" required={true} isToggle={true} handle={handleToggle4} />
          <CustomFormField label="Have you ever worked for this company before?" required={true} isToggle={true} handle={handleToggle5}/>
          {
            previously_employed_by_same_company && 
            <>
            <AddressContainer>
              <AddressText>Enter start and end dates, location, position, and reason for leaving:</AddressText>
              {
                  previously_employed_by_same_company && info["previously_employed_by_same_company"][1] !== "error" &&
                    <FormLabel isError={true}>{info["previously_employed_by_same_company"][1].toUpperCase()}</FormLabel>
              } 
              <AddressTextArea  name='previously_employed_by_same_company' value={info["previously_employed_by_same_company"][0]} inputType="text" onChange={onChange}   width="500px" color='#EBF3F5'/>
            </AddressContainer>
            </>
          }
          <CustomFormField label="Do you have a current TWIC card?" required={true} isToggle={true} handle={handleToggle6}/>
          {
            current_TWIC_card && 
            <>
            <CustomFormField label="Expiration Date:"  isError={info["current_TWIC_card"][1] != "error"} error={info["current_TWIC_card"][1]} inputName="current_TWIC_card" required={true} isDate={true} date={expirationDate} setDate={setexpirationDate}  />
            </>
          }
          <CustomFormField label="Have you ever been known by any other name?" required={true} isToggle={true} handle={handleToggle7}/>
          {
            known_other_names && 
            <>
             <CustomFormField value={info["other_name"][0]} inputName="other_name" inputType="text" onChange={onChange} isError={info["other_name"][1] != "error"} error={info["other_name"][1]}  label="Enter name:" required={true}/>
            </>
          }
          <CustomFormField itemKey={"how_do_you_hear_about_us"} getDropDownValue={getDropDownValue} value={info["how_do_you_hear_about_us"][0]} inputName="how_do_you_hear_about_us" inputType="text" onChange={onChange} isError={info["how_do_you_hear_about_us"][1] != "error"} error={info["how_do_you_hear_about_us"][1]}  label="How did you hear about us?" required={true} isDropDown={true} items={["Driver Referral", "Craiglist", "Facebook", "Driver Pulse","Newspaper", "Web", "Other"]}/>
          <CustomFormField value={info["if_driver_referral_enter_drivers_name"][0]} inputName="if_driver_referral_enter_drivers_name" inputType="text" onChange={onChange} isError={info["if_driver_referral_enter_drivers_name"][1] != "error"} error={info["if_driver_referral_enter_drivers_name"][1]}  label="If 'Driver Referral', please enter the driver's name" required={info["how_do_you_hear_about_us"][0] == "Driver Referral"}/>
          <CustomFormField label="If 'Other', please explain" required={false}/>

          <HeaderSectionContainer>
              <FormSectionHeader>Driving Experience</FormSectionHeader>
              <Divider/>
              <SubHealineText>For each class of equipment, select years of experience. If no experience in a class, select "None".</SubHealineText>
          </HeaderSectionContainer>

          <CustomFormField itemKey={"straight"} getDropDownValue={getDropDownValue} label="Straight Truck" required={true}  value={drivingExp["straight_truck"][0]} inputName="straight_truck" inputType="text" onChange={onChange} isError={drivingExp["straight_truck"][1] != "error"} error={drivingExp["straight_truck"][1]} isDropDown={true} items={straightTrucksExp}/>
          <CustomFormField itemKey={"tractor_semi"} getDropDownValue={getDropDownValue} label="Tractor and Semi-Trailer" required={true}  value={drivingExp["tractor_and_semi_trailers"][0]} inputName="tractor_and_semi_trailers" inputType="text" onChange={onChange} isError={drivingExp["tractor_and_semi_trailers"][1] != "error"} error={drivingExp["tractor_and_semi_trailers"][1]} isDropDown={true}  items={trailer_semi}/>
          <CustomFormField itemKey={"tractor_two"} getDropDownValue={getDropDownValue} label="Tractor - Two Trailers" required={true}  value={drivingExp["tractor_two_trailers"][0]} inputName="tractor_two_trailers" inputType="text" onChange={onChange} isError={drivingExp["tractor_two_trailers"][1] != "error"} error={drivingExp["tractor_two_trailers"][1]} isDropDown={true} items={trailer_two}/>

          <AddressContainer>
              <AddressText>Other</AddressText>
              <AddressTextArea width="100%" color='#EBF3F5'/>
          </AddressContainer>
   
          <FooterButtonContainer>
            <NextButton onClick={() => {handleBack()}} isBack={true}>Back</NextButton>
            <NextButton onClick={() => {handleNextButton()}}>Next</NextButton>
          </FooterButtonContainer>

      </MainFormContainer>
    
  )
}

export default FormSection2