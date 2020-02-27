import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

const renderApp = () => {
    ReactDOM.render(
        React.createElement(App),
        document.getElementById('root')
    )
}

renderApp()
