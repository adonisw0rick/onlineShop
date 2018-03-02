import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login-component';

class Google extends Component {

    

    responseGoogle(googleUser) {
        const idToken = googleUser.getAuthResponse().id_token;
        const googleId = googleUser.getId();

        const profile = googleUser.getBasicProfile();
        console.log(`ID: ${  profile.getId()}`); // Do not send to your backend! Use an ID token instead.
        console.log(`Name: ${  profile.getName()}`);
        console.log(`Image URL: ${  profile.getImageUrl()}`);
        console.log(`Email: ${  profile.getEmail()}`); // This is null if the 'email' scope is not present.

        console.log(googleUser.getAuthResponse());
        console.log({ googleId });
        console.log({ accessToken: idToken });
        // anything else you want to do(save to localStorage)...
    }

    render() {
        return (
            <div>
                <GoogleLogin socialId="413148506398-7k3e35galon3rokcadcv02m0ui28p99l.apps.googleusercontent.com"
                    className="google-login"
                    scope="profile"
                    fetchBasicProfile={false}
                    responseHandler={this.responseGoogle}
                    buttonText="Login With Google" />
            </div>
        );
    }

}

export default Google;