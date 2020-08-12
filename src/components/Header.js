import React, { Fragment } from "react"
import "../style/nav.scss"
import { SearchIcon, LogoIcon } from "./FontIcon"
import { Link, useStaticQuery, graphql } from "gatsby"



const Header = () => {

    const data = useStaticQuery(graphql`
    query {
        allContentfulBlogtag{
            edges {
                node{
                    slug
                    title
                    tagOrder
                }
            }
        }
    }

`)
    const navBar = data.allContentfulBlogtag.edges
        .sort((a, b) => a.node.tagOrder - b.node.tagOrder)
        .map(edge => {
            const tagSlug = edge.node.slug
            const tagTitle = edge.node.title
            return (
                <Link to={tagSlug}><input className="nav-item" type="button" value={tagTitle} /></Link>
            )
        })


    // const navBar = (window.innerWidth < 500) ? (<HamMenu menuSize={30} menuColor={"#fff"}/>) : (
    //         <div className="nav-bar">
    //             <Link to="/"><input className="nav-item" type="button" value="Home" /></Link>
    //             <Link to="about"><input className="nav-item" type="button" value="About" /></Link>
    //             <Link to="porfolios"><input className="nav-item" type="button" value="Portfolios" /></Link>
    //             <Link to="blog"><input className="nav-item" type="button" value="Blog" /></Link>
    //             <Link to="contact"><input className="nav-item" type="button" value="Contact" /></Link>
    //         </div>
    // )

    return (
        <Fragment>
            <div className="nav">
                <LogoIcon logoSize={200} />
                <div className="search-container">
                    <input className="search-bar" />
                    <button className="search-button">
                        <i>
                            <SearchIcon searchSize={15} searchColor="black" />
                        </i>
                    </button>
                </div>

            </div>
            <div className="nav-bar">
                {navBar}
            </div>
        </Fragment>

    )
    // if (window.innerWidth < 400) {
    //     return (
    //         <HamMenu />
    //     )
    // }
    // else {
    //     return (
    //             <div className="nav">
    //                 <div className="nav-bar">
    //                     <input className="nav-item" type="button" value="Home" />
    //                     <input className="nav-item" type="button" value="About" />
    //                     <input className="nav-item" type="button" value="Portfolios" />
    //                     <input className="nav-item" type="button" value="Blog" />
    //                     <input className="nav-item" type="button" value="Contact" />
    //                 </div>
    //             </div>

    //     )
    // }

}
export default Header