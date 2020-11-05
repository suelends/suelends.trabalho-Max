import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.css'; 

class Home extends Component {
  render() {
    return (
        <div className= "home">
            <div className="container">
                <section className="area-login">
                    <div className="logo"></div>
                    <form className="login" method="GET" autoComplete="off">
                        <input type="email" name="email" placeholder="E-mail" required autoFocus />
                        <input type="password" name="senha" id="senha" placeholder="Senha" maxLength="12" required/>
                        <p><Link to="/newpacient">cadastre-se</Link></p>
                        <input type="submit" value="Entre"/> 
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