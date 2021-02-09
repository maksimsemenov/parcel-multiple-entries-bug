import React from 'react'
import ReactDOM from 'react-dom'

import './render.css'

export const renderRootComponent = (
	Component,
	rootElementId = 'react_root'
) => {
	const App = () => <Component />
	ReactDOM.render(<App />, document.getElementById(rootElementId))
}
