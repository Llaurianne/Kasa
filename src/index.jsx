// import packages and components
import React from 'react'
import ReactDOM from 'react-dom/client'
import RoutesProvider from './routing'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
	<React.StrictMode>
		<RoutesProvider />
	</React.StrictMode>
)
