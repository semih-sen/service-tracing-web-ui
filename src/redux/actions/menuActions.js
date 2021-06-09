import * as actionTypes from "./actionTypes";

export function changeMenu(menu) {
  return { type: actionTypes.CHANGE_MENU, payload: menu };
}

export function getMenusSuccess(menus) {
  return { type: actionTypes.GET_MENUS_SUCCESS, payload: menus };
}

export function getMenus() {
  return function (dispatch) {
      let url="http://88.245.183.109:90/api/v1/menu";
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getMenusSuccess(result)));
  };
}
