import './Main.css';
import React from 'react';
import Movies from '../components/MovieList.js';
import MovieList from '../components/MovieList.js';

class Main extends React.Component
{
    state=
    {
        movies:[]
    }
    componentDidMount()
    {
        fetch('https://www.omdbapi.com/?apikey=d8a1597e&s=bad')
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search}));
    }
    render()
    {
        return(
            <div className='main'>
                <div className='wrap'>
                <MovieList movies={this.state.movies}/>
                </div>
            </div>
        )
    }
}
export default Main;