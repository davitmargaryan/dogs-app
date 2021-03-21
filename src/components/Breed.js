import React from "react";
import { connect } from "react-redux";
import Masonry from "react-responsive-masonry";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

class Breed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
  }

  async getSelectedBreedImages(pathname) {
    const { breed: breedObj } = this.props;
    let { value: breedValue, breed } = breedObj;
    if (!breedValue && pathname) {
      breedValue = pathname.split("/")[2];
    }
    if (breedValue) {
      try {
        const urlPart = breed ? `${breed}/${breedValue}` : breedValue;
        const res = await fetch(`https://dog.ceo/api/breed/${urlPart}/images`);
        const data = await res.json();
        this.setState({
          images: data?.message?.slice(0, 10),
        });
      } catch (e) {}
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.breed.value !== this.props.breed.value) {
      this.getSelectedBreedImages();
    }
  }

  componentDidMount() {
    const {
      location: { pathname },
    } = this.props;

    this.getSelectedBreedImages(pathname);
  }

  render() {
    const { breed } = this.props;
    const { type, value } = breed;
    const { images } = this.state;
    return (
      <>
        {type && (
          <h1>
            selected {type} - {value}
          </h1>
        )}
        {!!images.length && (
          <>
            <Link to={breed.value ? `/selected-breed/${breed.value}` : "/"}>
              Go to {breed.value ? breed.value : 'Home'}
            </Link>
            <Masonry columnsCount={3} gutter="10px">
              {images.map((i) => (
                <img key={i} src={i} style={{ width: "100%" }} />
              ))}
            </Masonry>
          </>
        )}
      </>
    );
  }
}

const սթեյթիցՎերցրուԴիրՓրոփսիՄեջ = (allState) => ({
  breed: allState.selectedBreed,
});
export default withRouter(connect(սթեյթիցՎերցրուԴիրՓրոփսիՄեջ)(Breed));
