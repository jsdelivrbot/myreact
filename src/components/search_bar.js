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
        return <input onChange={event=> console.log(event.target.value)}/>;
    }
}

export default SearchBar;

