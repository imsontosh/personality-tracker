import React, { Component } from "react";
import { auth, provider } from "../anger/AngerFB.js";

class Auth extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }
  login() {
    auth.signInWithPopup(provider).then(result => {
      const user = result.user;
      this.setState({ user });
    });
  }
  logout() {
    auth.signOut().then(() => {
      this.setState({ user: null });
    });
  }


  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      }
    });
  }

  render() {
    const self = this;
    const children = React.Children.map(this.props.children, function(child) {
      return React.cloneElement(child, {
        user: self.state.user,
        login : self.login,
        logout : self.logout,
      });
    });

    return (
      <div className="app">
        {this.state.user ? children : children[0]}
      </div>
    );
  }
}

export default Auth;
