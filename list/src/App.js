import React, { Component } from 'react';
import blesk from 'blesk';

const windowName = `product-list${Math.floor(Math.random() * Math.floor(4000))}`;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    blesk.event.register('addToCart', (detail)=>{
      this.setState({ products: [...this.state.products, detail] });
    });
  }

  render () {
    return (
      <sidebar>
        <h2>List</h2>
        { this.renderProducts() }
        <button onClick={()=>{blesk.child.open('http://localhost:5000/', windowName);}}>Open product-list</button>
        <button onClick={()=>{blesk.child.close(windowName);}}>Close product-list</button>
      </sidebar>
    );
  }

  renderProducts () {
    if (this.state.products.length === 0) {
      return <p>Your list is empty</p>;
    }
    return <ul>{ this.state.products.map(this.renderProduct) }</ul>;
  }

  renderProduct (product, index) {
    return <li key={index}>{ product.product }</li>;
  }
}
