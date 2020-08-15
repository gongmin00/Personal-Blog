
const initialState = {
        allData:[]
    }
const allReducer =(state=initialState, action)=>{
    switch (action.type){
        case"GET_ALLDATA_BY_SLUG":
        return {
            ...state
        }
        case"GET_ALLDATA":
        return {
            // ...state,
            allData:action.payload
        }
        case "GET_ALLDATA_NAV":
            return {
                ...state
            }
        default:
            return state
    }
}

export default allReducer