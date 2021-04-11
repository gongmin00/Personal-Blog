
const contentful = require('contentful')

const client = contentful.createClient({
    space: `ictpuejzgz1v`,
    accessToken: `JoIS4uC2METu1y9zjXMAe0F4rAAPQ3hzeCgai1plX3M`
})
const res=client.getEntries().then(dataItem =>console.log("this is all data ::",dataItem.items))
const contentfulAction = () => {
    
        //promise里面的值没法return，只能用Then的方法传递
    return ({
        type:"GET_ALLDATA",
        payload:res
    })
    
}

export default contentfulAction