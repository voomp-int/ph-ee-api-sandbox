import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    width: 98vw;
    height: 98vh;
    border-radius: 20px;
    overflow: hidden;
`

export const DashboardContainer = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    z-index: 1;
`

export const DashboardWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
`

export const MenuImage = styled.img`
    width: 54px;
    height: 54px;
    object-fit: contain;
    vertical-align: auto;
    position: absolute;
    top: 10px;
    left: 15px;
    padding: 10px;
    font-size: 20px;
    background: transparent;
    border: none;
    color: #000;
    z-index: 10;
    transition: all 0.2s ease-in-out;
`

export const LeftPanel = styled.div`
    width: ${({width})=> width};
    height: 100%;
    border: 0.5px #7EB6EA solid;
    border-radius:20px;
    background: white;
    overflow-y: scroll;

`

export const FormSectionTopWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: none;
    padding-bottom: 10px;
`

export const SectionTopWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: none;
    margin-left: 64px;
    margin-top: 10px;
    position: fixed;
`

export const FormSectionHeaderItem = styled.div`
    max-width: 200px;
    height: 54px;
    padding: 10px;
    border-radius: 10px;
    background: none;
    border: ${({isSelected})=> isSelected ? "#7EB6EA solid 2px" : "none"};
    display: flex;
    align-items: center;
    justify-content: center; 
    color: #7EB6EA;
`

export const SectionItem = styled.div`
    max-width: 200px;
    height: 44px;
    padding: 10px;
    border-radius: 20px;
    background: ${({isSelected})=> isSelected ? "#7EB6EA" : "none"};
    display: flex;
    align-items: center;
    justify-content: center; 
    color: ${({isSelected})=> isSelected ? "white" : "#7EB6EA"}
`

export const RightPanel = styled.div`
    width: ${({width})=> width};
    height: 100%;
    border-radius: 20px;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

`

export const RemindersContainer = styled.div`
    width: 100%;
    height: 51%;
    background: white;
    border-radius:20px;
    display:flex;
    flex-direction: column;
    justify-content:flex-start;
    align-items: center;
    overflow-y: hidden;
`

export const SearchContainer = styled.div`
    width: 100%;
    height: 51%;
    background: white;
    border-radius:20px;
    display:flex;
    flex-direction: column;
    justify-content:flex-start;
    align-items: center;
    overflow-y: hidden;
`

export const Wrapper = styled.div`
    width: 100%;
    height: 51%;
    background: white;
    border-radius:20px;
    display:flex;
    flex-direction: column;
    justify-content:flex-start;
    align-items: center;
    margin-top: ${({margin})=> margin};
`


export const WorkListContainer = styled.div`
    width: 100%;
    height: 48%;
    background: white;
    border-radius:20px;
    display:flex;
    flex-direction: column;
    justify-content:flex-start;
    align-items: center;
    overflow-y: scroll;
`

export const SectionHeader = styled.div`
    min-width: ${({width})=> width};
    max-height: ${({height})=> height};
    min-height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #7EB6EA;
    border-radius: 20px;
    position: fixed;
    float: right;
    transition: all 0.2 ease-in-out;
    margin-top: 2px;
    flex-direction: column;
`
export const SectionHeaderTitle = styled.div`
    width: 100%;
    color: white;
    background: none;
    display: flex;
    justify-content: space-between;
    align-content: center;
`

export const SectionHeaderTitleText = styled.p`
    font-size: 1.3rem;
    color: white;
    background: none;
    margin-top:  ${({margin})  => margin};
    margin-left: 10px;
`

export const HomeWrapperContainer = styled.div`
    width: 100%;
    height: 100%;
    background: white;
    display: flex;
    flex-direction: column;
`
export const DahsboardUserInfoContainer = styled.div`
    width: 97%;
    max-height: 40%;
    padding-top: 64px;
    padding-left: 16px;
    display: flex;
    background: none;
    // margin-bottom: -20px;
`
export const InfoCard =  styled.div`
    width:  ${({widthGiven, width})  => widthGiven ? width :"65%"} ;
    margin: 10px;
    background: ${({color})  => color};
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    margin-left: ${({margin})  => margin};
    padding: 16px;
    // align-items: flex-start;
`
export const InfoContactCard =  styled.div`
    width: 35%;
    // height: 100%;
    margin: 10px;
    background: #EBF3F5;
    border-radius: 20px;
    padding: 16px;
`

export const RowContainer = styled.div`
    display: flex;
    background: ${({isSelected, color})  => isSelected ? "#C3E5D1" : color};
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 5px;
    margin-bottom: 5px;
    width: 95%;
    height: 54px;
    border-radius: 20px;
    transition: all 0.2 ease-in-out;
    padding-left: 5px;
`

export const WorkListHeader = styled.div`
    width: 95%;
    display: flex;
    background: #7EB6EA;
    margin-bottom: 10px;
`

export const WorkListColumn = styled.p`
    width:  ${({width})  => width};
    background: ${({bg})  => bg};
    font-weight: ${({weight})  => weight};
    color: ${({textC})  => textC};
    border-radius: 20px; 
    display: flex;
    height: 100%;
    align-items: center;
    font-size: ${({size})  => size};
`

export const SectionTitle = styled.p`
    width: 100%;
    font-size: 1.6em;
    font-weight: bold;
    background: none;
    top: -28px;
    position: relative;
`

export const InfoContainer = styled.div`
    width: 100%;  
    display: flex;
    background: none;
`

export const InfoLabel = styled.p`
    width: 100%;
    font-size: 1.1em;
    font-weight: bold;
    background: none;
    color: #2455A8;

`

export const HighlightInfo = styled.p`
    width: 50%;
    font-size: 1.1em;
    background: none;
`

export const NameTitle = styled.p`
    width: 100%;
    font-size: 1.2em;
    font-weight: bold;
    background: none;
    
    color: #7EB6EA;
    @media screen and (max-width: 800px) {
        font-size: 0.6em;
        transition: all 0.2s ease-in-out;
     }

`

export const LabelIcon = styled.img`
    width: 24px;
    height: 24px;
    background: none;
    margin-right: 20px;
`

export const LabelConatiner = styled.div`
    width: 100%;
    display: flex;
    background: none;
    

    @media screen and (max-width: 800px) {
        font-size: 0.6em;
        transition: all 0.2s ease-in-out;
     }

`

export const FormBorderContainer = styled.div`
    border: solid 1px gray;
    width: 100%;
    background: none;
    border-radius: 20px;
    position:relative;


`

export const NotesContainer = styled.div`
    width: 100%;
    background: none;
    border-radius: 20px;
    height: 100px;
`

export const NotesSectionHeaderItem = styled.div`
    max-width: 200px;
    height: 44px;
    padding: 10px;
    border-radius: 20px;
    background: ${({isSelected})=> isSelected ? "#7EB6EA" : "none"};
    display: flex;
    align-items: center;
    justify-content: center; 
    color:  ${({isSelected})=> !isSelected ? "#7EB6EA" : "white"};
    cursor: pointer;
`


export const NotesWrapper = styled.div` 
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 20px;
`

