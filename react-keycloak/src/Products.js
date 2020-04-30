import React, { Component } from 'react';

class Products extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }
    async componentDidMount(){
        const url = "https://nodeapp-service.herokuapp.com/products";
        const response = await fetch(url, {
            headers: {
                Authorization: `Bearer ${this.props.keycloak.token}`
            } 
        });
        const data = await response.json();
        this.setState({products: data})
    }


    render() {
        return (
            <div className="account">
                <h3>Products</h3>
                <div className="details-row">
                    {this.state.products.map(prod => (

                        <label className="details-row" key={prod}>{prod}</label>

                    ))}
                </div>

            </div>
        );
    }
}
export default Products;