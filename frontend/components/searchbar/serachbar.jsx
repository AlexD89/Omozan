import React from "react";


class Searchbar extends React.Component {

    render(){
        return(
            <div className="search-bar">
                <input type="search" placeholder="Search Bar"/>
                <input type="image" src={window.splashLogoURL} alt="search-image" />
            </div>
        )
    }
}

export default Searchbar;