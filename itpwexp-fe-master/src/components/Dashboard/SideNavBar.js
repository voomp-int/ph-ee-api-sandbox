import React, { useState } from 'react';
import { Animated } from 'react-animated-css';
import './SideBar.css';

const SideNavBar = ({isOpen}) => {

      return (
        <Animated animationIn='fadeInUp' animationOut='fadeInDown' isVisible={!isOpen}>
            <div className="sidebar-container">
                <nav className= {isOpen ? "sidebar-open": "sidebar-closed" }>
                   
                </nav>
            </div>
        </Animated>
      );
      
}

export default SideNavBar