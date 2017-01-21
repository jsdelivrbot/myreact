import React from 'react';
import ReactDOM from 'react-dom';


import SearchBar from './components/search_bar';

// declare variable to hold API key
const API_KEY='AIzaSyCDGK152IISgfnjEZrT6x4IhHeNkDrJObY';

// Create a new component. This component should produce
// some HTML
const App =()=>{ // we use '=()=>{}'  instead of funsction(){}
    return (
        <div>
            <SearchBar />
        </div>
        );
}

// Take This component's generated HTML and put is
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));