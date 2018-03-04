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
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => this.setState({
      user
    }))
  }
    updateState = (state) => this.setState(state)
    
    googleAuth(e){
      e.preventDefault();
        const Provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(Provider)
            .then(res => {
              this.props.updateState({ user: res.user })
                console.log(`${res.user} Has Logged In`)
            }).catch(err => {
                console.log(`Error: ${err.code} ${err.message}`)
            });
    }
  facebookAuth(e) {
    e.preventDefault();
    const Provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(Provider)
      .then(res => {
        this.props.updateState({user: res.user})
        console.log(`Has Logged In`, res.user)
      }).catch(err => {
        console.log(`Error: ${err.code} ${err.message}`)
      });
  }
  githubAuth(e) {
    e.preventDefault();
    const Provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithPopup(Provider)
      .then(res => {
        this.props.updateState({ user: res.user })
        console.log(`Has Logged In`, res.user)
      }).catch(err => {
        console.log(`Error: ${err.code} ${err.message}`)
      });
  }
  twitterAuth(e) {
    e.preventDefault();
    const Provider = new firebase.auth.TwitterAuthProvider();
    firebase.auth().signInWithPopup(Provider)
      .then(res => {
        this.props.updateState({ user: res.user })
        console.log(`Has Logged In`, res.user)
      }).catch(err => {
        console.log(`Error: ${err.code} ${err.message}`)
      });
  }
    handleLogout(e){
      e.preventDefault();
        firebase.auth().signOut()
        .then(() => {
          this.props.updateState({ user: null })
            console.log('Disconnected')
        }).catch(err => {
            console.log(`Error: ${err.code} ${err.message}`)
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