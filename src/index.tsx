import React from 'react'
import { createRoot } from 'react-dom/client'

const rootElement = document.getElementById('root')

if (rootElement) {
	const root = createRoot(rootElement)
	root.render(<div>Hey</div>)
} else {
	console.error('Root element not found!')
}
