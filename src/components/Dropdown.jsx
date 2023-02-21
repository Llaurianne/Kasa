import { useState } from 'react'
import styled from 'styled-components'

const DropdownContainer = styled.div`
	flex: 1;
	margin: 0 auto 31px;
	height: ${(props) => (props.state ? 'auto' : 'fit-content')};
	${(props) =>
		props.variation &&
		`width: 71%;
		border-radius: 5px;
		`};
	@media screen and (max-width: 768px) {
		min-width: 100%;
		margin: 0 auto 20px;
	}
`

const Name = styled.p`
	display: flex;
	justify-content: space-between;
	padding: 13px 20px;
	${(props) =>
		props.variation &&
		`padding: 10.5px 20px;
		border-radius: 5px;
			& span:first-of-type {
			font-size : 24px;
			}
		`}
	& .material-symbols-outlined {
		&:hover {
			cursor: pointer;
		}
		&.open {
			transform: rotate(180deg);
			transition: all 400ms;
		}
	}
	@media screen and (max-width: 768px) {
		padding: 1.5px 11px;
		border-radius: 5px;
		& span {
			font-size: 13px;
		}
		& .material-symbols-outlined {
			font-size: 30px;
		}
		${(props) =>
			props.variation &&
			`
			& span:first-of-type {
			font-size : 13px;
			}
		`}
	}
`

const StyledList = styled.ul`
	padding: 30px 20px;
	@media screen and (max-width: 768px) {
		padding: 17px 11px;
		& * {
			font-size: 12px;
			line-height: 17px;
		}
	}
`

function Dropdown({ content, title, variation }) {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<DropdownContainer
			className={`${!variation && 'rounded'} grey`}
			state={isOpen}
			variation={variation}
		>
			<Name
				className={`${!variation && 'rounded'} colored`}
				variation={variation}
			>
				<span>{title}</span>
				<span
					className={`material-symbols-outlined ${isOpen && 'open'}`}
					onClick={() => setIsOpen(!isOpen)}
				>
					expand_more
				</span>
			</Name>
			{isOpen && (
				<StyledList>
					{Array.isArray(content) ? (
						content.map((item) => (
							<li key={content.indexOf(item)}>{item}</li>
						))
					) : (
						<p>{content}</p>
					)}
				</StyledList>
			)}
		</DropdownContainer>
	)
}

export default Dropdown
