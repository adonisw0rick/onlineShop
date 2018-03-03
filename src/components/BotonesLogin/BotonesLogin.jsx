import React from "react";
import firebase from "../../firebase"

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
    const provider = new firebase.auth.GithubAuthProvider();
    provider.addScope('repo');
    firebase.auth().signInWithPopup(provider).then(function (result) {
      // This gives you a GitHub Access Token.
      console.log(result);
      this.props.updateState({ user: result.user })
      const token = result.credential.accessToken;
      // The signed-in user info.
      const user = result.user;
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      if (errorCode === 'auth/account-exists-with-different-credential') {
        alert('You have signed up with a different provider for that email.');
        // Handle linking here if your app allows it.
      } else {
        console.error(error);
      }
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
          <button onClick={this.handleLogout}>Logout</button>
          <button onClick={this.googleAuth}>Google</button>
          <button onClick={this.facebookAuth}>Facebook</button>
          <button onClick={this.twitterAuth}>Twitter</button>
          <button onClick={this.githubAuth}>GitHub</button>
        </div>
      )
    }
  }

export default BotonesLogin;