import React from "react"
import Header from "../components/Header"
import {createStore} from "redux"
import {Provider} from "react-redux"
import allReducer from "../redux/allReducer"
import Test from "./Test"



const myStore = createStore(allReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default ()=>{
 
    return(
        <Provider store={myStore} >
            <Header/>
            <Test />
        </Provider>
    )
}