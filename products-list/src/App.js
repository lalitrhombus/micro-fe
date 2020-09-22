import React from 'react';
import blesk from 'blesk';

const windowName = `cart${Math.floor(Math.random() * Math.floor(4000))}`;

const addToCart = (item) => () => {
  console.log('i am doing add to cart');
  blesk.event.publish('addToCart', item);
}

const productItemView = (product, index) => {
  const price = parseFloat((Math.random() * 100).toFixed(2));

  return (
    <li key={index} style={{ padding: "30px", listStyle: "none", border: "1px solid #000", margin: "5px" }}>
      <b>{product}</b> <br />
      <button onClick={addToCart({ product, price })}>Add</button>
    </li>
  );
};

export default () =>
  <section>
    <h2>Products</h2>
    <ul style={{ display: 'flex', padding: '0' }}>
      { ['one', 'two', 'three', 'four'].map(productItemView) }
    </ul>
    <button onClick={()=>{blesk.child.open('http://localhost:4000/', windowName);}}>Open child cart</button>
    <button onClick={()=>{blesk.child.close(windowName);}}>close cart</button>
    <button onClick={()=>{blesk.child.get();}}>list instnaces</button>
  </section>;
