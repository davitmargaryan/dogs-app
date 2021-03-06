import React from "react";
import { connect } from "react-redux";
import {
  GET_ALL_BREEDS_ACTION_TYPE,
  SET_SUB_BREED_ACTION_TYPE,
} from "../redux/reducer";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";

class AllBreeds extends React.Component {
  componentDidMount() {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(function (response) {
        return response.json();
      })
      .then((data) => {
        this.props.dispatch({
          type: GET_ALL_BREEDS_ACTION_TYPE,
          payload: data?.message,
        });
      })
      .catch(function () {});
  }

  onBreedClick = (e, breed) => {
    e.preventDefault();
    this.props.dispatch({
      type: SET_SUB_BREED_ACTION_TYPE,
      payload: {
        type: "Breed",
        value: breed,
      },
    });
  };

  onSubBreedClick = (e, subBreed, breed) => {
    e.preventDefault();
    this.props.dispatch({
      type: SET_SUB_BREED_ACTION_TYPE,
      payload: {
        breed,
        type: "Subbreed",
        value: subBreed,
      },
    });
  };

  render() {
    const { breeds } = this.props;
    return (
      <div style={{ flex: 1 }}>
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
        >
          {Object.keys(breeds).map((breed) => (
            <TreeItem
              key={breed}
              onLabelClick={(e) => this.onBreedClick(e, breed)}
              nodeId={breed}
              label={breed}
            >
              {breeds[breed].map((subBreed) => (
                <TreeItem
                  key={subBreed}
                  onLabelClick={(e) => this.onSubBreedClick(e, subBreed, breed)}
                  nodeId={subBreed}
                  label={subBreed}
                />
              ))}
            </TreeItem>
          ))}
        </TreeView>
      </div>
    );
  }
}

const սթեյթիցՎերցրուԴիրՓրոփսիՄեջ = (allState) => ({
  breeds: allState.allBreeds,
});

export default connect(սթեյթիցՎերցրուԴիրՓրոփսիՄեջ)(AllBreeds);
