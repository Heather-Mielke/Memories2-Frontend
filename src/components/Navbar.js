import React from  'react'
import { Link } from "react-router-dom"
import { 
  NavbarContainer,
  Logo, 
  LogoContainer, 
  IconsContainer, 
  Plus,
  Discover, 
  SearchBar,
  SearchContainer } from './NavbarStyles'
 import { AiOutlinePlus } from 'react-icons/ai'
 import { BsSearch } from 'react-icons/bs'

  const Navbar = () => {
      return(
        <NavbarContainer>
        <LogoContainer>
              <Link to='/'><Logo className='logo'>PictureIt</Logo></Link>
         </LogoContainer>
        <SearchContainer>
        <BsSearch/>
        <SearchBar/>
        </SearchContainer>
        <IconsContainer>
            <Link to='/discover' className='flex '><Discover>Discover</Discover></Link>
            <Link to='/newpost'><Plus><AiOutlinePlus/></Plus></Link>
         </IconsContainer>
        
    </NavbarContainer>
      )
  }

  export default Navbar