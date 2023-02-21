import styled from 'styled-components'
import { useOutletContext } from 'react-router-dom'
import Card from '../components/Card'
import Banner from '../components/Banner'

const CardsGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 50px 60px;
	padding: 50px;
	margin: 43px 0 0;
	@media screen and (max-width: 1200px) {
		gap: 30px 40px;
		padding: 30px;
	}
	@media screen and (max-width: 992px) {
		grid-template-columns: 1fr 1fr;
		padding: 40px;
	}
	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr;
		padding: 0;
		background-color: transparent;
		margin: 22px 0 0;
	}
`

function Home() {
	const [accList] = useOutletContext()

	return (
		<main>
			<Banner page={'Home'} message={'Chez vous, partout et ailleurs'} />
			<CardsGrid className="rounded grey">
				{accList.map((acc) => (
					<Card
						key={acc.id}
						title={acc.title}
						cover={acc.cover}
						id={acc.id}
					/>
				))}
			</CardsGrid>
		</main>
	)
}

export default Home
