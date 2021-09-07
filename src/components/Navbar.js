import React, { Component } from 'react';
import  '../css/Navbar.css'; 
import {
    //BrowserRouter as Router,
    //Switch,
    //Route,
    Link
  } from "react-router-dom";

import { Link as LinkS } from 'react-scroll'
import { FaBars } from 'react-icons/fa'
import logo from '../images/logo.jpeg';



class Navbar extends Component {
    render() {
        return (
            <>
               <div className="Nav">
                  <div className='NavContainer'>
                      <div className='NavLogo'>
                          <Link style={{color: '#fff'}} to="/">
                              <img src={logo} className='logo' />
                          </Link>
                          </div>
                        <div className='MobileIcon' onClick={() => this.props.toggle(true)}>
                            <FaBars />
                            </div> 
                        <ul className='NavMenu'>
                            <li className='NavItem'>
                               <div className='NavLinks'>
                                <LinkS to='about'>About </LinkS>
                                </div>
                            </li>
                            <li className='NavItem'>
                               <div className='NavLinks'>
                                <LinkS to='products'>Products </LinkS>
                                </div>
                            </li>
                            <li className='NavItem'>
                               <div className='NavLinks'>
                                <LinkS to='services'>Services </LinkS>
                                   
                                </div>  
                            </li>
                            <li className='NavItem'>
                               <div className='NavLinks'>
                               <LinkS to='markets'>Markets </LinkS>
                                
                                </div>
                            </li>
                        </ul>
                        <div className='NavBtn'>
                            <button className='NavBtnLink'>Play Now</button>
                        </div>
                  </div> 
                </div>   
            </>
        );
    }
} 

export default Navbar;
