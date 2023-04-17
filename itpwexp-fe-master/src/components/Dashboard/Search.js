import React, {useState} from 'react'
import { Wrapper } from '../StyledElements/DashboardStyledElemets'
import { NextButton } from '../StyledElements/DisclaimerStyledElements'
import { FooterButtonContainer, FormInput } from '../StyledElements/GenericStyledElements'
import NetworkRoute from '../Utils/Network'

const Search = ({setIsLoading, handle, clear}) => {
const [firstName, setfirstName] = useState("")
const [lastName, setlastName] = useState("")
const [email, setemail] = useState("")
const [ssn, setssn] = useState("")
const [number, setnumber] = useState("")
const [license, setlicense] = useState("")

const handleSearch = () => {

  var search_query = ""
  if (firstName) search_query += "first_name=" + firstName + "&"
  if (lastName) search_query += "last_name=" +  lastName + "&"
  if (ssn) search_query += "ssn" + ssn + "&"
  if (email) search_query += "email" + email + "&"
  if (number) search_query += "primary_phone" + number + "&"
  if (license) search_query += "license" + license + "&"

  const url = NetworkRoute.base + NetworkRoute.dashboard + NetworkRoute.search + search_query
  console.log(url)
  setIsLoading(true)
  fetch(url)
      .then((response) => response.json())
      .then((data) => {
        handle(data.users)
        setIsLoading(false)
      })
      .catch((error) => console.error(error));


  
}

const reset = () => {
  setfirstName("")
  setlastName("")
  setssn("")
  setemail("")
  setnumber("")
  setlicense("")
  clear()
}

  return (
    <>
        <Wrapper margin={"65px"}>
          <FormInput  margin="3px" marginGiven={true} width="96%" widthGiven={true} placeholder="First Name" isError={false} color="#EBF3F5" type="text" name="first-name" value={firstName} onChange={(e) => {setfirstName(e.target.value)}} required/>
          <FormInput  margin="3px" marginGiven={true} width="96%" widthGiven={true} placeholder="Last Name" isError={false} color="#EBF3F5" type="text" name="last-name" value={lastName} onChange={(e) => {setlastName(e.target.value)}} required/>
          <FormInput  margin="3px" marginGiven={true} width="96%" widthGiven={true} placeholder="Email" isError={false} color="#EBF3F5" type="text" name="email" value={email} onChange={(e) => {setemail(e.target.value)}} required/>
          <FormInput  margin="3px" marginGiven={true} width="96%" widthGiven={true} placeholder="SSN" isError={false} color="#EBF3F5" type="text" name="ssn" value={ssn} onChange={(e) => {setssn(e.target.value)}} required/>
          <FormInput  margin="3px" marginGiven={true} width="96%" widthGiven={true} placeholder="License" isError={false} color="#EBF3F5" type="text" name="license" value={license} onChange={(e) => {setlicense(e.target.value)}} required/>
          <FormInput  margin="3px" marginGiven={true} width="96%" widthGiven={true} placeholder="Phone Number" isError={false} color="#EBF3F5" type="text" name="phone-number" value={number} onChange={(e) => {setnumber(e.target.value)}} required/>

          <FooterButtonContainer>
          <NextButton margin="15px" onClick={() => {handleSearch()}} marginGiven={true}>Search</NextButton>
       <NextButton margin="15px" onClick={() => {reset()}} marginGiven={true}>Clear</NextButton>
          </FooterButtonContainer>


        </Wrapper>
      
    </>
  )
}

export default Search