//export function onCreateNOde, which is registered in Gatsby
//onCreateNode is called when a new node is created, thus, an new page created in contentful
//and allow us to do something  and here we gonna add a slug

const path = require('path')
// module.exports.onCreateNode=({node, actions})=>{
//     const {createNodeField}=actions
//     if (node.internal.type === "MarkdownRemark"){
//         const slug = path.basename(node.fileAbsolutePath, '.md')
//         createNodeField({
//             node,
//             name:"slug",
//             value:slug
//         })
//     }   
// }  
module.exports.createPages = async ({graphql, actions})=>{
    const {createPage}=actions
    const blogTemplate=path.resolve('./src/templates/blogTemplate.js')
    const res = await graphql(`
        query {
            allContentfulBlogPost{
                edges{
                    node{
                        slug
                    }
                }
            }
        }
    `)
    res.data.allContentfulBlogPost.edges.forEach(edge => {
        createPage({
            component: blogTemplate,
            //componet是上面定义的template文件的路径
            path:`/blog/${edge.node.slug}`,
            //path是dynamic page的url路径
            context:{
                slug:edge.node.slug
            }
            //context是要传入template文件的内容
        })
    });
    
}
