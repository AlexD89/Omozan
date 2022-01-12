import React from "react";


class Searchbar extends React.Component {
    constructor(props){
        super(props);
        this.state = ({
            dep: "",
            title: ""
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.dep)
        console.log(this.state.title)
    }

    render(){
        return(
            <div className="search-bar">
                <form onSubmit={this.handleSubmit}>
                    <select 
                        onChange={e=>this.setState({dep: e.currentTarget.value})}
                        defaultValue={"all"}>
                        <option value="all">All</option>
                        <option value="electronics">Electronics</option>
                        <option value="computers">Computers</option>
                        <option value="furniture">Furniture</option>
                        <option value="bed_bath">Bed {"&"} Bath</option>
                        <option value="cellphones">Cellphones</option>
                        <option value="pet_supplies">Pet Supplies</option>
                        <option value="kitchen">Kitchen</option>
                    </select>
                    <input
                        onChange={e=>this.setState({title: e.currentTarget.value})} 
                        type="text"/>
                    <input type="image" src={window.glassIconURL} alt="search-image" />
                </form>
            </div>
        )
    }
}

export default Searchbar;