import { Component } from "react";
import { Link } from "react-router-dom";

class ClassComponent extends Component{
    constructor(){
        super();
        this.state={
            name:"harshita"
        }
    }
    componentDidMount() {
        setTimeout(() => {
          this.setState({name: "Sneha"})
        }, 1000)
      }

      componentDidUpdate(){
        setTimeout(() => {
            alert("DATA UPDATE")
          })
      }
      componentWillUnmount(){
        console.log("unmount");
      }
    render(){
        return(
        <>
        <h1>{this.state.name}</h1>
        <Link to="/">Redirect</Link>
        </>
          
        )
    }
}
export default ClassComponent;