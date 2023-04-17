import styled from "styled-components";

export const AddressContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: white;
    width: 80%;
`

export const SubHealineText = styled.p`
    font-style: italic;
    flex-direction: column;
    background: white;
    font-weight:
    background-color: white;
    text-align: justify;
    width: 100%;
`

export const HeaderText = styled.p`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background: ${({color}) => color};;
    font-size: ${({size}) => size};
    text-align: justify;
    margin: 10px;
`

export const AddressText = styled.p`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: white;
    font-size: ${({size}) => size};
    text-align: justify;
    width: 80%;
    margin: 10px;
`


export const AddressExample = styled.p`
    color: red;
    font-weight: bold;
    background-color: white;
`

export const AddressTextArea = styled.textarea`
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

export const LicenseContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const LicenseCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin-top: 10px;
    margin-bottom: 25px;
    border-radius: 20px;
`

export const LicenseHeaderContainer = styled.div`
    display: flex;
    margin: 20px;
    justify-content: space-between;
`

export const IconButton = styled.img`
    width: 24px;
    height: 24px;
    object-fit: contain;
    vertical-align: auto;
    pointer: cursor;
`

export const LicenseHeader = styled.p`
    font-weight: bold;
    font-size: 1.5rem;
    color: green;
    width: 75%;
`

export const LicenseInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
`

export const LicenseInfoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
 
`

export const LicenseInfo = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 5px;
`

export const LicenseInfoTitle = styled.p`
    font-size: 20px;
    font-weight: bold;

`

export const LicenseInfoText = styled.p`
    font-size: 20px;

`

export const CheckBoxListContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    width: 80%;
`

export const CheckBoxWrapper = styled.div`
    padding: 0.2rem;
    background: white;

`

export const CheckboxInput = styled.input`
    width: 14px;
    height: 14px;
    margin-right: 5px;
    pointer-events: ${({isDisabled}) => isDisabled ? "none" : "all"};
`