import Tag from '../components/Tag'
import Dropdown from '../components/Dropdown'
import { useOutletContext, useParams, Navigate } from 'react-router-dom'
import styled from 'styled-components'
import Slideshow from '../components/Slideshow'

const InfosContainer = styled.div`
	display: flex;
	@media screen and (max-width: 768px) {
		flex-wrap: wrap;
	}
`

const StyledDiv = styled.div`
	display: inline-flex;
	flex-wrap: wrap;
	vertical-align: top;
	height: fit-content;
	&:last-of-type {
		flex-shrink: 0;
	}
	@media screen and (max-width: 768px) {
		max-width: 100%;
		min-width: 100%;
		& p {
			width: 50%;
		}
	}
`

const Location = styled.p`
	min-width: 100%;
`

const Host = styled.p`
	width: 100%;
	text-align: end;
	@media screen and (max-width: 768px) {
		order: 2;
	}
`

const Name = styled.span`
	display: inline-block;
	width: min-content;
	height: 52px;
	margin: 4px 10px;
	text-align: end;
	vertical-align: top;
	@media screen and (max-width: 768px) {
		font-size: 12px;
		line-height: 16px;
		margin: 16px 10px;
		height: 32px;
	}
`

const StyledProfilePic = styled.img`
	background: #e3e3e3;
	border-radius: 50%;
	height: 64px;
	width: 64px;
	margin-right: 3px;
	@media screen and (max-width: 1200px) {
		height: 50px;
		width: 50px;
	}
	@media screen and (max-width: 768px) {
		height: 32px;
		width: 32px;
		margin-top: 16px;
	}
`

const Rating = styled.p`
	width: 100%;
	text-align: end;
	@media screen and (max-width: 768px) {
		text-align: left;
	}
`

const StyledSpan = styled.span`
	&.material-symbols-outlined {
		font-size: 30px;
		line-height: 30px;
		padding: 16px 2px;
		color: ${(props) =>
			props.isGrey ? `#E3E3E3;` : `var(--primary-color)`};
		@media screen and (max-width: 1200px) {
			font-size: 22px;
			line-height: 22px;
		}
		@media screen and (max-width: 768px) {
			padding: 25px 2px;
			font-size: 15px;
			line-height: 15px;
		}
	}
`

const DetailsContainer = styled.div`
	display: flex;
	gap: 5vw;
	margin-top: 24px;
	@media screen and (max-width: 768px) {
		flex-wrap: wrap;
		gap: 0;
	}
`

function Accommodation() {
	const { accId } = useParams()
	const [accList] = useOutletContext()
	const currentAcc = accList.find((acc) => acc.id === accId)
	const range = [1, 2, 3, 4, 5]

	return currentAcc === undefined ? (
		<Navigate to={'/error'} />
	) : (
		<main>
			<Slideshow pictures={currentAcc.pictures} />
			<InfosContainer>
				<StyledDiv>
					<h1>{currentAcc.title}</h1>
					<Location>{currentAcc.location}</Location>
					{currentAcc.tags.map((tag) => (
						<Tag key={tag} value={tag} />
					))}
				</StyledDiv>
				<StyledDiv>
					<Host>
						<Name>{currentAcc.host.name}</Name>
						<StyledProfilePic
							src={currentAcc.host.picture}
							alt="Photo de l'hôte"
						/>
					</Host>

					<Rating>
						{range.map((rate) =>
							currentAcc.rating >= rate ? (
								<StyledSpan
									key={rate}
									className="material-symbols-outlined"
								>
									star
								</StyledSpan>
							) : (
								<StyledSpan
									key={rate}
									className="material-symbols-outlined"
									isGrey
								>
									star
								</StyledSpan>
							)
						)}
					</Rating>
				</StyledDiv>
			</InfosContainer>

			<DetailsContainer>
				<Dropdown
					content={currentAcc.description}
					title="Description"
				/>
				<Dropdown content={currentAcc.equipments} title="Équipements" />
			</DetailsContainer>
		</main>
	)
}

export default Accommodation
