import React, { Component } from 'react';

import {SidebarContainer,
        Icon,
        CloseIcon, 
        SidebarWrapper, 
        SidebarMenu, 
        SidebarLink, 
        SidebarRoute, 
        SideBtnWrap 
    } from './SidebarElements';


class Sidebar extends Component {

    render() {
        return (
            <SidebarContainer isOpen={this.props.isOpen } onClick={() => this.props.toggle(false)}>
            <Icon onClick={() => this.props.toggle(false)} >
              <CloseIcon />
            </Icon>
            <SidebarWrapper >  
              <SidebarMenu >
                <SidebarLink  to='about' onClick={() => this.props.toggle(false)} >About</SidebarLink>
                <SidebarLink to='discover' onClick={() => this.props.toggle(false)} >Services</SidebarLink>
                <SidebarLink to='services' onClick={() => this.props.toggle(false)} >Products</SidebarLink>
                <SidebarLink to='signup' onClick={() => this.props.toggle(false)} >markets</SidebarLink>
              </SidebarMenu>
              <SideBtnWrap>
                <SidebarRoute to='/signin'>Sign in</SidebarRoute>
              </SideBtnWrap>
            </SidebarWrapper>
          </SidebarContainer>
        );
    }
}

export default Sidebar;
