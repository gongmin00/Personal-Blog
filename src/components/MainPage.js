import React from "react"
import {} from "../style/main.scss"

const MainPage = ()=>{
    return(
        <div>
            <p>Hello, I am Min Gong</p>
            <img className="main-background" src={require('../../public/image/main_background.jpg')} alt="main_background"/>
        </div>
    )
}

export default MainPage