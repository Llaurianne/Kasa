import styled from 'styled-components'
import { Link } from 'react-router-dom'

// CSS
const CardContainer = styled(Link)`
	position: relative;
	height: 340px;
	line-height: 25px;
	overflow: hidden;
	@media screen and (max-width: 1200px) {
		height: 300px;
	}
	@media screen and (max-width: 768px) {
		height: 255px;
	}
`

const CardBackground = styled.img`
	position: absolute;
	z-index: 0;
	height: 100%;
	width: 100%;
	object-fit: cover;
`

const StyledDiv = styled.div`
	position: relative;
	background: linear-gradient(
		180deg,
		rgba(255, 255, 255, 0) 0%,
		rgba(0, 0, 0, 0.5) 100%
	);
	z-index: 1;
	height: 100%;
	width: 100%;
	display: flex;
	align-items: end;
`

const StyledText = styled.p`
	width: 100%;
	padding: 20px;
	color: white;
	@media screen and (max-width: 1200px) {
		font-size: 18px;
	}
	@media screen and (max-width: 768px) {
		font-size: 18px;
		padding: 15px 20px;
	}
`

// Component
function Card({ title, cover, id }) {
	return (
		// Properties of .rounded and .colored in GlobalStyle.jsx
		<CardContainer className="rounded" to={`/accommodations/${id}`}>
			<CardBackground src={cover} alt={title} className="colored" />
			<StyledDiv>
				<StyledText>{title}</StyledText>
			</StyledDiv>
		</CardContainer>
	)
}

export default Card
