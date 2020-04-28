import React, { Component } from 'react';
import Keycloak from 'keycloak-js';
import UserInfo from './UserInfo';
import Logout from './Logout';
import Products from './Products';

class Secured extends Component {

    constructor(props) {
        super(props);
        this.state = { keycloak: null, authenticated: false };
    }

    async componentDidMount() {

        const keycloak = Keycloak('/keycloak.json');
        keycloak.init({onLoad: 'login-required', promiseType: 'native'}).then(authenticated => {
            this.setState({ keycloak: keycloak, authenticated: authenticated })
        })
    }

    render() {
        if(this.state.keycloak) {
            if(this.state.authenticated) return (
                <div>
                    <div className="wrapper">
                    <div className="main">
                        <UserInfo keycloak={this.state.keycloak} />
                        <Logout keycloak={this.state.keycloak} />

                    </div>
                    <div className="products">
                        <Products keycloak={this.state.keycloak}></Products>
                    </div>
                    </div>
                    <div className="description">
                    This is a Keycloak-secured component of your application. You shouldn't be able
                        to see this unless you've authenticated with Keycloak.
                    </div>
                </div>
            ); else return (<div>Unable to authenticate!</div>)
        }
        return (
            <div>Initializing Keycloak...</div>
        );
    }
}
export default Secured;