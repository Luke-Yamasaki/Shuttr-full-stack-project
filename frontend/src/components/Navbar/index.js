import styled from 'styled-components';
import Searchbar from '../Searchbar';
import styles from './Navbar.module.css';

const NavWrapper = styled.div`
    width: 100vw;
    height: 5vh;
    background-color: #212124;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Nav = styled.nav`
    height: 4vh;
    width: 90vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const NavUl = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const
