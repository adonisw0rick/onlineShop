import React, { Component } from "react";

import GitHubLogin from 'react-github-login';


class Github extends Component{

render(){
    const onSuccess = response => console.log(response);
    const onFailure = response => console.error(response);

    return (
        <div>
            <GitHubLogin clientId="d09feadc4b4f991d388d"
                onSuccess={onSuccess}
                onFailure={onFailure} />
        </div>
    );
}
}

export default Github;