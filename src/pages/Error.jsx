import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ErrorContainer = styled.div`
	text-align: center;
	& a {
		text-decoration: underline;
	}
`

const ErrorNb = styled.p`
	font-size: 288px;
	line-height: 288px;
	font-weight: 700;
	margin-top: 120px;
	margin-bottom: 40px;
`

const ErrorMsg = styled.p`
	font-size: 36px;
	margin-bottom: 120px;
`

function Error() {
	return (
		<ErrorContainer>
			<ErrorNb>404</ErrorNb>
			<ErrorMsg>Oups! La page que vous demandez n'existe pas.</ErrorMsg>
			<Link to="/">Retourner à la page d'accueil</Link>
		</ErrorContainer>
	)
}

export default Error
