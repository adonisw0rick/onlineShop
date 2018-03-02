import React, { Component } from "react";
import { FacebookLogin } from 'react-facebook-login-component';

class Facebook extends Component {

    

    responseFacebook(response) {
        console.log(response);
        // anything else you want to do(save to localStorage)...
    }

    render() {
        return (
            <div>
                <FacebookLogin socialId="2010839119239641"
                    language="en_US"
                    scope="public_profile,email"
                    responseHandler={this.responseFacebook}
                    xfbml
                    fields="id,email,name"
                    version="v2.5"
                    className="facebook-login"
                    buttonText="Login With Facebook" />
            </div>
        );
    }

}

export default Facebook;