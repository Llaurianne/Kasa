import { createGlobalStyle } from 'styled-components'

const Style = createGlobalStyle`
	:root {
		--primary-color: #ff6060;
		--secondary-color: #f7f7f7;
		--radius: 10px;
	}
	body {
		position: relative;
		min-height: calc(100vh - 249px);
	}
	*, ::before, ::after {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		font-family: 'Montserrat', sans-serif;
		font-size: 18px;
		color: var(--primary-color);
		list-style: none;
	}
	main {
		margin: 0 100px;
		padding-bottom: 43px;
	}
	footer * {
		color: white;
	}
	h1 {
		font-size: 36px;
		margin-bottom: 14px;
		font-weight: normal;
	}
	a {
		text-decoration: none;
	}
	li, p {
		line-height:26px;
	}
	
	.rounded {
		border-radius: var(--radius);
	}
	.colored, .colored span:not(.material-symbols-outlined) {
		background-color: var(--primary-color);
		color: white;
	}
	.grey {
		background-color: var(--secondary-color);
		color: var(--primary-color)
	}
	.material-symbols-outlined {
		line-height: 26px;
		vertical-align: bottom;
		font-size: 50px;
		color: white;
		font-variation-settings: 'FILL' 1,
		'wght' 400,
		'GRAD' 0,
		'opsz' 48
	}

	@media screen and (max-width: 1200px) {
		main {
			margin: 0 60px;
			padding-bottom: 32px;
		}
		h1 {
			font-size: 24px;
		}
	}

	@media screen and (max-width: 768px) {
		*, ::before, ::after {
			font-size: 14px;
		}
		main {
			margin: 0 20px;
			padding-bottom: 21px;
		}
		h1 {
			font-size: 18px;
			margin-bottom: 0;
		}
	}
`

export function GlobalStyle() {
	return <Style />
}
