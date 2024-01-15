import React, { Component } from 'react'
import Subject from './Subject';

export class Userclass extends Component {
    constructor(props) {
        //we pass props into the super to allow us to access props using this keyword inside the 
        //constructor
        super(props);
        this.state = {
            count1:0,
            count2:2
        }
        console.log(this.props.name+"constructor");
    }
    componentDidMount(){
        console.log(this.props.name+"componentDidMount");
    }
  render() {
    console.log(this.props.name + "render")
    return (
      <div>
        <h2>-- Name : {this.props.name} --</h2>
        <h1>Count1 : {this.state.count1}</h1>
        <button
        onClick={()=>{
            this.setState({
                ...this.state,
                count1:this.state.count1+1
            })
        }}
        >Count Increase</button>
        <h1>Count2 : {this.state.count2}</h1>
        <button
         onClick={()=>{
            this.setState({
                count2:this.state.count2+1
            })
        }}>Count Increase</button>
        <Subject/>
      </div>
    )
  }
}

export default Userclass