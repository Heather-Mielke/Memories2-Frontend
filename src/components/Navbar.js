import React, {useEffect, useState} from  'react'
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
 import Photos from './photos/Photos'
import { useLocation } from 'react-router-dom'

  const Navbar = () => {
   const [query, setQuery] = useState('')
    const location = useLocation()
    const path = location.pathname
    const [display, setDisplay] = useState( path !== "/discover" ? false : true)
    
    useEffect(()=>{

    }, [])

      return(
       
        <>
        <NavbarContainer>
        <LogoContainer>
              <Link to='/'><Logo className='logo' onClick={()=> setDisplay(false)}>Image</Logo></Link>
         </LogoContainer>
         {display ? 
        <SearchContainer>
        <BsSearch/>
        <SearchBar 
        placeholder='Search' 
        className='text-2xl' 
        onChange={e => setQuery(e.target.value)}/>
        </SearchContainer>
        :
        ''    
         }
        <IconsContainer>
            <Link to='/discover' className='flex ' onClick={()=> setDisplay(true)}><Discover>Discover</Discover></Link>
            <Link to='/newpost' onClick={()=> setDisplay(false)}><Plus><AiOutlinePlus/></Plus></Link>
         </IconsContainer>
        
    </NavbarContainer>
    {display ? 
    <Photos 
    query={query} 
    display={display} 
    setDisplay={setDisplay}/>
    :
    ''
    }
    </>
  
      )
  }

  export default Navbar