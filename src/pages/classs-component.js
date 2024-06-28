import React from "react";
import { Layout } from "../conmponents";
import { getAuth, onAuthStateChanged } from "firebase/auth";
class ClassComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      color: "red",
      bgColor: "yellow",
    };
  }

  componentDidMount() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
      } else {
        console.log("login false");
      }
    });
  }

  updateBgColor = () => {
    this.setState({ bgColor: "gray" });
  };
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
