import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

// declare variable to hold API key
const API_KEY='AIzaSyCDGK152IISgfnjEZrT6x4IhHeNkDrJObY';

YTSearch({key:API_KEY, term:'surfboard'}, function(data){
    console.log(data);
});

// Create a new component. This component should produce
// some HTML
class App extends Component{
    render(){
        return (
            <div>
                <SearchBar />
            </div>
        );
    }
}

// Take This component's generated HTML and put is
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));