import { createStore } from "redux";
import { initialState } from "./initialState";

export const SET_CAROUSEL_IMAGES_ACTION_TYPE =
  "SET_CAROUSEL_IMAGES_ACTION_TYPE";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CAROUSEL_IMAGES_ACTION_TYPE: {
      return {
        ...state,
        carouselImages: action.payload,
      };
    }
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
