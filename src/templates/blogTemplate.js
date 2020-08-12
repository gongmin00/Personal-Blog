import React from "react"
import {graphql} from "gatsby"
import {documentToReactComponents} from "@contentful/rich-text-react-renderer"
import TagTitle from "../components/TagTitle"

export const query =()=>{
    graphql`
        query ($slug:String) {
           contentfulBlogPost (slug:{eq:$slug})
            {
                title
                author
                date
                body {
                    json
                }
                image {
                    title
                    file {
                        url
                    }
                    resize {
                        src
                    }
                }
            }
        }
    `
}
//这里要另外export query 是因为如果不用useStaticQuery的话没法直接拿到query里面的data
//这里用markdownRemark是因为只需要拿到单个的markdown文件内容而不是所有的
//use dangerouslySetInnerHTML to add custimize JS to html document
const BlogTemplate =(props)=>{
    console.log("this is template page:",props)
    const options ={
        renderNode: {
            "embedded-asset-block":(node)=>{
                const url = node.data.target.fields.file["en-US"].url
                const alt = node.data.target.fields.title["en-US"]
            return <img src={url} alt={alt}/>
            }
        }
    }
    return(
        <div>
        <TagTitle title={props.data.contentfulBlogPost.title}/>
         <h1>{props.data.contentfulBlogPost.title}</h1>
         <p>{props.data.contentfulBlogPost.author}</p>
         <p>{props.data.contentfulBlogPost.date}</p>
         <img src={props.data.contentfulBlogPost.image.file.url} alt={props.data.contentfulBlogPost.image.title}/>
         {documentToReactComponents(props.data.contentfulBlogPost.body.json,options)}
        </div>
    )
}

export default BlogTemplate