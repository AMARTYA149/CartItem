import React from 'react';

class CartItem extends React.Component{
  constructor() {
    super();
    this.state = {
      price: 9999,
      title: 'Mobile Phone',
      qty: 1,
      img: ''
    }
  }

  render(){
    const {price , title, qty} = this.state;
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
            <img alt="increase" className="action-icons" src="https://image.flaticon.com/icons/svg/992/992651.svg"/>
            <img alt="decrease" className="action-icons" src="https://image.flaticon.com/icons/svg/992/992683.svg"/>
            <img alt="delete" className="action-icons" src="https://image.flaticon.com/icons/svg/1214/1214428.svg"/>

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