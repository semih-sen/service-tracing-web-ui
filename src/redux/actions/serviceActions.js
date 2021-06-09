import * as actionTypes from "./actionTypes";

export function getServicesSuccess(services) {
  return { type: actionTypes.GET_SERVICES_SUCCESS, payload: services };
}

export function changeService(service) {
  return { type: actionTypes.CHANGE_SERVICE, payload: service }
}

export function getServices() {
  return function (dispatch) {
    
    let url = "http://88.245.183.109:90/api/v1/service";
    return fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Authorization":
          "Bearer: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtYWlsIjoiYnVyYWsubXVzdHVAZ21haWwuY29tIiwibmFtZSI6IkJ1cmFrIE11xZ90dSIsInJvbGUiOiJNYW5hZ2VyIiwiaWF0IjoxNjIyNjY1NTExLCJleHAiOjE2NTU1MDQ3MzJ9.5ul6p8f8LpWrWEG7BNNe0_jBNyhWEraVGSs9N3pPswM",
      },
    })
      .then((response) => response.json())
      .then((result) => dispatch(getServicesSuccess(result.data)));
  };
}
