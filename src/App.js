import './App.css';
import React from 'react';

class Professores extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      professores: []
    };
    this.updateProfs();
  }
  updateProfs()
  {
    fetch('http://docente.ifsc.edu.br/arliones.hoeller/test.json',
          {
            method: 'GET',
            cache: 'no-cache'
          })
    .then((response) =>
      {
        console.log(response);
        if (!response.ok)
        {
          throw Error('Bad network response.');
        }

        return response.json();
      })
    .then((contents) =>
      {
        console.log(contents);
        console.log(this.state.professores);
        this.setState({professores: contents});
      })
    .catch((e) =>
      {
        console.log(e);
      });
  }
  render()
  {
    return (
      <div>
        <h1>Professores</h1>
        <ol>
          {this.state.professores.map((prof) => (
            <li key={prof.id}>{prof.name}</li>
          ))}
        </ol>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Professores/>
    </div>
  );
}

export default App;
