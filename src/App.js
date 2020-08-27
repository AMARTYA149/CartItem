import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import * as firebase from 'firebase';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
    products : [],
    loading: true
    }
    this.db = firebase.firestore();
  }

  componentDidMount(){
    // firebase
    //   .firestore()
    //   .collection('products')
    //   .get()
    //   .then((snapshot) => {
    //     console.log(snapshot);

    //     snapshot.docs.map((doc) => {
    //       console.log(doc.data());
    //     });

    //     const products = snapshot.docs.map((doc) => {
    //       const data = doc.data();
    //       data['id'] = doc.id;

    //       return data;
    //     })

    //     this.setState({
    //       products: products,
    //       loading: false
    //     })
    //   })

    this.db
      .collection('products')
      .onSnapshot((snapshot) => {
        console.log(snapshot);

        snapshot.docs.map((doc) => {
          console.log(doc.data());
        });

        const products = snapshot.docs.map((doc) => {
          const data = doc.data();
          data['id'] = doc.id;

          return data;
        })

        this.setState({
          products: products,
          loading: false
        })
      })
  }

  handleIncreaseQuantity = (product) => {
    // console.log('Increase', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    // products[index].qty += 1;

    // this.setState({
    //   products: products
    // })

    const docRef = this.db.collection('products').doc(products[index].id);

    docRef
      .update({
        qty: products[index].qty + 1
      })
      .then(() => {
        console.log('Updated Successfully')
      })
      .catch((error) => {
        console.log('Error', error);
      })
  }

  handleDecreaseQuantity = (product) => {
    // console.log('Decrease', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    if(products[index].qty === 0){
      return;
    }

    // products[index].qty -= 1;
    // this.setState({
    //   products: products
    // })

    const docRef = this.db.collection('products').doc(products[index].id);
    if(products[index].qty === 0){
      return;
    }

    docRef
      .update({
        qty: products[index].qty - 1
      })
      .then(() => {
        console.log('Updated Successfully')
      })
      .catch((error) => {
        console.log('Error', error);
      })
  }

  handleDeleteProduct = (id) => {
    const { products } = this.state;

    // const items = products.filter((item) => item.id !== id); //this returns array with ids not equal to id passed
    // this.setState({
    //   products: items
    // })
    const docRef = this.db.collection('products').doc(id);

    docRef
      .delete()
      .then(() => {
        console.log('Deleted Successfully')
      })
      .catch((error) => {
        console.log('Error', error);
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
    }
    )

    return total;
  }

  addProduct = () => {
    this.db
      .collection('products')
      .add({
        img: '',
        price: 1200,
        qty: 3,
        title: 'camera'
      })
      .then((docRef) => {
        console.log('Product added', docRef);
      })
      .catch((error) => {
        console.log('Error: ', error);
      })
  }

  render(){
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count = {this.getCartCount()}/>
        {/* <button onClick = {this.addProduct} style={{padding: 10, fontSize: 20}}>Add Product</button> */}
        <Cart 
        products = {products}
        onIncreaseQuantity = {this.handleIncreaseQuantity}
        onDecreaseQuantity = {this.handleDecreaseQuantity}
        onDeleteProduct = {this.handleDeleteProduct}
        />
        {loading && <h2>Loading Products ...</h2>}
        <div style={{fontSize: 20, padding: 10}}>TOTAL: {this.getTotalPrice()}</div>
      </div>
    );
  }
}

export default App;
