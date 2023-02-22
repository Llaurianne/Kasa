import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../assets/logo.svg'

// CSS
const HomeLogo = styled.img`
	height: 36px;
	filter: brightness(5) saturate(0%);
	margin: 37px 0 32px;
`

const StyledFooter = styled.footer`
	position: absolute;
	bottom: -209px;
	left: 0;
	right: 0;
	height: 209px;
	width: 100vw;
	padding: 29px;
	background-color: black;
	color: white;
	text-align: center;
`

// Component
function Footer() {
	return (
		<StyledFooter>
			{/* Using the React Router navigation */}
			<Link to="/">
				<HomeLogo src={logo} />
			</Link>
			<p>© 2020 Kasa. All rights reserved</p>
		</StyledFooter>
	)
}

export default Footer
