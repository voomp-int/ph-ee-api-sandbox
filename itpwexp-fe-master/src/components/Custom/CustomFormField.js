import React from 'react'
import { SubHealineText } from '../StyledElements/FormSectionStyledElements'
import { FormInput, FormLabel, FormInputWrapper, CDatePicker } from '../StyledElements/GenericStyledElements'
import { FormFieldContainer, LabelContainer, RequiredLabel  } from './CustomFormFieldStyledElements'
import CustomToggleButton from './CustomToggleButton'
import DropDownMenu from './DropDownMenu'

const CustomFormField = ({
  label, 
  required, 
  isToggle, 
  handle, 
  isDropDown, 
  items, 
  isDate, 
  date, 
  setDate, 
  hasSubheading, 
  subheading,
  inputName,
  inputType,
  onChange,
  isError,error, value, getDropDownValue, itemKey, setYesSelect, placeholder, width, widthGiven, selectedValue}) => {
  return (
    <FormFieldContainer>
        <FormInputWrapper>
          <LabelContainer>
              <FormLabel color='black' htmlFor="email">{label}</FormLabel>
              {
                required && 
                <RequiredLabel>*</RequiredLabel>
              }
          </LabelContainer>
          {
            hasSubheading && 
            <SubHealineText>{subheading}</SubHealineText>
          }
            {/* {
            error === "EmailError" && <FormLabel isError={true}>{errorMessage}</FormLabel>
            } */}
            {
              isDate &&
              <>
               {
                isError &&
                  <FormLabel isError={true}>{error.toUpperCase()}</FormLabel>

                }
                <CDatePicker color="white" onChange={setDate} value={date} ></CDatePicker>
              </>
              
            }
            {
              isDropDown && 
              <>
                              {
                isError &&
                  <FormLabel isError={true}>{error.toUpperCase()}</FormLabel>
                }
              <DropDownMenu selectedValue={selectedValue} itemKey={itemKey} getDropDownValue={getDropDownValue} color="#EBF3F5" width={widthGiven ? width : "100%"} items={items}></DropDownMenu>
              </>
              
            }
            {
              !isDropDown && !isDate &&
              <>
               {
                required && !isToggle &&
                <>
                {
                isError &&
                  <FormLabel isError={true}>{error.toUpperCase()}</FormLabel>
                } 
                   <FormInput width={width} widthGiven={widthGiven} placeholder={placeholder} isError={isError} color="#EBF3F5" type={inputType} name={inputName} value={value} onChange={onChange} required/>
                </>
                
               }
                
               {
                !required && !isToggle &&
                <FormInput width={width} widthGiven={widthGiven} placeholder={placeholder}  isError={isError} color="#EBF3F5" type={inputType} name={inputName} value={value} onChange={onChange}  required/>
               }
               {
                isToggle &&
                  <CustomToggleButton setYesSelect={setYesSelect} handle={handle}/>
               }
              </>
            }
          
            
            
        </FormInputWrapper>
    </FormFieldContainer>
  )
}

export default CustomFormField