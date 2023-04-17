import React, { useState, useEffect } from 'react'
import Checkbox from '../Custom/Checkbox'
import CustomFormField from '../Custom/CustomFormField'
import { CheckboxLabel, FormSectionHeader, HeaderSectionContainer, MainCheckBoxWrapper, HeaderWrapper } from '../Custom/CustomFormFieldStyledElements'
import { Divider, MainFormContainer, NextButton } from '../StyledElements/DisclaimerStyledElements'
import { FooterButtonContainer, CDDatePicker, FormLabel } from '../StyledElements/GenericStyledElements'
import { LicenseContainer, LicenseCardContainer, LicenseHeader, LicenseInfoContainer, LicenseInfoWrapper, LicenseInfo, LicenseInfoText, LicenseInfoTitle, LicenseHeaderContainer, IconButton, CheckBoxListContainer, CheckBoxWrapper, CheckboxInput } from '../StyledElements/FormSectionStyledElements'
import Delete from '../../assets/delete.png'
import Edit from '../../assets/edit.png'


const FormSection3 = ({handleNext, handleBack}) => {

  const [licenseExpiration, setlicenseExpiration] = useState()
  const [physicalExpiration, setphysicalExpiration] = useState()
  const [isCommerical, setIsCommercial] = useState(false)
  const [showLicenseForm, setshowLicenseForm] = useState(false)

  const [checkedList, setCheckedList] = useState([]);
  const [listData, setlist] = useState([
    { id: "1", value: "None", isDisabled: false },
    { id: "2", value: "Other", isDisabled: false },
    { id: "3", value: "Tanker", isDisabled: false },
    { id: "4", value: "Double/Triples", isDisabled: false },
    { id: "5", value: "X Endorsement", isDisabled: false },
    { id: "6", value: "Hazmat", isDisabled: false }
  ]);

 
  const handleSelect = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
 
    if (value === "None") {
        
    } else {
        if (isChecked) {
          //Add checked item into checkList
          setCheckedList([...checkedList, value]);
        } else {
          //Remove unchecked item from checkList
          const filteredList = checkedList.filter((item) => item !== value);
          setCheckedList(filteredList);
        }
    }

  };




  const [licenses, setLicenses] = useState([
    {
      id: 1,
      number: "A33333",
      authority: "AK",
      current: "Yes",
      class: "Class AZ",
      cdl: "Yes"
    }
  ])

  const handleSaveLicense = () => {
  }

  const handleAddAnotherLicense = () => {
    setshowLicenseForm(!showLicenseForm)
  }

  const handleDeleteLicense = (id) => {
    console.log(id)
    const license_to_delete = licenses.findIndex((license) => license.id === id);
    if (license_to_delete > -1) {
      licenses.splice(license_to_delete, 1);
    }
    setLicenses([...licenses])
    if (licenses.length == 0) {
      setshowLicenseForm(true)
    }
  }

  const handleShowLicenseForm = (id) => {
    
  }

  useEffect(() => {
    if (licenses.length == 0) {
      setshowLicenseForm(true)
    } else {
      setshowLicenseForm(false)
    }
    window.scrollTo(0, 0)
  }, [])
  

  // function handleAddNewUser() {
  //   // it's important to not mutate state directly, so here we are creating a copy of the current state using the spread syntax
  //   const updateUsers = [
  //     // copy the current users state
  //     ...users,
  //     // now you can add a new object to add to the array
  //     {
  //       // using the length of the array for a unique id
  //       id: users.length + 1,
  //       // adding a new user name
  //       name: "Steve",
  //       // with a type of member
  //       type: "member"
  //     }
  //   ];
  //   // update the state to the updatedUsers
  //   setUsers(updateUsers);
  // }

  return (
    <>

          <MainFormContainer>

              {
                licenses.length != 0 &&
                <>
                 <HeaderSectionContainer>
                      <HeaderWrapper>
                          <FormSectionHeader>License's Overview</FormSectionHeader>
                          <NextButton onClick={() => {handleAddAnotherLicense()}}>{showLicenseForm ? "Cancel" : "Add"}</NextButton>
                      </HeaderWrapper>
                        <Divider/>
                      </HeaderSectionContainer>

                      {
                      licenses.map((license) => (
                        <LicenseCard key={license.id} license={license} handleDeleteLicense={handleDeleteLicense} handleLicenseForm={handleShowLicenseForm} ></LicenseCard>
                      ))
                      }
                </>
                     
              } 

              {
                showLicenseForm &&
                <>
                  <HeaderSectionContainer>
                    <HeaderWrapper>
                        <FormSectionHeader>License Details</FormSectionHeader>
                        <NextButton onClick={() => {handleSaveLicense()}}>Save</NextButton>
                    </HeaderWrapper>
                      <Divider/>
                  </HeaderSectionContainer>

                  <CustomFormField label="License Number" required={true}/>
                  <CustomFormField label="Country" required={true} isDropDown= {true} items={["United States of America", "Canada", "Other"]}/>
                  <CustomFormField label="License Authority" required={true} isDropDown= {true} items={["United States of America", "Canada", "Other"]}/>
                  <CustomFormField label="License Expiration" required={true} isDate={true} date={licenseExpiration} setDate={setlicenseExpiration}/>
                  <CustomFormField label="Physical Expiration" required={true} isDate={true} date={physicalExpiration} setDate={setphysicalExpiration}/>

                  <CustomFormField label="Is this your current driver license?" required={true} isToggle={true}/>

                  <CustomFormField label="Is this a commercial driver license?"  handle={() => {setIsCommercial(!isCommerical)}} required={true} isToggle={true}/>
                  {
                    isCommerical && 
                    <CustomFormField label="License Class" required={true}  isDropDown= {true} items={["Class A", "Class AZ", "Class B","Class C","Class D","Class E","Class F", "Class O", "Class R", "Class 1", "Class 2","Class 3","Class 4","Class 5","Class A permit"]}/>
                  }
                  <FormLabel>Endorsement</FormLabel>
                  <CheckBoxListContainer>
                    {
                      listData.map((item, index) => {
                        return (
                            <>
                            <CheckBoxWrapper key={item.id}>
                              <CheckboxInput isDisabled={item.isDisabled} type="checkbox" name="languages" value={item.value} onChange={handleSelect} ></CheckboxInput>
                              <FormLabel>{item.value}</FormLabel>
                            </CheckBoxWrapper>
                            </>
                        );
                      })
                    }
                  </CheckBoxListContainer>

                  
                </>
              }
  
                  <FooterButtonContainer>
                    <NextButton onClick={() => {handleBack()}} isBack={true}>Back</NextButton>
                    <NextButton onClick={() => {handleNext()}}>Next</NextButton>
                  </FooterButtonContainer>

      </MainFormContainer>
    

    </>
  )
}

const LicenseCard = ({license, handleLicenseForm, handleDeleteLicense }) => {

    return (
      <>
      <LicenseCardContainer>
        <LicenseHeaderContainer>
            <LicenseHeader>{license.number}</LicenseHeader>
            <IconButton src={Edit} onClick={() => handleLicenseForm(license.id)}></IconButton>
            <IconButton src={Delete} onClick={() => handleDeleteLicense(license.id)}></IconButton>
            
        </LicenseHeaderContainer>
        <LicenseInfoContainer>
            <LicenseInfoWrapper>
                <LicenseInfo>
                  <LicenseInfoTitle>License Authority:</LicenseInfoTitle>
                  <LicenseInfoText>{license.authority}</LicenseInfoText>
                </LicenseInfo>

                <LicenseInfo>
                  <LicenseInfoTitle>Class:</LicenseInfoTitle>
                  <LicenseInfoText>{license.class}</LicenseInfoText>
                </LicenseInfo>

            </LicenseInfoWrapper>
            <LicenseInfoWrapper>

                <LicenseInfo>
                  <LicenseInfoTitle>Current: </LicenseInfoTitle>
                  <LicenseInfoText>{license.current}</LicenseInfoText>
                </LicenseInfo>

                <LicenseInfo>
                  <LicenseInfoTitle>CDL: </LicenseInfoTitle>
                  <LicenseInfoText>{license.cdl}</LicenseInfoText>
                </LicenseInfo>
            </LicenseInfoWrapper>
        </LicenseInfoContainer>
      </LicenseCardContainer>
      
      </>
    )


}

export default FormSection3