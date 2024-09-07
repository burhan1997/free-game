import React, { ReactElement } from 'react'
import { Route, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Home from 'components/Home'

const App = (): ReactElement => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
		</Routes>
	</BrowserRouter>
)

export default App
