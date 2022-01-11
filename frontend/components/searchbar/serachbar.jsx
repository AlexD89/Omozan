import React from "react";


class Searchbar extends React.Component {

    render(){
        return(
            <div className="search-bar">
                <select>
                    <option value="">All</option>
                    <option value="">Computers</option>
                    <option value="">Electronics</option>
                    <option value="">Omozone Home</option>
                    <option value="">Books</option>
                    <option value="">Movies</option>
                    <option value="">Pet Supplies</option>
                    <option value="">Home Improvment</option>
                </select>
                <input type="search" placeholder="Search Bar"/>
                <input type="image" src={window.glassIconURL} alt="search-image" />
            </div>
        )
    }
}

export default Searchbar;