import React from 'react'
import { DisclaimerContainer, DisclaimerText, DisclaimerTextBold, DisclaimerRequiredList, NextButton, ListItem, TickImage, Divider } from '../StyledElements/DisclaimerStyledElements'
import Tick from '../../assets/tick.png'
import { FormSectionHeader, HeaderSectionContainer } from '../Custom/CustomFormFieldStyledElements'
const Disclaimer = ({onClickNext}) => {
  return (
    <DisclaimerContainer>
          <HeaderSectionContainer>
              <FormSectionHeader>Disclaimer</FormSectionHeader>
              <Divider></Divider>
          </HeaderSectionContainer>

        <DisclaimerText>
          Thank you for your interest in a driving career with ITP Western Express Inc. To qualify for a
          driving position please complete our online form for employment. Incomplete information will delay the
          processing of your form.
        </DisclaimerText>
        <DisclaimerTextBold>
        To fill out this form, you will need to know the following
        </DisclaimerTextBold>
        <DisclaimerRequiredList>
        <ListItem>
          <TickImage src={Tick}/>
          <DisclaimerText>Social Security Number</DisclaimerText>
        </ListItem>
        <ListItem>
          <TickImage src={Tick}/>
          <DisclaimerText>Home address history for the past 3 years</DisclaimerText>
        </ListItem>
        <ListItem>
          <TickImage src={Tick}/>
          <DisclaimerText>Current driver license number and driver license history for the past 3 years</DisclaimerText>
        </ListItem>
        <ListItem>
          <TickImage src={Tick}/>
          <DisclaimerText>Employment history up to 10 years</DisclaimerText>
        </ListItem>
        <ListItem>
          <TickImage src={Tick}/>
          <DisclaimerText>History of traffic accidents, violations and/or convictions from the last 3 years (including DUI or reckless driving conviction and license suspension)</DisclaimerText>
        </ListItem>
        <ListItem>
          <TickImage src={Tick}/>
          <DisclaimerText>Military history (if applicable)</DisclaimerText>
        </ListItem>
        </DisclaimerRequiredList>
        <DisclaimerText>
        Required entry fields are followed by *, meaning you must provide the requested information to continue. If you encounter any errors during this process and cannot continue, please contact us at xxxxxxxxxx.
        </DisclaimerText>
        <NextButton onClick={() => onClickNext()}>Next</NextButton>
    </DisclaimerContainer>
  )
}







export default Disclaimer