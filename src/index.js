import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component. This component should produce
// some HTML
const App = function(){
    return <div>Hi!!</div>;
}

// Take This component's generated HTML and put is
// on the page (in the DOM)
ReactDOM.render(App);