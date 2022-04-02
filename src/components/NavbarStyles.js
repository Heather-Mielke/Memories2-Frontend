import styled from 'styled-components'


export const NavbarContainer = styled.nav`
    width: 100%;
    background: rgb(0 0 30 / .7);
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 3px 10px rgb(200 200 200/.3);
    position:sticky;
    top: 0;
    z-index:2;
`
export const LogoContainer = styled.div`
    margin: 1vh 1vw;
    width: 20%;

`
export const Logo = styled.h1`
    font-size: 3rem;
    color: white;
    padding: 5px;
    font-family: 'Neonderthaw', cursive;
    width: 100%;

    @media (max-width: 900px) {
    font-size: 30px;
}
`
export const IconsContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: white;
    font-size: 30px;
    width: 20%;
    margin-right: 2vw;
`
export const SearchContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    font-size: 30px;
    width: 45%;
    
`
export const SearchBar = styled.input`
    width: 93%;
    padding:6px;
    background: transparent;
    display:flex;
    justify-content: flex-start;
    align-items: center;
    box-shadow: 0 3px 10px rgb( 200 200 200 /.9);
    border-radius: 30px;
    font-family: 'Abhaya Libre', serif;
`
export const Discover = styled.button`
    /* color: rgb(0 0 50); */
    font-size: 18px;
    color: white;
    margin-right: 2vw;
    margin-bottom: .5vh;
    border: none;
    padding: 5px 10px;
    border-radius: 30px;
    background-color:rgba(120, 120, 170, .6);
    box-shadow: 0 3px 10px rgb(255 255 255 /.5);
    font-family: 'Abhaya Libre', serif;
    transition: all .3s ease;

    &:hover{
        transform: scale(1.05);
        background-color:white;
        color:black;
    }

`
export const Plus = styled.button`
    font-size: 32px;
    color: white;
    border: none;
    padding: 5px;
    border-radius: 50px;
    background-color: none;
    box-shadow: 0 3px 20px rgb(255 255 255 /.5);
    font-family: 'Abhaya Libre', serif;
    transition: all .3s ease;

    &:hover{
        transform: scale(1.05);
        background-color:white;
        color:black;
    }

`