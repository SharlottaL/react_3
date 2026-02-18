import './Search.css';
import React from 'react';

class Search extends React.Component
{
state=
{
    search: "",
    type:"all"
}
handleKey = (event) =>
{
    if(event.key === 'Enter')
    {
        this.props.searchMovie(this.state.search, this.state.type);
    }
}
handleFilter = () =>
{
    this.setState
    (
    () => ({type:event.target.dataset.type}),
    () => this.props.searchMovie(this.state.search, this.state.type)
    )
}
render()
{
    return(
        <div className='search'>
            <input 
            type="search"
             placeholder='Поиск'
              value={this.state.search}
              onChange={(e) => this.setState({search: e.target.value})}
              onKeyDown={this.handleKey}
              />
              <button className='btn' onClick={() => this.props.searchMovie(this.state.search, this.state.type)}>
                Search
              </button>
              <div className='radio'>
                <div>
                <input type='radio' name='type' id="all"  datatype='all' checked={this.state.type ==='all'} onChange={this.handleFilter}/>
                <label for="all">All</label>
                </div>
                <div>
                <input type='radio' name='type' id="movie"  datatype='movie' checked={this.state.type ==='movie'} onChange={this.handleFilter}/>
                <label for="movie">Movie</label>
                </div>
                <div>
                <input type='radio' name='type' id="series"  datatype='series' checked={this.state.type ==='series'} onChange={this.handleFilter}/>
                <label for="series">Series</label>
                </div>
                <div>
                <input type='radio' name='type' id="game"  datatype='game' checked={this.state.type ==='game'} onChange={this.handleFilter}/>
                <label for="game">Games</label>
                </div>
                 
              </div>
        </div>
    )
}
}
export default Search;