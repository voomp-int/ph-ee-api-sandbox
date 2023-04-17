import React, { useState, useEffect, useMemo } from 'react'
import CustomFormField from '../Custom/CustomFormField';
import { DahsboardUserInfoContainer, FormBorderContainer, HighlightInfo, HomeWrapperContainer, InfoCard, InfoContactCard, InfoContainer, InfoLabel, LabelConatiner, LabelIcon, MenuImage, NameTitle, SectionHeaderTitle, SectionHeaderTitleText, SectionItem, SectionTitle, SectionTopWrapper } from '../StyledElements/DashboardStyledElemets';
import userData, { user } from '../Utils/MockData';
import NetworkRoute from '../Utils/Network';
import Table from '../../Table';
import DocumentsUpload from './DocumentsUpload';
import { PreviewContainer } from '../StyledElements/DocumentUploadStyledElement';
import { FooterButtonContainer, FormButton } from '../StyledElements/GenericStyledElements';
import FormSection1 from '../Form/FormSection1';
import FormSection2 from '../Form/FormSection2';
import FormSection3 from '../Form/FormSection3';
import FormSection4 from '../Form/FormSection4';
import FormSectionHeader from './FormSectionHeader';
import Email from '../../assets/email.png'
import Phone from '../../assets/cell.png'
import SSN from '../../assets/ssn.png'
import Address from '../../assets/address.png'
import Notes, { NotesSection } from './Note';


export const section = {
        Documents: "documents",
        Log: "log",
        Home: "home",
        App: "app-view",
        HighLight: "highlight-view"
}

export const FormSections = {
        Personal: "Personal Info",
        CQ: "Company",
        Licenses: "Licenses",
        Violations: "Violations",
        Accidents: "Accidents",
        Employments: "Employment"
}
    
    


const DashboardView = ({setIsLoading, current_user, current_user_id, setcurrentUser}) => {

 const [selectedSection, setselectedSection] = useState(section.App)

 const handleSection = (item) => {
    setselectedSection(item)
 }

 const [formSection, setFormSection] = useState(FormSections.Personal)
 const [noteSection, setNoteSection] = useState(NotesSection.View)

 useEffect(() => {
    const url = NetworkRoute.base + NetworkRoute.dashboard + NetworkRoute.worklist + "/" + current_user_id 
    setIsLoading(true)
    fetch(url) 
        .then((response) => response.json())
        .then((user_data) => {
           setcurrentUser(user_data)
           setIsLoading(false)
        })
        .catch((error) => console.error(error));
 }, [])
 

 const checkExist = (current_user) => {
        if (current_user) return true;
        else return false;
 }


 const [userfiles, setFiles] = useState({
       files: []
      });
    
const updateUploadedFiles = (files) => {
        setFiles({ ...userfiles, files: files });
} 
    
const uploadFiles = () => {
       
        if (!userfiles.files) {
                return;
        }
        setIsLoading(true)
        const data = new FormData();
        userfiles.files.forEach((file, i) => {
                data.append("document", file, file.name);
        });
        const url = NetworkRoute.base + NetworkRoute.dashboard + NetworkRoute.document + NetworkRoute.upload + "/" + current_user_id
        fetch(url, {
        method: 'POST',
        body: data,
        })
        .then((res) => res.json())
        .then((data) => {
                console.log("success")
                console.log(data)
                setIsLoading(false)
        })
        .catch((err) => console.error(err));
}

  return (
   <>
   <HomeWrapperContainer>
        <SectionTopWrapper>
                {/* <SectionItem onClick={() => handleSection(section.Home)} isSelected={selectedSection === section.Home}>Home</SectionItem> */}
                <SectionItem onClick={() => handleSection(section.App)} isSelected={selectedSection === section.App}>App View</SectionItem>
                <SectionItem onClick={() => handleSection(section.HighLight)} isSelected={selectedSection === section.HighLight}>Highlight View</SectionItem>
                <SectionItem onClick={() => handleSection(section.Documents)} isSelected={selectedSection === section.Documents}>Documents</SectionItem>
                <SectionItem onClick={() => handleSection(section.Log)} isSelected={selectedSection === section.Log}>Activity Log</SectionItem>
        </SectionTopWrapper>


        {(() => {
            switch (selectedSection) {
                case section.Home:
                        return <>
                          {/*  */}
                        </>
                case section.Documents:
                        return (
                                <>
                                <DahsboardUserInfoContainer>

                                <DocumentsUpload   
                                        accept=".jpg,.pdf,.png,.jpeg"
                                        label="Documents"
                                        updateFilesCb={updateUploadedFiles}
                                        multiple={true}/>
                
                                       
                                </DahsboardUserInfoContainer>

                                <PreviewContainer>
                                {
                                Object.keys(userfiles.files).map((fileName, index) => {                          
                                        return (
                                        <>
                                        <InfoLabel>{index + 1}. {userfiles.files[index].name}</InfoLabel>
                                        </>
                                        );
                                })}


                        {                                
                                userfiles.files.length != 0 &&
                                <FooterButtonContainer>
                                        <FormButton onClick={() => {uploadFiles()}} color='#7EB6EA'>Upload</FormButton>                           
                                </FooterButtonContainer>
                        }
                               
                                </PreviewContainer>

                               
                                
                                </>
                                
                        );  

                case section.Log:
                        return (
                                <>
                                <DahsboardUserInfoContainer>

                                log
                                </DahsboardUserInfoContainer>
                                
                                </>
                                
                        );
                case section.App:
                        return (
                                <>
                                {
                                checkExist(current_user) &&
                                <>
                                        <DahsboardUserInfoContainer>
                                                <InfoCard color='#EBF3F5'>
                                                        <NameTitle>{current_user.user.first_name} {current_user.user.last_name} </NameTitle>
                                                        
                                                </InfoCard>
                                                <InfoContactCard color='#EBF3F5'> 
                                                
                                                <SectionTitle>Contact Info</SectionTitle>
                                                <InfoLabel></InfoLabel>
                                                <LabelConatiner>
                                                        <LabelIcon src = {SSN}></LabelIcon>
                                                        <NameTitle>{current_user.user.ssn}</NameTitle>
                                                </LabelConatiner>

                                                <LabelConatiner>
                                                        <LabelIcon src = {Email}></LabelIcon>
                                                        <NameTitle>{current_user.user.email}</NameTitle>
                                                </LabelConatiner>

                                                <LabelConatiner>
                                                        <LabelIcon src = {Phone}></LabelIcon>
                                                        <NameTitle>{current_user.user.primary_phone}</NameTitle>
                                                </LabelConatiner>


                                                <LabelConatiner>
                                                        <LabelIcon src = {Address}></LabelIcon>
                                                        <NameTitle>{current_user.user.current_street_address_line1} {current_user.user.current_street_address_line2}</NameTitle>
                                                </LabelConatiner>
                                               
                                        
                                                        {/* <CustomFormField width={"50%"} widthGiven={true} itemKey={"status"} label="Status:" value={userData.status} inputName="status" inputType="text" isDropDown= {true} items={["Not Qualified","Hired", "Not Interested"]}/> 
                                                        <CustomFormField width={"50%"} widthGiven={true} itemKey={"worklist"} label="Worklist:" value={userData.worklist} inputName="worklist" inputType="text" isDropDown= {true} items={["Not Qualified","Hired", "Not Interested"]}/> 
                                                        <CustomFormField width={"50%"} widthGiven={true} itemKey={"recruiter"} label="Recruiter:" value={userData.recruiter} inputName="recruiter" inputType="text" isDropDown= {true} items={["Not Qualified","Hired", "Not Interested"]}/> 
                                                        <CustomFormField width={"50%"} widthGiven={true} itemKey={"processor"} label="Processor:" value={userData.processor} inputName="processor" inputType="text" isDropDown= {true} items={["Not Qualified","Hired", "Not Interested"]}/>  */}
                                                </InfoContactCard>
                                        
                                        </DahsboardUserInfoContainer>

                                        <DahsboardUserInfoContainer>
                                                <Notes setIsLoading={setIsLoading} notes={current_user.user.notes} selectedNoteSection={noteSection} setSelectedNoteSection={setNoteSection}> </Notes>
                                        </DahsboardUserInfoContainer>
                                      
                                        <InfoCard widthGiven={true} width={"100%"} color='white' margin= "0px">

                                            <FormSectionHeader setSelectedSection={setFormSection} selectedSection={formSection}></FormSectionHeader>
                                            <FormBorderContainer>
                                                
                                                 {
                                                        (() => {

                                                        switch (formSection) {
                                                                case FormSections.Personal:
                                                                        return (
                                                                        <>
                                                                                <FormSection1 info_={current_user.user} showHeader={false}></FormSection1>
                                                                        </>
                                                                        );

                                                                case FormSections.CQ:
                                                                        return (
                                                                                <FormSection2 showHeader={false}></FormSection2>
                                                                        ) ;
                                                                case FormSections.Licenses:
                                                                        return (
                                                                                <FormSection3 showHeader={false}></FormSection3>
                                                                        ) ;
                                                                case FormSections.Employments:
                                                                        return (
                                                                                <FormSection4 showHeader={false}></FormSection4>
                                                                        ) ;
                                                                default:
                                                                        break;
                                                        }



                                                         })()
                                                 }

                                               

                                            </FormBorderContainer>

                                           
                                        </InfoCard>
                                </>
                                }

                                </>
                                
                        );
                case section.HighLight:
                        return (
                                <>
                                <DahsboardUserInfoContainer>
                                        <InfoCard widthGiven={true} width={"100%"} color='white'>
                                                <SectionTitle>Personal Information</SectionTitle>
                                                {getUserPersonalInfo(current_user)}
        
                                        </InfoCard>
                                </DahsboardUserInfoContainer>

                                <DahsboardUserInfoContainer>
                                <InfoCard widthGiven={true} width={"100%"} color='white'>
                                <SectionTitle>Employement History</SectionTitle>
                                        <GetEmploymentHistory current_user={current_user}></GetEmploymentHistory>       
                                 </InfoCard>
                                 </DahsboardUserInfoContainer>

                                 <DahsboardUserInfoContainer>
                                <InfoCard widthGiven={true} width={"100%"} color='white'>
                                <SectionTitle>Violations</SectionTitle>
                                        <GetViolations current_user={current_user}></GetViolations>            
                                 </InfoCard>
                                 </DahsboardUserInfoContainer>

                                 <DahsboardUserInfoContainer>
                                <InfoCard widthGiven={true} width={"100%"} color='white'>
                                <SectionTitle>Accidents</SectionTitle>
                                        <GetAccidents current_user={current_user}></GetAccidents>             
                                 </InfoCard>
                                 </DahsboardUserInfoContainer>
                                
                                </>
                                
                        );
                }
        })()}

  
   </HomeWrapperContainer>
    
   </>
  );
}

const getUserPersonalInfo = (current_user) => {
        return (
                <>
                 <InfoContainer>
                <InfoLabel>Name</InfoLabel>
                <HighlightInfo> {current_user.user.first_name} {current_user.user.last_name}   </HighlightInfo>
                </InfoContainer>

                <InfoContainer>
                <InfoLabel>Address</InfoLabel>
                <HighlightInfo> {current_user.user.current_street_address_line1} {current_user.user.current_street_address_line2}   </HighlightInfo>
                </InfoContainer>

                <InfoContainer>
                <InfoLabel>SSN</InfoLabel>
                <HighlightInfo> {current_user.user.ssn} </HighlightInfo>
                </InfoContainer>

                <InfoContainer>
                <InfoLabel>DOB</InfoLabel>
                <HighlightInfo> {current_user.user.dob} </HighlightInfo>
                </InfoContainer>

                <InfoContainer>
                <InfoLabel>City/State</InfoLabel>
                <HighlightInfo> {current_user.user.city}, {current_user.user.state_province} - {current_user.user.zip_code} </HighlightInfo>
                </InfoContainer>

                <InfoContainer>
                <InfoLabel>Country</InfoLabel>
                <HighlightInfo> {current_user.user.country} </HighlightInfo>
                </InfoContainer>

                <InfoContainer>
                <InfoLabel>Phone</InfoLabel>
                <HighlightInfo> {current_user.user.primary_phone} </HighlightInfo>
                </InfoContainer>
                </>
        )
}


const GetEmploymentHistory = ({current_user}) => {

        const columns = useMemo(
                () => [
                  {
                    // first group - TV Show
                    Header: "Employments/School",
                    // First group columns
                    columns: [
                        {
                        Header: "Description",
                        accessor: "company_name",
                        },
                        {
                        Header: "Type",
                        accessor: "country",
                        },
                        {
                        Header: "Start-Date",
                        accessor: "start_date",
                        },
                        {
                        Header: "End-Date",
                        accessor: "end_date",
                        },
                    ],
                  },
                ],
                []
              );

              return (
                <>
                <Table columns={columns} data={current_user.user.user_work_school_conviction_violation_unemployment_history_id.user_employer_information_id}></Table>
                </>
              )
}

const GetViolations = ({current_user}) => {

        const columns = useMemo(
                () => [
                  {
                    // first group - TV Show
                    Header: "Violations",
                    // First group columns
                    columns: [
                        {
                        Header: "Charge/Description",
                        accessor: "charge_description",
                        },
                        {
                        Header: "State",
                        accessor: "state",
                        },
                        {
                        Header: "Commercial Vehicle",
                        accessor: "were_you_in_commercial_vechicle",
                        },
                        {
                        Header: "Fine",
                        accessor: "fine_amount",
                        },
                        {
                        Header: "Date",
                        accessor: "violation_date",
                        },
                    ],
                  },
                ],
                []
              );

              return (
                <>
                <Table columns={columns} data={current_user.user.user_work_school_conviction_violation_unemployment_history_id.moving_violations_traffic_convictions_last_3Years_details}></Table>
                </>
              )
}

const GetAccidents = ({current_user}) => {

        const columns = useMemo(
                () => [
                  {
                    // first group - TV Show
                    Header: "Accidents",
                    // First group columns
                    columns: [
                        {
                        Header: "Type",
                        accessor: "accident_type",
                        },
                        {
                        Header: "State",
                        accessor: "state",
                        },
                        {
                        Header: "Commercial Vehicle",
                        accessor: "were_you_in_commercial_vechicle",
                        },
                        {
                        Header: "At Fault",
                        accessor: "were_you_at_fault",
                        },
                        {
                        Header: "Ticketed",
                        accessor: "ever_ticketed",
                        },
                        {
                        Header: "Date",
                        accessor: "accident_date",
                        },
                    ],
                  },
                ],
                []
              );

              return (
                <>
                <Table columns={columns} data={current_user.user.user_work_school_conviction_violation_unemployment_history_id.accidents_with_any_vechicle_in_last_5years_details}></Table>
                </>
              )
}


export default DashboardView