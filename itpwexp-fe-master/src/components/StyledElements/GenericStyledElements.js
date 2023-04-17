import styled from "styled-components"
// import motion from 'framer-motion'
import DatePicker from "react-date-picker"

export const FormButton = styled.button`
    height: 44px;
    max-width: 220px;
    min-width: 170px;
    background-color: ${({color})  => color };
    text-decoration: none;
    color: white;
    border-radius: 10px;
    border: none;
    font-size: large;
    cursor: pointer;
    font-weight: bold;
    opacity: ${({isDisabled})  => isDisabled ? '0.5' : '1'};
    transition: all 0.2s ease-in-out;
    pointer-events: ${({isDisabled})  => isDisabled ? 'none' : 'all'};
    &:hover {
        transition: all 0.2s ease-in-out;
        transform: scale(1.1);
    }
`

export const Container = styled.div`
    width: 60vw;
    display: flex;
    position: absolute;
    flex-direction: column;
    align-items: center;
`

export const FooterButtonContainer = styled.div`
    height: 10vh;  
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 0.2s ease-in-out;
    width: 80%;
    background-color: white;

     @media screen and (max-width: 1000px) {
       display: none;
        transition: all 0.2s ease-in-out;
    }
`

export const Divider = styled.div`
    padding: 1em;
`

export const LoginContainer = styled.div`
    height: 100vh;  
    width: 100vw;
    position: relative;
    display: flex;
    justify-content: center;
`

export const FormInput = styled.input`
    width: ${({widthGiven, width})=> widthGiven ? width : "100%"};
    height: 54px;
    padding: 12px 20px;
    margin: 8px 0;
    border:  ${({isError})=> isError ? "red 1px solid" : "none"};;
    border-radius: 10px;
    background-color: ${({ color }) => color};
    margin-bottom: ${({marginGiven, margin})=> marginGiven ? margin : "40px"};
    margin-left: ${({marginGiven, margin})=> marginGiven ? margin : "0px"};
    margin-right: ${({marginGiven, margin})=> marginGiven ? margin : "0px"};
    transition: all 0.2 ease-in-out;
    @media screen and (max-width: 1000px) {
        width: 225px;
        transition: all 0.2s ease-in-out;
    }
`

export const FormInputArea = styled.textarea`
    width: ${({width}) => width};
    height: 104px;
    padding: 12px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 10px;
    background-color: ${({ color }) => color};
    margin-bottom: 40px;
    transition: all 0.2 ease-in-out;
    @media screen and (max-width: 1000px) {
        width: 225px;
        transition: all 0.2s ease-in-out;
    }
`

export const FormLabel = styled.label`
    font-size: ${({isError})  => isError ? 'small' : 'larger'};
    color: ${({ isError, color }) => isError ? 'red' : color};
    text-align: start;
    background-color: white;

`

export const EmptyCardTitle = styled.label`
    font-size: large;
    font-weight: bold;
    color: lightgray;
    text-align: center;
    width: 335px;
`

export const NoCourseImage = styled.img`
    width: 100px;
    height: 100px;
    object-fit: contain;
    vertical-align: auto;
    margin-bottom: 30px;
    opacity: 0.4;
`

export const EmptyCardTitleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 400px;
    width: 100%;
    flex-direction: column;
    background-color: ${({ dark }) => dark ? "black" : "white" };
`

export const FormContent = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius:20px;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const FormInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-color: white;
`

export const MainContentContainer = styled.div`
    /* min-height: 100vh; */
    padding-top: 2%;
    /* padding: 0; */
    width: ${({width}) => width};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    transition: all 0.2s ease-in-out;
    position: absolute;
    top: 0;
    /* bottom:0; */
    left: 18vw;
    height: 100vh;
    background-color: ${({ dark }) => dark ? "" : "white" };
    /* background: none; */
    border-left:  ${({ dark }) => dark ? "0.2px solid white" : "0.2px solid rgba(0,0,0,0.28)" } ;
`

export const SectionCard = styled.div`
    background-color: ${({ dark }) => dark ? "#1B2327" : "#F8FAFB" };
    margin-top: 20px;
    border: none;
    border-radius: 20px;
    width: 362px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-height: 400px;
`

export const ModalContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    z-index: 10;
    opacity: 1;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ModalWrapper = styled.div`
    width: 100%;
    max-width: 60vw;
    position: fixed;
    border-radius: 20px;
    height: 80vh;
    background: #DFC3E6;
    transition: all 0.2s ease-in-out;
    @media screen and (max-width: 1000px) {
        height: 75vh;
        transition: all 0.2s ease-in-out;
    }
`

export const SucessModalWrapper = styled.div`
    width: 100%;
    max-width: 30vw;
    position: fixed;
    border-radius: 20px;
    height: 40vh;
    background: ${({ success }) => success ? '#C3E5D1' : '#E5C3C3'};
    transition: all 0.2s ease-in-out;
    @media screen and (max-width: 1000px) {
        height: 24vh;
        transition: all 0.2s ease-in-out;
    }
`

export const SucessModalContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    /* padding: 1.5rem; */
`

export const ModalImage = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
    vertical-align: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-animation: scaleInOut 2.0s infinite ease-in-out;
    animation: scaleInOut 2.0s infinite ease-in-out;
    @keyframes scaleInOut {
    0%, 100% {
        transform: scale(0.8);
        -webkit-transform: scale(0.8);
    }
    50% {
        transform: scale(1.0);
        -webkit-transform: scale(1.0);
    }
}
`

export const ModalDescription = styled.h1`
    font-size: 1.5rem;
    font-weight: bolder;
    color: white;
    margin-top: 2%;
    @media screen and (max-width: 1000px) {
       font-size: 1em;
    }
`

export const SucessModalContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`


export const MenuContainer = styled.div`
    width: ${({width}) => width};
    height: ${({heightGiven, height}) => heightGiven ? height : "54px"};
    // padding: 12px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 10px;
    background-color: ${({ color }) => color};
    //margin-bottom: 40px;
    transition: all 0.2 ease-in-out;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    @media screen and (max-width: 1000px) {
        width: 225px;
        transition: all 0.2s ease-in-out;
    }
`

export const CaretMenuItem = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 10px;
    background:  ${({bg}) => bg};;
    border-radius: 20px;
    padding: 0.5rem;
    transition: background 300ms;
`

export const ItemIcon = styled.img`
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: ${({bg}) => bg};;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: filter 300ms;
    &:hover {
        filter: brightness(1.2);
    }
`

export const Dropdown = styled.div`
    position: relative;
    top: 25px;
    background-color: #EBF3F5;
    border-radius: 20px;
    padding: 0.3rem;
    overflow: hidden;
    z-index: 10;
`

export const DropMenuItem = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 20px;
    padding: 0.5rem;
    color: black;
    background: white;
    transition: background 300ms;
    &:hover {
        background-color: #C3E5D1;
    }
`

export const ModalBackgroundWrapper = styled.div`   
    position: absolute;
    background-color: rgba(0,0,0,0.9);
    display: flex;
    width: 100vw;
    /* height: 100vh; */
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    max-height: 100%;
    min-height: 100%;
`

export const ModalContentContainer = styled.div`
    width: 50vw;
    min-height: 50vh; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: #F28482;
    border-radius: 20px;
    /* padding: 50px; */
`

export const ModalContent = styled.div`
    display: flex;
    width: 70vw;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    /* background-color: #F28482; */
    border-radius: 20px;
    padding: 10px;
    /* height: 100%; */
`


export const CDatePicker = styled(DatePicker)`
    width: 100%;
    height: 50px;
    margin-top: 10px;
    border: none;
    border-radius: 20px;
    background-color: ${({ color }) => color};
    margin-bottom: 40px;
    transition: all 0.2 ease-in-out;
    @media screen and (max-width: 1000px) {
        width: 80%;
        transition: all 0.2s ease-in-out;
    }
`

export const LoaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 40%;
    left: 35%;
    width: 200px;
    background: none;
    z-index: 100;
`

export const LoaderWrapper = styled.div`

  border: 10px solid #f3f3f3;
  border-top: 10px solid #3498db;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: spin 1s linear infinite;
  
  background: none;
  

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  } 

`