import React, { Component } from 'react'
import PropType from 'prop-types'
import {Movie} from './Movie'

export class MovieList extends Component{

    static propType  = {
        movies: PropType.array
    }

    render(){
        const {movies} = this.props

        return (
            <div className='MovieList'>
                {
                 movies.map(movie => {
                     return (
                         <div key={movie.imdbID} className='MovieList-Item'>
                             <Movie 
                             title={movie.Title}
                             year={movie.Year}
                             poster={movie.Poster}/>
                        </div>
                     )
                 }

                 )   
                }
            </div>
        );
    }

}


