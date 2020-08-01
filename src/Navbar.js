import React from 'react';

const  Navbar = () => {    
    return (
      <div style={styles.nav}>
        <div style={styles.cartIconContainer}>
          <img style={styles.cartIcon} src="https://image.flaticon.com/icons/svg/777/777205.svg" alt="cart-icon"/>
          <span style={ styles.cartCount}>3</span>
        </div>
      </div>
    );
}

const styles = {
  cartIcon: {
    height: 32,
    marginRight: 20
  }, 
  nav: {
    height: 65,
    background: '#4267b2',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  cartIconContainer: {
    position: 'relative'
  }, 
  cartCount: {
    background: 'yellow',
    borderRadius: '50%',
    padding: '2px 8px',
    position: 'absolute',
    right: 0,
    top: -9
  }
}

export default Navbar;