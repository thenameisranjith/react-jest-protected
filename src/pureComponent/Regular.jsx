import React, { Component } from 'react'

export class Regular extends Component {
    render() {
        console.log("Regular COMPONENT")

        return (
            <div>Regular {this.props.name}</div>
        )
    }
}

export default Regular