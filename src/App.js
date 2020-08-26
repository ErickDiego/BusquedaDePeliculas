import React, { Component } from 'react';
import {Title} from './Components/Title'
import {FormularioDeBusqueda} from  './Components/FormularioDeBusqueda'

import 'bulma/css/bulma.css'
import './App.css';
import { MovieList } from './Components/MovieList';

class App extends Component{
  state = {usedSearch:false, result: []}

  _handleResults = (result) => {
    this.setState({result, usedSearch:true})
  }

  _renderResults(){
    return this.state.result.lenght === 0
      ? <p>sin resultados</p>
      : <MovieList movies={this.state.result} />
    
  }
    render(){
        return (
          <div className="App">
              <Title>Busqueda de Peliculas</Title>
          <div className="FormBusqueda-wrapper">
                <FormularioDeBusqueda onResults={this._handleResults}/>
          </div>
          
          {this.state.usedSearch
          ? this._renderResults()
          : <small>Utiliza el buscador de Peliculas</small> }
          </div>
        );
      }
}

export default App;
