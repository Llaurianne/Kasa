import Footer from '../components/Footer'
import Header from '../components/Header'
import { GlobalStyle } from '../utils/style/GlobalStyle'
import { Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const Loader = styled.div`
	padding: 100px;
	margin: 20vh auto;
	border: 10px solid var(--primary-color);
	border-bottom-color: transparent;
	border-radius: 50%;
	animation: ${rotate} 1s infinite linear;
	height: 0;
	width: 0;
`

export default function RootLayout() {
	// acc = accommodations
	const [accList, setAccList] = useState([])
	const [error, setError] = useState(false)
	const [isDataLoading, setDataLoading] = useState(true)

	useEffect(() => {
		async function fetchAcc() {
			try {
				const response = await fetch(`/datas/logements.json`)
				const accList = await response.json()
				setAccList(accList)
			} catch (err) {
				console.log('===== error =====', err)
				setError(true)
			} finally {
				setDataLoading(false)
			}
		}
		fetchAcc()
	}, [])

	if (error) {
		return <div>Une erreur s'est produite</div>
	}

	return (
		<>
			<GlobalStyle />
			<Header />
			{isDataLoading ? <Loader /> : <Outlet context={[accList]} />}
			<Footer />
		</>
	)
}
