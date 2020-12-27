import React, { Component } from "react";

class SeInscrire extends Component {
  state = {
    email: "",
    password: "",
    prenom: "",
    nom: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-dark-3">S'Inscrire</h5>
          <div className="input-field">
            <label htmlFor="prenom">Prenom</label>
            <input type="text" id="prenom" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="nom">Nom</label>
            <input type="text" id="nom" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten- z-depth-">Se Connecter</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SeInscrire;
