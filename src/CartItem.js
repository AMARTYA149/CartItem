import React from 'react';

class CartItem extends React.Component{
  
  increaseQuantity = () => {    //arrow function does automatically binding of the function with the instance
    // console.log('this.state', this.state);
    // setState form 1
    // this.setState({
    //   qty: this.state.qty + 1
    // });

    // setState form 2 - if previous State is required
    this.setState((prevState) => {
      return{
        qty: prevState.qty + 1
      }
    }, () =>{
      console.log("this.state", this.state);
    });
  }

  decreaseQuantity = () => {
    const {qty} = this.state;
    if(qty === 0)
    {return;}

    this.setState((prevState) => {
      // if(prevState.qty > 0)  // - my way of handling decreasing qty
      return {
        qty: prevState.qty - 1
      }
    }, () =>{
      console.log("this.state", this.state);
    });
  }

  // testing() {
  //   const promise = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve('done');
  //     }, 5000);
  //   })

  //   promise.then(() => {
  //     //setState acts like a synchronous call
  //     this.setState({ qty: this.state.qty + 10});
  //     this.setState({ qty: this.state.qty + 10});
  //     this.setState({ qty: this.state.qty + 10});
  //     console.log('state', this.state);
  //   });
  // }

  render(){
    console.log('this.props', this.props);
    const { price, title, qty} = this.props.product;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image}/>
        </div>
        <div className="right-block">
          <div style={{fontSize: 25}}>{title}</div>
          <div style={{color: 'red'}}>Rs {price}</div>
          <div style={{color: 'blue'}}>Qty: {qty}</div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img 
            alt="increase" 
            className="action-icons" 
            src="https://image.flaticon.com/icons/svg/992/992651.svg" 
            onClick = {this.increaseQuantity}
            />
            <img 
            alt="decrease" 
            className="action-icons" 
            src="https://image.flaticon.com/icons/svg/992/992683.svg"
            onClick = {this.decreaseQuantity}
            />
            <img 
            alt="delete" 
            className="action-icons" 
            src="https://image.flaticon.com/icons/svg/1214/1214428.svg"
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc'
  }
}

export default CartItem;