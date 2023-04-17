import styled from "styled-components";

export const DisclaimerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 5%;
    min-height: 60vh;
    background: white;
    justify-content: space-between;
    border-radius: 20px;
    margin-bottom: 40px;
    
`

export const MainFormHeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 25px;
    border-radius: 20px;
    background: white;
`

export const SubHeader = styled.p`
    font-size: 1.2rem;
    background: white;
    margin-top: 10px;
`


export const TopHeader = styled.img`
    object-fit: contain;
    vertical-align: auto;
    background: white;
    width: 100%;
    border-radius: 20px;
    scale: 0.8;
    
`
export const HeaderProgressContainer = styled.div`
    display: flex; 
    transition: all 0.2s ease-in-out;
    height: 44px;
    min-width: 600px; 
    border-radius: 24px;
    margin-bottom: 25px;
    z-index: 1;
    background: white;
    justify-content: flex-end;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        scale: 1.2;
    }
`
export const HeaderProgressBar = styled.div`
    display: flex; 
    width: 500px; 
    transition: all 0.2s ease-in-out;
    height: 40px;
    border-radius: 24px;
    z-index: 1;
    margin-right: 3px;
`
export const HeaderProgressBarBg = styled.div`
    display: flex; 
    width: ${({progress})  => progress + 'px' }; 
    transition: all 0.2s ease-in-out;
    height: 40px;
    justify-content: flex-end;
    align-items: center;
    border-radius: 20px;
    background: #00DD65;
    z-index: 10;
`

export const MainFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: white;
    justify-content: center;
    border-radius:20px;
    min-height: 250px;
    margin-bottom: 40px;
`

export const DisclaimerText = styled.div`
    background: white;
    text-align: justify;
`

export const Divider = styled.div`
    background-color: #7EB6EA;
    height: .5px;
    width: 100%;
    margin: 10px;
`


export const DisclaimerTextBold = styled.div`
    font-weight: 800;
    background: white;
`

export const DisclaimerRequiredList = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    justify-content: flex-start;
    margin-top: 20px;
`

export const ListItem = styled.div`
    display: flex;
    justify-content: flex-start;
    background: white;
    margin: 3px;
`
export const TickImage = styled.img`
    width: 24px;
    height: 24px;
    object-fit: contain;
    vertical-align: auto;
    background: white;
    margin-right: 5px;
`


export const NextButton = styled.button`
    min-height: 44px;
    min-width: 130px;
    background-color: #7EB6EA;
    text-decoration: none;
    color: white;
    border-radius: 10px;
    border: none;
    font-size: large;
    cursor: pointer;
    font-weight: bold;
    opacity: ${({isBack})  => isBack ? '0.5' : '1'};
    transition: all 0.2s ease-in-out;
    pointer-events: all;
    &:hover {
        transition: all 0.2s ease-in-out;
        transform: scale(1.1);
    }
     margin: ${({marginGiven, margin})=> marginGiven ? margin : "0px"};
`

export const FooterButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: white;
    padding: 10px;
`