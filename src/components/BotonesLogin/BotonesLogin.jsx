import React from "react";
import firebase from "../../firebase";
import styles from "./BotonesLogin.scss";

class BotonesLogin extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            user: null
        }
        this.googleAuth = this.googleAuth.bind(this);
      this.handleLogout = this.handleLogout.bind(this);
      this.facebookAuth = this.facebookAuth.bind(this);
      this.twitterAuth = this.twitterAuth.bind(this);
      this.githubAuth = this.githubAuth.bind(this);
    }

    /**
     *  Una vez el componente ha sido montado guardamos el estado
     */
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => this.setState({
      user
    }))
  }

  /** Implementamos el estado actual a updateState */

    updateState = (state) => this.setState(state)
    

    /**
     * googleAuth, facebookAuth, githubAuth, twitterAuth, al pasar el evento llamamos a una funcion
* contenida por la api de firebase que contenga el proveedor del login de cada plataforma (new firebase.auth.plataforma)
* y el resultado nos devuelve el objeto user, de este objeto sacamos DisplayName y email.
     * @param {e} 
     */

    googleAuth(e){
      e.preventDefault();
        const Provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(Provider)
            .then(res => {
              this.props.updateState({ user: res.user })
            }).catch(err => {
            });
    }
    
  facebookAuth(e) {
    e.preventDefault();
    const Provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(Provider)
      .then(res => {
        this.props.updateState({user: res.user})
      }).catch(err => {
      });
  }
  githubAuth(e) {
    e.preventDefault();
    const Provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithPopup(Provider)
      .then(res => {
        this.props.updateState({ user: res.user })
      }).catch(err => {
      });
  }
  twitterAuth(e) {
    e.preventDefault();
    const Provider = new firebase.auth.TwitterAuthProvider();
    firebase.auth().signInWithPopup(Provider)
      .then(res => {
        this.props.updateState({ user: res.user })
      }).catch(err => {
      });
  }

  /** Desconexión del cliente de firebase, por tanto de sus cuentas, pasamos el estado de user a null */
    handleLogout(e){
      e.preventDefault();
        firebase.auth().signOut()
        .then(() => {
          this.props.updateState({ user: null })
        }).catch(err => {
        });
    }
    render(){
      return(
        <div>
        <div className={styles.botones}>
          <button onClick={this.handleLogout}>Logout</button>
          <button onClick={this.googleAuth}>Google</button>
          <button onClick={this.facebookAuth}>Facebook</button>
          <button onClick={this.twitterAuth}>Twitter</button>
          <button onClick={this.githubAuth}>GitHub</button>
        </div>
        </div>
      )
    }
  }

export default BotonesLogin;