import React, { Component } from 'react';

class UserInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            id: ""
        };
        console.log(this.props.keycloak.token)
        this.props.keycloak.loadUserInfo().then(userInfo => {
            this.setState({name: userInfo.name, email: userInfo.email, id: userInfo.sub})
        });
    }
    // async componentDidMount(){
    //     const url = "http://localhost:8080/products";
    //     const response = await fetch(url, {
    //         headers: {
    //             Authorization: `Bearer ${this.props.keycloak.token}`
    //         } 
    //     });
    //     const data = await response.json();
    //     console.log(data)

    // }


    render() {
        return (
            <div className="account">
                <h3>Account</h3>
                <div className="details-row">
                    <label>Name: {this.state.name} </label>
                </div>
                <div className="details-row">
                    <label>Email: {this.state.email} </label>
                </div>
                <div className="details-row">
                    <label>ID: {this.state.id} </label>
                </div>

            </div>
        );
    }
}
export default UserInfo;