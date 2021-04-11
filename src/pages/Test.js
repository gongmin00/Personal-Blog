import React from "react"
import contentfulAction from "../redux/contentfulAction"
import {connect} from "react-redux"


const Test =props=>{

    function getAllData (){
        props.dispatch(contentfulAction)
        console.log("I did click")
    }
    return (
        <div>
            <button onClick={getAllData}>get all data</button>
            <input type="button" value="click me"/>
        </div>
    )
}
// const mapStateToProps =state=>{
//     return{
//         allData:state.allData
//     }
// }

export default connect(

)(Test)