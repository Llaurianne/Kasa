import styled from 'styled-components'
import paysage1 from '../assets/paysage1.png'
import paysage2 from '../assets/paysage2.png'

// CSS
const ImgContainer = styled.div`
	position: relative;
	height: 223px;
	border-radius: 25px;
	overflow: hidden;
	background-color: black;
	margin: 65px 0 31px;
	@media screen and (max-width: 1200px) {
		margin-top: 45px;
		height: 140px;
	}
	@media screen and (max-width: 768px) {
		margin: 20px 0 19px;
		height: 111px;
		border-radius: var(--radius);
		${(props) =>
			props.variation &&
			`height: 223px;
		`};
	}
`

const StyledImg = styled.img`
	background-color: black;
	opacity: 0.7;
	width: 100%;
	height: 100%;
	object-fit: cover;
`

const StyledText = styled.p`
	position: absolute;
	margin: auto;
	left: 0;
	right: 0;
	top: 50%;
	transform: translateY(-50%);
	text-align: center;
	color: white;
	font-size: 48px;
	@media screen and (max-width: 1200px) {
		font-size: 36px;
	}
	@media screen and (max-width: 768px) {
		font-size: 24px;
		margin: 0 16px;
	}
	@media screen and (max-width: 576px) {
		text-align: left;
	}
`

// Component
function Banner({ page, message, variation }) {
	return (
		// Variation is used to slightly change the style of the Banner (height)
		<ImgContainer variation={variation}>
			{page === 'Home' ? (
				<StyledImg src={paysage1} />
			) : (
				<StyledImg src={paysage2} />
			)}
			<StyledText>{message}</StyledText>
		</ImgContainer>
	)
}

export default Banner
