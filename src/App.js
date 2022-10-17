import './App.css';
import React from 'react';

class Professores extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      cursos: []
    };
    this.updateProfs();
  }
  updateProfs()
  {
    fetch('cursos.json',
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
        console.log(this.state.cursos);
        this.setState({cursos: contents.Cursos});
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
        <h1>CURSOS IFSC-SJ</h1>
        <ol>
          {this.state.cursos.map((curso) => (
            <li key={curso.ID}>{curso.nome}</li>
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
