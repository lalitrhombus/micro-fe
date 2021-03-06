import React, { Component } from 'react';
import Blesk from 'blesk';

const windowName = `list${Math.floor(Math.random() * Math.floor(4000))}`;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    Blesk.event.register('addToCart', (detail)=>{
      this.setState({ products: [...this.state.products, detail] });
    });
  }

  render () {
    return (
      <sidebar>
        <h2>Cart</h2>
        { this.renderProducts() }
        <button onClick={()=>{Blesk.child.open('http://localhost:5003/', 'list');}}>Open list</button>
        <button onClick={()=>{Blesk.child.close('list');}}>Close List</button>
      </sidebar>
    );
  }

  renderProducts () {
    if (this.state.products.length === 0) {
      return <p>Your cart is empty</p>;
    }
    return <ul>{ this.state.products.map(this.renderProduct) }</ul>;
  }

  renderProduct (product, index) {
    return <li key={index}>{ product.product }</li>;
  }
}
