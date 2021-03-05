import React from "react";
import { connect } from "react-redux";
import { SET_CAROUSEL_IMAGES_ACTION_TYPE } from "../redux/reducer";
import A from "./A";
import Loader from "./Loader";

class Header extends React.Component {
  state = {
    isLoading: false,
    error: "",
  };

  async getRandomImages() {
    this.setState({
      isLoading: true,
    });
    try {
      const { images } = this.state;
      const fetchArr = [];
      for (let i = 0; i < 5; i++) {
        fetchArr.push(fetch("https://dog.ceo/api/breeds/image/random"));
      }
    //   fetchArr -> [promise(fetch), promise(fetch), promise(fetch)]
      const responses = await Promise.all(fetchArr);
    //   responses -> [response, response, response]
      const data = await Promise.all(responses.map(response => response.json()))
      //   responses.map(response => response.json()) -> [promise(response), promise(response), promise(response)]
      // data -> [data, data, data]
    this.props.dispatch({
        type: SET_CAROUSEL_IMAGES_ACTION_TYPE,
        payload: data.map(d => d.message)
    })
    } catch (e) {
      this.setState({
        error: e.message,
      });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  }

  componentDidMount() {
    this.getRandomImages();
  }

  render() {
    const { isLoading, error, images } = this.state;
    if (error) {
      return <div>{error}</div>;
    }
    return <>{isLoading ? <Loader /> : <A/>}</>;
  }
}

export default connect()(Header);
