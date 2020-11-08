import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar'
import { Link } from 'react-router-dom';
import ApiPacients from '../../utils/ApiPacients'
import './perfil.css'

class Perfil extends Component {

  state = {
    pacients: []
}

constructor(){
    super();
        ApiPacients.get('/').then(res => {
            console.log(res.data)
            this.setState({pacients: res.data})
        })
    }


  render() {
    return (
      <>
        <NavBar />

        <div className='perfil'>
          <div className='container-perfil'>
            <button className='new-schedule'><Link to="./perfil/altperfil">Editar</Link></button>
            <h1>Meu Perfil</h1>
            <div className='data-perfil'>
              <div className="content-data">
                <h2>Dados pessoais</h2>
                <div className="data">
                  <p>Nome: {this.state.pacients.map(pacients => <label> {pacients.name} </label>)}</p>
                </div>
              </div>
              <div className="content-data">
                <h2>Endereco</h2>
                <div className="data">
                  <p>Endereço: {this.state.pacients.map(pacients => <label> {pacients.name} </label>)} </p>
                </div>
              </div>
              <div className="content-data">
                <h2>Contato</h2>
                <div className="data">
                  <p>Telefone: {this.state.pacients.map(pacients => <label> {pacients.phone} </label>)}</p>
                  <p>E-mail: {this.state.pacients.map(pacients => <label> {pacients.email} </label>)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </>
    );
  }
}

export default Perfil;