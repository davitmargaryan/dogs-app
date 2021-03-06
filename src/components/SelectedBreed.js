import React from "react";
import { connect } from "react-redux";

class SelectedBreed extends React.Component {
  render() {
    const { breed } = this.props;
    const { type, value } = breed;
    return (
      <div style={{ flex: 3 }}>
        {!type && <div>Please select a breed from the list</div>}
        {type && (
          <div>
            selected {type} - {value}
          </div>
        )}
      </div>
    );
  }
}

const սթեյթիցՎերցրուԴիրՓրոփսիՄեջ = (allState) => ({
  breed: allState.selectedBreed,
});

export default connect(սթեյթիցՎերցրուԴիրՓրոփսիՄեջ)(SelectedBreed);
