import React, { Component } from 'react';
import {Title} from './Components/Title'
import {FormularioDeBusqueda} from  './Components/FormularioDeBusqueda'

import 'bulma/css/bulma.css'
import './App.css';

class App extends Component{
state = {result: []}

_handleResults = (result) => {
  this.setState({result})
}

_renderResults(){
  const {result} = this.state

  return result.map(movie => {
      return <p key={movie.imdbID}>{movie.Title}</p>
  })
}

render(){
    return (
      <div className="App">
          <Title>Busqueda de Peliculas</Title>
      <div className="FormBusqueda-wrapper">
            <FormularioDeBusqueda onResults={this._handleResults}/>
      </div>

      {this.state.result.lenght === 0
        ? <p>-sin resultados</p>
        : this._renderResults()
      }

      </div>
    );
  }
}

export default App;
