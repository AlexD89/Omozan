import React from "react";

class Searchbar extends React.Component {

    render(){
        return(
            <div className="search-bar">
                <input type="search" placeholder="Search Bar"/>
                <button>Search</button>
            </div>
        )
    }
}

export default Searchbar;