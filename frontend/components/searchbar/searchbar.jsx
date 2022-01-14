import React from "react";
import { withRouter } from "react-router-dom";


class Searchbar extends React.Component {
    constructor(props){
        super(props);
        this.state = ({
            dep: "all",
            title: ""
        })
    }

    componentDidUpdate(oldProps){
        // if (oldProps.location.pathname != "/search/s") { 
            // oldProps.location.search != this.props.location.search){
        if (oldProps.location.pathname != this.props.location.pathname) { 
                this.setState({title: ""})
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {dep, title} = this.state;
        if (dep === 'all' && title.length === 0){
            this.props.history.push('/')
        } else {
            this.props.history.push(`/search/s?dep=${dep}&title=${title}`)
        }
    }

    render(){
        return(
            <div className="search-bar">
                <form onSubmit={this.handleSubmit}>
                    <input type="hidden" name="authenticity_token" value="<%= form_authenticity_token %>"></input>
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
                        value={this.state.title}
                        onChange={e=>this.setState({title: e.currentTarget.value})} 
                        type="text"/>
                    <input type="image" src={window.glassIconURL} alt="search-image" />
                </form>
            </div>
        )
    }
}

export default withRouter(Searchbar);