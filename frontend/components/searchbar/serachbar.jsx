import React from "react";
import { withRouter } from "react-router-dom";
import { requestSearchProducts } from "../../actions/search_actions";


class Searchbar extends React.Component {
    constructor(props){
        super(props);
        this.state = ({
            dep: "all",
            title: ""
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {dep, title} = this.state;
        this.props.history.push({ 
            pathname: `/search/s`, 
            state: this.props.location.pathname, 
            search: `?dep=${dep}&title=${title}`});
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

export default withRouter(Searchbar);