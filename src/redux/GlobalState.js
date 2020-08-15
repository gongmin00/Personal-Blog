import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
const contentful = require('contentful')

const client = contentful.createClient({
    space: `ictpuejzgz1v`,
    accessToken: `JoIS4uC2METu1y9zjXMAe0F4rAAPQ3hzeCgai1plX3M`
})
const GlobalState = () => {

    const dispatch = useDispatch()

    const res = client.getEntries().then(dataItem => dispatch({ type: "GET_ALLDATA", payload: dataItem.items }))
    //promise里面的值没法return，只能用Then的方法传递

    const test = useSelector(state => state.allData)

    useEffect(() => {
        console.log("I am testing right now")
    })
    return (
        <div>
        {test.map(
            item=>{
                return (
                <div>{item.fields.title}</div>
                )
            }
        )}
        </div>
    )

}
export default GlobalState