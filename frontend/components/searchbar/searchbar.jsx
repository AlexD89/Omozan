import React from "react";
import { withRouter } from "react-router-dom";


class Searchbar extends React.Component {
    constructor(props){
        super(props);
        this.state = ({
            dep: "all",
            title: "",
            allTitles: JSON.parse(window.localStorage.getItem('titles'))
        })
        this.dropdown = [];
    }

    componentDidMount(){
        if(!window.localStorage.getItem('titles')){
            $.ajax({ url: `/api/searches/?titles=true` }).then(res => {
                window.localStorage.setItem('titles', JSON.stringify(res))
            })
        }
    }

    componentDidUpdate(oldProps, oldState){
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

    buildDropdown = (str) => {
        const titles = [];
        if (str === '') return [];
        for(let i = 0; i < this.state.allTitles.length-1; i++){
            if(titles.length === 5) break;
            if(this.state.allTitles[i].toLowerCase().includes(str.toLowerCase())) {
                titles.push(this.state.allTitles[i])
            }
        }
        return titles;
    }

    handleChangeTitle = e => {
        this.setState({ title: e.currentTarget.value });
        this.dropdown = this.buildDropdown(e.currentTarget.value);
    }

    titleShortener = title => {
        return title.slice(0,100);
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
                    <div className="search-field">
                        <input
                            onSelect={e => {
                               if (this.state.title.length > 0) $('.dropdown').removeClass('hidden')
                            }}
                            onBlur={() => window.setTimeout(() => $('.dropdown').addClass('hidden'),200)}
                            value={this.state.title}
                            onChange={this.handleChangeTitle} 
                            type="text"/>
                        <ul className="dropdown hidden">
                            {this.dropdown.map((title, i) => (
                                <li 
                                    key={i}
                                    onClick={e => this.props.history.push(`/search/s?dep=all&title=${title}`)} 
                                    className='dropdown-item'>{this.titleShortener(title)}</li>
                            ))}
                        </ul>
                    </div>
                    <input type="image" src={window.glassIconURL} alt="search-image" />
                </form>
            </div>
        )
    }
}

export default withRouter(Searchbar);