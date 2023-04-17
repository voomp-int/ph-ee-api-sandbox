import React from 'react'
import { DisclaimerContainer, DisclaimerText, DisclaimerTextBold, DisclaimerRequiredList, NextButton, ListItem, TickImage, FooterButtonContainer, Divider } from '../StyledElements/DisclaimerStyledElements'
import Tick from '../../assets/tick.png'
import { FormSectionHeader, HeaderSectionContainer } from '../Custom/CustomFormFieldStyledElements'


const Requirement = ({onClickBack, onClickNext}) => {
  return (
    <DisclaimerContainer>

           <HeaderSectionContainer>
              <FormSectionHeader>Requirements</FormSectionHeader>
              <Divider/>
          </HeaderSectionContainer>

    
          <DisclaimerTextBold>
          To qualify with ITP Western Express Inc, you must meet the following criteria:
          </DisclaimerTextBold>
          <DisclaimerRequiredList>
          <ListItem>
            <TickImage src={Tick}/>
            <DisclaimerText>Candidates must possess a valid Class "A" CDL from their State of residence</DisclaimerText>
          </ListItem>
          <ListItem>
            <TickImage src={Tick}/>
            <DisclaimerText>Candidates with CDL license suspensions within the past 3 years for accumulations of moving traffic convictions will not be considered</DisclaimerText>
          </ListItem>
          <ListItem>
            <TickImage src={Tick}/>
            <DisclaimerText>Candidates with CDL disqualification or suspension within the past 5 years for a DUI, drug conviction, or DOT disqualification will not be considered</DisclaimerText>
          </ListItem>
          <ListItem>
            <TickImage src={Tick}/>
            <DisclaimerText>Candidates with careless or reckless driving violations in the last 5 years will not be considered</DisclaimerText>
          </ListItem>
          <ListItem>
            <TickImage src={Tick}/>
            <DisclaimerText>Any candidate with a speeding violation of 11 MPH or over the posted speed limit will not be considered</DisclaimerText>
          </ListItem>
          <ListItem>
            <TickImage src={Tick}/>
            <DisclaimerText>A CDLIS report will be secured to verify all past CDL's the driver has held and those MVR's ordered</DisclaimerText>
          </ListItem>
          <ListItem>
            <TickImage src={Tick}/>
            <DisclaimerText>Driver MVR's will also be reviewed annually</DisclaimerText>
          </ListItem>
          <ListItem>
            <TickImage src={Tick}/>
            <DisclaimerText>Preventable accidents of the following nature will automatically disqualify any candidate: Preventable rollover, Preventable jackknife, Preventable rear-end collision, and/or Preventable accident resulting in an injury or fatality</DisclaimerText>
          </ListItem>
          <ListItem>
            <TickImage src={Tick}/>
            <DisclaimerText>Candidates with unexplained or unacceptable gaps in employment will not be accepted</DisclaimerText>
          </ListItem>
          <ListItem>
            <TickImage src={Tick}/>
            <DisclaimerText>A candidate's employment verification MUST reflect a safe and responsible driver</DisclaimerText>
          </ListItem>
          <ListItem>
            <TickImage src={Tick}/>
            <DisclaimerText>Falsification of information on the application is a serious matter and will be a reason to reject a candidate</DisclaimerText>
          </ListItem>
          <ListItem>
            <TickImage src={Tick}/>
            <DisclaimerText>Candidate must be a minimum of 23 years of age or older</DisclaimerText>
          </ListItem>
          <ListItem>
            <TickImage src={Tick}/>
            <DisclaimerText>A Pre-Employment Screening report (PSP) must reflect a safe driver or the candidate will be rejected.</DisclaimerText>
          </ListItem>
          <ListItem>
            <TickImage src={Tick}/>
            <DisclaimerText>All of the above still applies to Owner Operators: Tractors cannot be more than 10 years old, Tractor must be able to pass a Annual Inspection at a ITP approved shop, and O/O's are required to carry one (1) million dollars of Non-Trucking liability showing ITP as the certificate holder</DisclaimerText>
          </ListItem>
          <ListItem>
            <TickImage src={Tick}/>
            <DisclaimerText>All candidates must have a valid DOT physical dated not more than 6 months prior to the orientation date</DisclaimerText>
          </ListItem>
          <ListItem>
            <TickImage src={Tick}/>
            <DisclaimerText>All candidates must show on their MVR that they have self-certified their CDL and latest valid DOT physical</DisclaimerText>
          </ListItem>
          </DisclaimerRequiredList>
          <FooterButtonContainer>
              <NextButton onClick={onClickBack} isBack={true}>Back</NextButton>
              <NextButton onClick={onClickNext}>Next</NextButton>
          </FooterButtonContainer>
   
        </DisclaimerContainer>
  )
}

export default Requirement