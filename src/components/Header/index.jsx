import kLogo from './../../assets/k_logo.png';
import aLogo from './../../assets/a_logo.png';
import mLogo from './../../assets/m_logo.png';
import sLogo from './../../assets/s_logo.png';
import styled from 'styled-components';
import './Header.css';
import { Outlet ,NavLink } from 'react-router-dom';

const LogoImg = styled.img`
    height:40px;
    width:40px
    `
const Navlink= styled.div`
    display:flex;
    align-items: center;
    gap : 10px;

`  
const StyledLink = styled(NavLink)`
    color : #FF6060;
    text-decoration: none;
    &.active {   text-decoration: underline}
` 
const Header = ()=>{
   
    return ( <><nav>
        <div>
            <LogoImg src={kLogo} alt="K" />
            <LogoImg src={mLogo} alt="A" />
            <LogoImg src={sLogo} alt="S" />
            <LogoImg src={aLogo} alt="A" />
        </div>
     
        <Navlink>
            <StyledLink  to="/" >Accueil</StyledLink >
            <StyledLink  to="/propos">A Propos</StyledLink >
        </Navlink>
      
    
    </nav>
     <Outlet />
     </>
    )
}

export default Header;