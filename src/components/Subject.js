import React, { Component } from 'react'

export class Subject extends Component {
    constructor(props) {
        super(props);

        console.log("subject constructor")
    }

    componentDidMount() {
        console.log("subject componentDidMount")
    }

    render() {
        console.log("subject render")
        return (
            <div>Subject</div>
        )
    }
}

export default Subject