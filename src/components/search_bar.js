import React, {Component} from 'react';

/* Function component
const SearchBar =()=>{
    return <input />;
};
*/

//class component by extends React.Component we give it all accessibilities to what react component has

class SearchBar extends Component{
    constructor(props){
        super(props);

        this.state = {term:''};
    }
    render(){
        return (
            <div>
                <input 
                    value={this.state.term}
                    onChange={event=> this.setState({term :event.target.value})}/>
            </div>);
    }
}

export default SearchBar;

