import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

// declare variable to hold API key
const API_KEY='AIzaSyCDGK152IISgfnjEZrT6x4IhHeNkDrJObY';

// Create a new component. This component should produce
// some HTML
class App extends Component{
    constructor(props){

        super(props);
        this.state={videos:[]};
        
        YTSearch({key:API_KEY, term:'surfboard'}, (videos)=>{
            this.setState({videos});
            //this.setState({videos:videos});
        });
    }

    render(){
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
}

// Take This component's generated HTML and put is
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));