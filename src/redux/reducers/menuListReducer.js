import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";
export default function menuListReducer(state=initialState.menuList,action){
    switch (action.type) {
        case actionTypes.GET_MENUS_SUCCESS:
            return action.payload;
    
        default:
            return state;
    }

}