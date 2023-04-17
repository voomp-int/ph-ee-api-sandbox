import React from 'react'
import { LoaderWrapper, LoaderContainer } from '../StyledElements/GenericStyledElements'
import { InfoLabel } from '../StyledElements/DashboardStyledElemets'

const Loader = () => {
  return (
    <LoaderContainer>
        <LoaderWrapper/> 
        <InfoLabel>Loading ...</InfoLabel>  
    </LoaderContainer>
   
  )
}

export default Loader
