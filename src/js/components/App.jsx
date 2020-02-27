import React from 'react'
import content from 'services/content'

export default class App extends React.Component {
    render() {
        return (
            <div id='content'>{content}</div>
        )
    }
}
