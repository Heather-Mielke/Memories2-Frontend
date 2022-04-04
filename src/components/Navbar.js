import React, {useEffect} from  'react'
import { Link } from "react-router-dom"
import { 
  NavbarContainer,
  Logo, 
  LogoContainer, 
  IconsContainer, 
  Plus,
  Discover
 } from './NavbarStyles'
 import { AiOutlinePlus } from 'react-icons/ai'

import { useLocation } from 'react-router-dom'

  const Navbar = () => {
  
    const location = useLocation()
 

    useEffect(()=>{
    }, [location.key])

      return(
       
        <>
        <NavbarContainer>
        <LogoContainer>
              <Link to='/'><Logo className='logo' >Image</Logo></Link>
         </LogoContainer>
         {/* {display ? 
        <SearchContainer>
        <BsSearch/>
        <SearchBar 
        placeholder='Search' 
        className='text-2xl' 
        onChange={e => setQuery(e.target.value)}/>
        </SearchContainer>
        :
        ''    
         } */}
        <IconsContainer>
            <Link to='/discover' className='flex ' ><Discover>Discover</Discover></Link>
            <Link to='/newpost' ><Plus><AiOutlinePlus/></Plus></Link>
         </IconsContainer>
        
    </NavbarContainer>
    {/* {display ? 
    <Photos 
    query={query} 
    display={display} 
    setDisplay={setDisplay}/>
    :
    ''
    } */}
 
    </>
  
      )
  }

  export default Navbar