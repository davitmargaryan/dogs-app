import React from "react";
import "./App.css";
import Content from "./components/Content";
import Header from "./components/Header";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

 

  render() {    
    return (
      <div>
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;
