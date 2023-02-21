import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../assets/logo.svg'

const HomeLogo = styled.img`
	height: 62px;
	@media screen and (max-width: 1200px) {
		height: 52px;
	}
	@media screen and (max-width: 768px) {
		height: 43px;
	}
`

const NavContainer = styled.nav`
	height: 66px;
	margin: 40px 100px 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	@media screen and (max-width: 1200px) {
		height: 55px;
		margin: 30px 60px 0;
	}
	@media screen and (max-width: 768px) {
		height: 43px;
		margin: 20px;
	}
`

const StyledLink = styled(NavLink)`
	color: #ff6060;
	margin-left: 57px;
	font-size: 24px;
	&.active {
		text-decoration: underline;
	}
	@media screen and (max-width: 1200px) {
		font-size: 18px;
	}
	@media screen and (max-width: 768px) {
		font-size: 12px;
		text-transform: uppercase;
		margin-left: 15px;
	}
`

function Header() {
	return (
		<NavContainer>
			<Link to="/">
				<HomeLogo src={logo} />
			</Link>
			<div>
				<StyledLink
					to="/"
					className={({ isActive }) => (isActive ? 'active' : '')}
				>
					Accueil
				</StyledLink>
				<StyledLink
					to="about"
					className={({ isActive }) => (isActive ? 'active' : '')}
				>
					A propos
				</StyledLink>
			</div>
		</NavContainer>
	)
}

export default Header
