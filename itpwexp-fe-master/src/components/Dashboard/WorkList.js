import React, {useState, useEffect} from 'react'
import { RowContainer, WorkListColumn, Wrapper } from '../StyledElements/DashboardStyledElemets'

const WorkList = ({workListStatus, workList, current, handleSelectedWorkList}) => {
  const filterWorkList = (value) => {
     
     if(workListStatus === "All") {
      return true
     }
     return value.status === workListStatus
  }
  
  return (
    <>
    <Wrapper margin={"100px"}>
      { 
      workList.filter(filterWorkList).map((item, index) => {
        return <WorkListRow 
              handleSelectedWorkList={handleSelectedWorkList} 
              current={current} 
              selected={item._id === current._id} 
              ele={item}/>
      })
      }
    </Wrapper>

    </>
  );
}

const WorkListRow = ({ele, selected, handleSelectedWorkList, current}) => {

  const handleSelected = () => {
     handleSelectedWorkList(ele)
  }

  return (
    <RowContainer onClick={() => handleSelected()}  isSelected={selected}>
     <WorkListColumn size={"0.9em"} bg={selected ? "#C3E5D1" : ""} weight={""} width={"30%"}>{ele.date}</WorkListColumn>
      <WorkListColumn size={"0.9em"}  bg={selected ? "#C3E5D1" : ""} weight={""} width={"45%"}>{ele.first_name + " " + ele.last_name}</WorkListColumn>
      <WorkListColumn  size={"0.9em"}  bg={selected ? "#C3E5D1" : ""} weight={""} width={"15%"}>{ele.state_province}</WorkListColumn>
      <WorkListColumn size={"0.9em"}  bg={selected ? "#C3E5D1" : ""} weight={""} width={"30%"}>{ele.status}</WorkListColumn>   
    </RowContainer>

  );
}


export default WorkList