import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './home.css';


class Home extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            error: '',
        };

        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.dismissError = this.dismissError.bind(this);
    }

    dismissError() {
        this.setState({ error: '' });
    }


    handleUserChange(evt) {
        this.setState({
            email: evt.target.value,
        });
    };

    handlePassChange(evt) {
        this.setState({
            password: evt.target.value,
        });
    }   
        handleSubmit(evt) {
            evt.preventDefault();

            axios({
                method: 'get',
                url: 'http://localhost:8080/pacients/login',
                data: {
                  email: this.state.email,
                  password: this.state.password
                }
              });

            // axios.get('http://localhost:8080/pacients/login')
            //     .catch(function (error) {
            //         if (error.response === 200) {
            //             alert('cadastrado')
            //         } else {
            //             alert('odeio isso')
            //         }
            //     });
        }
    

    render() {
        return (
            <div className="home">
                <div className="container">
                    <section className="area-login">
                        <div className="logo"></div>
                        <form className="login" method="GET" onSubmit={this.handleSubmit} >
                            <input type="email" data-test="email" value={this.state.email}
                                onChange={this.handleUserChange} placeholder="E-mail"
                                required autoFocus autoComplete="off" />
                            <input type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange}
                                id="senha" placeholder="Senha"
                                maxLength="12" required />
                            <p><Link to="/newpacient">cadastre-se</Link></p>
                            <button type="submit" value="Entre" data-test="submit"><Link to="/schedule">Entre</Link></button>
                        </form>
                    </section>
                    <section className="feedbacks">
                        <div className="feedback">
                            <div className="feedback-img"></div>
                            <div className="feedback-text">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,Vestibulum bibendum non mauris a bibendum
                                    Quisque egestas porttitor leo.
                            </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}
export default Home;