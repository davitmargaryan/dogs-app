import React, { useContext } from "react";
import { connect } from "react-redux";
import { ColorContext } from "../contexts/context";

import Breed from "./Breed";

const SelectedBreed = (props) => {
  const {
    breed: { type },
  } = props;
  const color = useContext(ColorContext);
  return (
    <div style={{ flex: 3 }}>
      {!type && (
        <h1 style={{ color: color }}>Please select a breed from the list</h1>
      )}
      {type && <Breed />}
    </div>
  );
};

const սթեյթիցՎերցրուԴիրՓրոփսիՄեջ = (allState) => ({
  breed: allState.selectedBreed,
});

export default connect(սթեյթիցՎերցրուԴիրՓրոփսիՄեջ)(SelectedBreed);
