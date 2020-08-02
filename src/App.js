import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import { prettyDOM } from '@testing-library/react';


class App extends React.Component {

  constructor() {
    super();
    this.state = {
    products : [
      {
        price: 99,
        title: 'Watch',
        qty: 10,
        img: 'https://images.casiocdn.com/fit-in/368x500/casio-v2/resource/images/products/watches/hd/GGB100-1A9_hd.png',
        id: 1
      },
      {
        price: 9999,
        title: 'iPhone',
        qty: 2,
        img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-max-gold-select-2019?wid=834&hei=1000&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1566953859132',
        id: 2
      },
      {
        price: 9999,
        title: 'Macbook',
        qty: 1,
        img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp13touch-silver-select-202005?wid=892&hei=820&&qlt=80&.v=1587459986844',
        id: 3
      }
    ]
  }
    // this.testing();
    // this.increaseQuantity = this.increaseQuantity.bind(this);
  }

  handleIncreaseQuantity = (product) => {
    // console.log('Increase', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
      products: products
    })
  }

  handleDecreaseQuantity = (product) => {
    // console.log('Decrease', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    if(products[index].qty === 0){
      return;
    }

    products[index].qty -= 1;
    this.setState({
      products: products
    })
  }

  handleDeleteProduct = (id) => {
    const { products } = this.state;

    const items = products.filter((item) => item.id !== id); //this returns array with ids not equal to id passed

    this.setState({
      products: items
    })
  }

  getCartCount = () => {
    const { products } = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    })

    return count;
  }

  getTotalPrice = () => {
    const { products } = this.state;

    let total = 0;

    products.forEach((product) => {
      total += product.price * product.qty;
    })

    return total;
  }

  render(){
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count = {this.getCartCount()}/>
        <Cart 
        products = {products}
        onIncreaseQuantity = {this.handleIncreaseQuantity}
        onDecreaseQuantity = {this.handleDecreaseQuantity}
        onDeleteProduct = {this.handleDeleteProduct}
        />
        <div style={{fontSize: 20, padding: 10}}>TOTAL: {this.getTotalPrice()}</div>
      </div>
    );
  }
}

export default App;
