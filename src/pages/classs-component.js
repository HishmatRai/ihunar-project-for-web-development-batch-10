import React from "react";
import { Layout } from "../conmponents";
class ClassComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      color: "red",
      bgColor: "yellow",
    };
  }

   updateBgColor = () =>{
   this.setState({bgColor:"gray"})
  }
  render() {
    return (
      <Layout title="Contact">
        <h1
          style={{
            color: this.state.color,
            backgroundColor: this.state.bgColor,
          }}
        >
          Class conmponent Page
        </h1>
        <button onClick={() => this.setState({ color: "green" })}>
          Change Color
        </button>
        <button onClick={this.updateBgColor}>Bg Color Change</button>
      </Layout>
    );
  }
}
export default ClassComponent;
