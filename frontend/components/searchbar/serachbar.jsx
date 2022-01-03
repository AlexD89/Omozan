import React from "react";
import searchImg from "/app/assets/images/glass-icon.png"

class Searchbar extends React.Component {

    render(){
        return(
            <div className="search-bar">
                <input type="search" placeholder="Search Bar"/>
                <input type="image" src={searchImg} alt="search-image" />
            </div>
        )
    }
}

export default Searchbar;