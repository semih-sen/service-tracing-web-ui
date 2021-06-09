import * as actionTypes from "./actionTypes";

export function getCompaniesSuccess(companies){
    return { type: actionTypes.GET_COMPANIES_SUCCESS, payload: companies}
}

export function getCompanies(){
    return function (dispatch) {
        let url = "http://88.245.183.109:90/api/v1/company"
        fetch(url,{
            method: "GET",
            headers: {
                "content-type": "application/json",
                "Authorization":"Bearer: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtYWlsIjoiYnVyYWsubXVzdHVAZ21haWwuY29tIiwibmFtZSI6IkJ1cmFrIE11xZ90dSIsInJvbGUiOiJNYW5hZ2VyIiwiaWF0IjoxNjIyNjY1NTExLCJleHAiOjE2NTU1MDQ3MzJ9.5ul6p8f8LpWrWEG7BNNe0_jBNyhWEraVGSs9N3pPswM"
            }
        }).then(response=>response.json()).then(result=>dispatch(getCompaniesSuccess(result)));
    }
}