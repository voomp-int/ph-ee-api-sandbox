import React, { useState, useEffect } from 'react'
import CaretIcon from '../../assets/caret.png'
import {
  MenuContainer,
  DropMenuItem,
  ItemIcon,
  Dropdown,
  CaretMenuItem
} from '../StyledElements/GenericStyledElements'
import { WorkListColumn } from '../StyledElements/DashboardStyledElemets'

const DropDownMenu = ({ selectedValue,  showValue = true ,color, width, items, getDropDownValue, itemKey }) => {
  
  const [selected, setselected] = useState("")

  useEffect(() => {
    if (selectedValue) {
      setselected(selectedValue)
    }
  }, [])
  

  const menuItemTapped = (item) => {
      setselected(item)
      console.log(itemKey)
      getDropDownValue(itemKey, item)
  }

  return (
    <>
      <MenuContainer color={color} width={ width}>
        <Item bg={color} icon={CaretIcon} >
          <DropMenu menuItemTapped={menuItemTapped} items={items}/>
        </Item>
          {
            showValue &&
              <WorkListColumn>{selected}</WorkListColumn>
          }
          </MenuContainer>
      </>
  )
}

const DropMenu = (props) => {

  const MenuItem = (props_) => {
    return (
      <DropMenuItem onClick={e => { props_.menuItemTapped(props_.value) }}>
        {
          props_.value
        }
        </DropMenuItem>
    );
  }

  return (
    <>
      <Dropdown>
        {
         props.items.map(item => (
              <MenuItem value = {item} menuItemTapped={props.menuItemTapped} ></MenuItem>
          ))
        }
      </Dropdown>
    </>
  );
}

const Item = (props) => {

  const [open, setOpen] = useState(false);

  return (
    <CaretMenuItem bg={props.bg} onClick={() => setOpen(!open)}>
      <ItemIcon bg={props.bg} src={ props.icon } />
      {open && props.children}
    </CaretMenuItem>
  );
}



export default DropDownMenu;