import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom'
import Home from '../pages/Home'
import Accommodation from '../pages/Accommodation'
import About from '../pages/About'
import Error from '../pages/Error'
import RootLayout from '../layouts/RootLayout'

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />}>
			<Route index element={<Home />} />
			<Route path="accommodations/:accId" element={<Accommodation />} />
			<Route path="about" element={<About />} />
			<Route path="error" element={<Error />} />
			<Route path="*" element={<Error />} />
		</Route>
	)
)

export default function RoutesProvider() {
	return <RouterProvider router={router} />
}
