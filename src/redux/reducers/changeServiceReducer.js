import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function changeServiceReducer(state = initialState.currentService,action) {
  switch (action.type) {
    case actionTypes.CHANGE_SERVICE:
      return action.payload;

    default:
      return state;
  }
}
