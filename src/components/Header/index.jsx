import { Outlet , Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from './../../utils/style/color'
const StyledLink = styled(Link)`
    padding: 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
     ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`
function Header() {
    return (
<>
        <nav>
            <StyledLink  to="/">Accueil</StyledLink >
            <StyledLink  to="/survey/1">Questionnaire</StyledLink >
            <StyledLink  to="/profils">Profils</StyledLink >
          {/*  <StyledLink to="/survey/1" $isFullLink>
                Faire le test
            </StyledLink>*/}
        </nav>
    <Outlet />
</>

    )
}

export default Header;