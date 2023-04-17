import React from 'react'
import { FormSectionTopWrapper, FormSectionHeaderItem } from '../StyledElements/DashboardStyledElemets'
import { FormSections } from './DashboardView'



const FormSectionHeader = ({selectedSection, setSelectedSection }) => {

    const handleSection = (item) => {
        setSelectedSection(item)
    }
  return (

    <FormSectionTopWrapper>
           <FormSectionHeaderItem onClick={() => handleSection(FormSections.Personal)} isSelected={selectedSection === FormSections.Personal}>{FormSections.Personal}</FormSectionHeaderItem>
           <FormSectionHeaderItem onClick={() => handleSection(FormSections.CQ)} isSelected={selectedSection === FormSections.CQ}>{FormSections.CQ}</FormSectionHeaderItem>
           <FormSectionHeaderItem onClick={() => handleSection(FormSections.Licenses)} isSelected={selectedSection === FormSections.Licenses}>{FormSections.Licenses}</FormSectionHeaderItem>
           <FormSectionHeaderItem onClick={() => handleSection(FormSections.Employments)} isSelected={selectedSection === FormSections.Employments}>{FormSections.Employments}</FormSectionHeaderItem>
           <FormSectionHeaderItem onClick={() => handleSection(FormSections.Violations)} isSelected={selectedSection === FormSections.Violations}>{FormSections.Violations}</FormSectionHeaderItem>
           <FormSectionHeaderItem onClick={() => handleSection(FormSections.Accidents)} isSelected={selectedSection === FormSections.Accidents}>{FormSections.Accidents}</FormSectionHeaderItem>
    </FormSectionTopWrapper>

  )
}

export default FormSectionHeader