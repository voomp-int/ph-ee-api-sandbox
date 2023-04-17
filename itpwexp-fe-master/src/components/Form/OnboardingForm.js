import React from 'react'
import Disclaimer from './Disclaimer'
import { Container, FormLabel, LoginContainer, MainContentContainer } from '../StyledElements/GenericStyledElements'
import { useState } from 'react'
import Requirement from './Requirement'
import FormSection1 from './FormSection1'
import FormSection2 from './FormSection2'
import FormSection3 from './FormSection3'
import FormSection4 from './FormSection4'
import FormSection5 from './FormSection5'
import FormSection6 from './FormSection6'
import FormSection7 from './FormSection7'
import { HeaderProgressBar, HeaderProgressBarBg, HeaderProgressContainer, MainFormContainer, MainFormHeaderContainer, SubHeader, TopHeader } from '../StyledElements/DisclaimerStyledElements'
import HEADER from '../../assets/header.png'
import { AddressText, HeaderText } from '../StyledElements/FormSectionStyledElements'

const OnboardingForm = () => {
    const [progress, setProgress] = useState(0)
    const [disclaimer, setDisclaimer] = useState(true)
    const [gotoRequirement, setgotoRequirement] = useState(false)
    const [form, setgotoForm] = useState(false)
    const [section2, setSection2] = useState(false)
    const [section3, setSection3] = useState(false)
    const [section4, setSection4] = useState(false)
    const [section5, setSection5] = useState(false)
    const [section6, setSection6] = useState(false)
    const [section7, setSection7] = useState(false)
    const [section8, setSection8] = useState(false)
    const [userid, setUserId] = useState("")

    const onClickDisclaimerNext = () => {
        setgotoRequirement(true)
        setDisclaimer(false)
    }

    const onClickRequirementNext = () => {
        setgotoForm(true)
        setgotoRequirement(false)
    }

    const onClickRequirementBack = () => {
        setgotoRequirement(false)
        setDisclaimer(true)
    }

    const handleGoBackSection1 = () => {
        setgotoRequirement(true)
        setgotoForm(false)
    }

    const handleGoNextSection1 = (id) => {
        setUserId(id)
        setSection2(true)
        setgotoForm(false)
        handleProgressBar(1)
    }

    const handleGoBackSection2 = () => {
        setgotoForm(true)
        setSection2(false)
        handleProgressBar(0)
    }

    const handleGoNextSection2 = () => {
        setSection2(false)
        setSection3(true)
        handleProgressBar(2)
    }

    const handleGoBackSection3 = () => {
        setSection2(true)
        setSection3(false)
        handleProgressBar(2)
    }

    const handleGoNextSection3 = () => {
        setSection4(true)
        setSection3(false)
        handleProgressBar(3)
    }

    const handleGoBackSection4 = () => {
        setSection3(true)
        setSection4(false)
        handleProgressBar(3)
    }

    const handleGoNextSection4 = () => {
        setSection5(true)
        setSection4(false)
        handleProgressBar(4)
    }

    const handleGoBackSection5 = () => {
        setSection4(true)
        setSection5(false)
        handleProgressBar(4)
    }

    const handleGoNextSection5 = () => {
        setSection6(true)
        setSection5(false)
        handleProgressBar(5)
    }

    const handleGoBackSection6 = () => {
        setSection5(true)
        setSection6(false)
        handleProgressBar(5)
    }

    const handleGoNextSection6 = () => {
        setSection7(true)
        setSection6(false)
        handleProgressBar(6)
    }

    const handleGoBackSection7 = () => {
        setSection6(true)
        setSection7(false)
        handleProgressBar(6)
    }

    const handleGoNextSection7 = () => {
        setSection8(true)
        setSection7(false)
        handleProgressBar(7)
    }


    const handleProgressBar = (section) => {
        var current = (section * 38)
        setProgress(current)
    }

  return (
    <LoginContainer>
        <Container>
            <>
                <MainFormHeaderContainer>
                    <TopHeader src={HEADER}/>
                </MainFormHeaderContainer>
            
                <HeaderProgressContainer>
                    <HeaderText size='18px' color='white'>Progress:</HeaderText>
                    <HeaderProgressBar>
                        <HeaderProgressBarBg progress={progress}>
                        {
                            progress != 0 &&
                            <HeaderText color='#00DD65'>{(Math.ceil(progress*2/13)) + "%"}</HeaderText>
                        }
                        </HeaderProgressBarBg>
                    </HeaderProgressBar>
                </HeaderProgressContainer>
            </>
            {
                disclaimer && 
                <Disclaimer onClickNext={onClickDisclaimerNext}/>
            }
            {
                gotoRequirement &&
                <Requirement onClickBack={onClickRequirementBack} onClickNext={onClickRequirementNext}/>
            }
            {
                form &&
                <FormSection1 handleNext={handleGoNextSection1} handleBack = {handleGoBackSection1}/>
            }
            {
                section2 &&
                <FormSection2 user_id={userid} handleNext={handleGoNextSection2} handleBack = {handleGoBackSection2}/>
            }
            {
                section3 &&
                <FormSection3 handleNext={handleGoNextSection3} handleBack = {handleGoBackSection3}/>
            }
            {
                section4 &&
                <FormSection4 handleNext={handleGoNextSection4} handleBack = {handleGoBackSection4} />
            }
            {
                section5 &&
                <FormSection5  handleNext={handleGoNextSection5} handleBack = {handleGoBackSection5}/>
            }
            {
                section6 &&
                <FormSection6  handleNext={handleGoNextSection6} handleBack = {handleGoBackSection6}/>
            }
            {
                section7 &&
                <FormSection7 handleNext={handleGoNextSection7} handleBack = {handleGoBackSection7} />
            }
            {
                section8 &&
                <FormSection7/>
            }
               
        </Container>
    </LoginContainer>
  )
}

export default OnboardingForm