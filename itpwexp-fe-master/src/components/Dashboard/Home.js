import React, {useEffect, useState} from 'react'
import { DashboardContainer, DashboardWrapper, HomeContainer, LeftPanel, MenuImage, RemindersContainer, RightPanel, SearchContainer, SectionHeader, SectionHeaderTitle, SectionHeaderTitleText, WorkListColumn, WorkListContainer, WorkListHeader } from '../StyledElements/DashboardStyledElemets';
import SideNavBar from './SideNavBar';
import './SideBar.css'
import CLOSE from '../../assets/close.png'
import MENU from '../../assets/menu.png'
import Search from './Search';
import WorkList from './WorkList';
import DashboardView from './DashboardView';
import DropDownMenu from '../Custom/DropDownMenu';
import NetworkRoute from '../Utils/Network';
import Loader from '../Custom/Loader';

const section = {
  Documents: "documents",
  Log: "log",
  Home: "home"
}

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  const toggleDrawer = () => {
      setIsOpen(!isOpen);
    }
    
    const getDropDownValue = (item, value) => {
      if (item === "status") {
        console.log(value)
        setworklistStatus(value)
      }
    }

    const [currentUser, setcurrentUser] = useState()
    const [current, setcurrent] = useState({
      "_id": "642de770cbc88136c7886f1c",
      "first_name": "Anmol",
      "middle_name": "Kumar",
      "last_name": "Gupta",
      "state_province": "IN",
      "date": "04-04-2023",
      "status": "Not Assigned"
    })
    const [worklistStatus, setworklistStatus] = useState("All")

    const [workList, setworkList] = useState([
      {
        "_id": "642de770cbc88136c7886f1c",
        "first_name": "Anmol",
        "middle_name": "Kumar",
        "last_name": "Gupta",
        "state_province": "IN",
        "date": "04-04-2023",
        "status": "Not Assigned"
      },
      {
        "_id": "642e17d058e1bdf4b3d87d0c",
        "first_name": "Pratyush",
        "middle_name": "",
        "last_name": "Duklan",
        "state_province": "IN",
        "date": "04-04-2023",
        "status": "Not Assigned"
      }
    ])
  
    useEffect(() => {
      //make the API fetch call to fetch the workList
      fetchWorkList()
    }, [])

    const fetchWorkList = () => {
      const url = NetworkRoute.base + NetworkRoute.dashboard + NetworkRoute.worklist 
      console.log(url)
      setIsLoading(true)
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          // handleNext(data.user._id)
          setIsLoading(false)
          setworkList(data.all_users)
          setcurrent(data.all_users[0])
          handleSelectedWorkList(current)  
        })
        .catch((error) => {
          console.error(error);
          setIsLoading(false)
        });
    }

    const handleSelectedWorkList = (curr) => {
      setcurrent(curr)
      setIsLoading(true)
      const url = NetworkRoute.base + NetworkRoute.dashboard + NetworkRoute.worklist + "/" + curr._id
      fetch(url) 
          .then((response) => response.json())
          .then((user_data) => {
            setIsLoading(false)
             setcurrentUser(user_data)
         
          })
          .catch((error) => console.error(error));
    }

    const handleSearch = (users) => {
      setworkList(users)
      setcurrent(users)
      handleSelectedWorkList(current)

    }

    const clear = () => {
      fetchWorkList()
    }

  return (
    <> 

    <DashboardWrapper>

        {
          isLoading && 
          <Loader></Loader>
        }
        

        <DashboardContainer>
          <MenuImage src={isOpen ? CLOSE : MENU } onClick={toggleDrawer}></MenuImage>
          <HomeContainer>
            <SideNavBar isOpen={isOpen}></SideNavBar>
            <LeftPanel width={"70vw"}>
        
                <DashboardView setIsLoading={setIsLoading} current_user={currentUser} setcurrentUser={setcurrentUser} current_user_id={current._id}/>
              
            </LeftPanel>
            <RightPanel width={"30vw"}>
              <WorkListContainer>
                  <SectionHeader height={"100px"} width={isOpen ? "24%": "29%"}>
                    <SectionHeaderTitle>
                      <SectionHeaderTitleText  margin={"20px"}>Worklist</SectionHeaderTitleText>
                    
                      <DropDownMenu showValue={false} itemKey={"status"} getDropDownValue={getDropDownValue} color="#7EB6EA"  value={worklistStatus} inputName="status" inputType="text"  isDropDown={true} label="" items={["All", "Not Qualified", "Qualified"]}></DropDownMenu>
                    </SectionHeaderTitle>

                    <WorkListHeader> 
                      <WorkListColumn textC={"white"} bg={"#7EB6EA"} weight={"bold"} width={"30%"}>Date</WorkListColumn>
                      <WorkListColumn textC={"white"} bg={"#7EB6EA"} weight={"bold"} width={"45%"}>Name</WorkListColumn>
                      <WorkListColumn  textC={"white"}  bg={"#7EB6EA"} weight={"bold"} width={"15%"}>State</WorkListColumn>
                      <WorkListColumn  textC={"white"}  bg={"#7EB6EA"} weight={"bold"} width={"30%"}>Status</WorkListColumn>
                    </WorkListHeader>
                  
                  </SectionHeader>
                  <WorkList workListStatus={worklistStatus} handleSelectedWorkList={handleSelectedWorkList} current={current} workList={workList}></WorkList>
                </WorkListContainer>
              <SearchContainer>
                  <SectionHeader width={isOpen ? "24%": "29%"}>
                    <SectionHeaderTitle>
                      <SectionHeaderTitleText margin={"0px"}>Search</SectionHeaderTitleText>
                      </SectionHeaderTitle>
                    </SectionHeader>
                  <Search setIsLoading={setIsLoading} clear={clear} handle={handleSearch}></Search>
                </SearchContainer>

                {/* <RemindersContainer>
                <SectionHeader width={isOpen ? "24%": "29%"}>
                    <SectionHeaderTitle>
                      <SectionHeaderTitleText margin={"0px"}>Reminders</SectionHeaderTitleText>
                      </SectionHeaderTitle>
                </SectionHeader>
                </RemindersContainer> */}
            </RightPanel>
          </HomeContainer>
        </DashboardContainer>

    </DashboardWrapper>


    
        


    </>
   
    
  );
}

export default Home