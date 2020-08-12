import React from "react"
import { Link, useStaticQuery } from "gatsby"
import TagTitle from "../components/TagTitle"

const Blog = () => {
    const data = useStaticQuery(graphql`
        query{
            allContentfulBlogPost{
                edges{
                    node{
                        slug
                        title
                        author
                        date
                        body {json}
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
            }
        }
    `)
    return (
        <div>
            <TagTitle title="HomePage" />
            {data.allContentfulBlogPost.edges.map(edge => {
                // console.log(edge.node.body.json,"test in blogpage")
                return (
                    <div>
                        <Link to={`/blog/${edge.node.slug}`}><h1>{edge.node.title}</h1></Link>
                        <p>{edge.node.author}</p>
                        <p>{edge.node.date}</p>
                        <img src={edge.node.image.file.url} alt={edge.node.image.title} />
                        <Link to="https://api.instagram.com/oauth/authorize
                            ?client_id=729549517814088
                            &redirect_uri=https://bsplay.inverse.tech/
                            &scope=user_profile,user_media
                            &response_type=code"><p>instagram link</p></Link>
                    </div>
                )
            })}


        </div>
    )
}
export default Blog