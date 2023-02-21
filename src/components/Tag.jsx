import styled from 'styled-components'

const TagContainer = styled.div`
	display: inline-block;
	height: 25px;
	width: fit-content;
	min-width: 115px;
	text-align: center;
	margin: 20px 10px 0 0;
	padding: 0 22px;
	font-size: 14px;
	line-height: 25px;
	@media screen and (max-width: 768px) {
		font-size: 10px;
		min-width: 84px;
		padding: 0 30px;
		margin: 12px 10px 0 0;
		border-radius: 5px;
	}
`

function Tag({ value }) {
	return <TagContainer className="rounded colored">{value}</TagContainer>
}

export default Tag
