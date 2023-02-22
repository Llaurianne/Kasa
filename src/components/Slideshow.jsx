import styled from 'styled-components'
import { useState } from 'react'

// CSS
const ImgContainer = styled.div`
	position: relative;
	height: 415px;
	border-radius: 25px;
	overflow: hidden;
	background-color: black;
	margin: 25px 0 30px;
	@media screen and (max-width: 1200px) {
		height: 335px;
		margin-bottom: 22px;
	}
	@media screen and (max-width: 768px) {
		height: 255px;
		margin-bottom: 15px;
		border-radius: var(--radius);
	}
`

const StyledImg = styled.img`
	background-color: black;
	width: 100%;
	height: 100%;
	object-fit: cover;
`

const Arrow = styled.span`
	position: absolute;
	top: calc(50% - 10px);
	color: white;
	line-height: 20px;
	&.big {
		font-size: 10vw;
	}
	&.right {
		right: -2vw;
		transform: rotate(90deg);
	}
	&.left {
		left: -2vw;
		transform: rotate(-90deg);
	}
	&:hover {
		cursor: pointer;
	}
`

const Number = styled.span`
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	bottom: 25px;
	color: white;
	@media screen and (max-width: 768px) {
		display: none;
	}
`

// Component
function Slideshow({ pictures }) {
	// Storage of the displayed picture number in the state
	const [actualPic, setActualPic] = useState(pictures[0])

	return (
		<ImgContainer>
			{/* Display arrows and number only if there are more than 1 picture */}
			{pictures.length > 1 && (
				<>
					<Arrow
						className="material-symbols-outlined big left"
						// Change the state on click (go to previous picture)
						onClick={() =>
							pictures.indexOf(actualPic) === 0
								? setActualPic(pictures[pictures.length - 1])
								: setActualPic(
										pictures[
											pictures.indexOf(actualPic) - 1
										]
								  )
						}
					>
						expand_less
					</Arrow>
					<Arrow
						className="material-symbols-outlined big right"
						// Change the state on click (go to next picture)
						onClick={() =>
							pictures.indexOf(actualPic) + 1 === pictures.length
								? setActualPic(pictures[0])
								: setActualPic(
										pictures[
											pictures.indexOf(actualPic) + 1
										]
								  )
						}
					>
						expand_less
					</Arrow>
					<Number>
						{`${pictures.indexOf(actualPic) + 1} / ${
							pictures.length
						}`}
					</Number>
				</>
			)}

			<StyledImg src={actualPic} />
		</ImgContainer>
	)
}

export default Slideshow
