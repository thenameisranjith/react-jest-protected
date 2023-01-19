import React, { Component } from 'react'
import PureComp from './PureComp'
import Regular from "./Regular"
export class Parent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "ranjith"
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: "ranjith"
            })
        }, 4000)
    }

    render() {
        console.log("PARENT COMPONENT")
        return (
            <>
                Parent Component
                <PureComp name={this.state.name} />
                <Regular name={this.state.name} />
            </>

        )
    }
}

export default Parent