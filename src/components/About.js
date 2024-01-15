import Userclass from './Userclass'

import React, { Component } from 'react'

export class About extends Component {
  constructor(props) {
    super(props);

    console.log("parent constructor")
  }

  componentDidMount(){
    console.log("parent componentDidMount")
  }

  render() {
    console.log("Parent render")
    return (
      <div>
        <h1>
            About Us Page !
        </h1>
        <Userclass name={"child1"}/>
        <Userclass name={"child2"}/>
        <Userclass name={"child3"}/>
    </div>
    )
  }
}

export default About