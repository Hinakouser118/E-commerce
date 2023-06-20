import React from 'react'
import useStyles from './styles';
import { Container,Typography,Button,Grid} from '@material-ui/core'
import Cartitem from './CartItem/Cartitem';
import { Link } from 'react-router-dom';
export default function Cart({cart,handleUpdateCartQty,
    handleRemoveFromCart,
    handleEmptyCart}) {
    
    const classes=useStyles();
    const EmptyCart=()=>(
        <Typography variant='subtitle1'>You have no items in your shopping cart,
        <Link to='/'className={classes.link}>start adding some!</Link></Typography>
    );
    const FilledCart= () => (
        <>
        <Grid container spacing={3}>
            {cart.line_items.map((item)=>(
                <Grid item xs={12} sm={4} key={item.id}>
                   <Cartitem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={ handleRemoveFromCart}/>
                </Grid>
            ))}
        </Grid>
        <div className={classes.cardDetails}>
            <Typography variant='h4'>Subtotal:{cart.subtotal.formatted_with_symbol}</Typography>
            <div>
            <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty cart</Button>
            <Button component={Link} to="/checkout" className={classes.checkoutButton}  size="large" type="button" variant="contained" color="primary">Checkout</Button>

            </div>
        </div>
        </>
    );
    if(!cart.line_items)return 'Loading..'
  return (
    <>
    <Container>
        <div className={classes.toolbar}/>
        <Typography className={classes.title}  variant='h3'gutterBottom>Your Shopping Cart</Typography>
        { !cart.line_items.length ? <EmptyCart/>:<FilledCart/>}
    </Container>
    <div>
      
    </div>
    </>
  )
}



// import React from 'react';
// import useStyles from './styles';
// import { useSelector, useDispatch } from 'react-redux';
// import { Container, Typography, Button, Grid } from '@material-ui/core';
// import CartItem from './CartItem/Cartitem';
// import { Link } from 'react-router-dom';

// export default function Cart({ cart}) {
//   const classes = useStyles();
//   const dispatch = useDispatch();

//   const handleRemoveFromCart = (itemId) => {
//     dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
//   };

//   const EmptyCart = () => (
//     <Typography variant="subtitle1">
//       You have no items in your shopping cart,
//       <Link to="/" className={classes.link}>
//         start adding some!
//       </Link>
//     </Typography>
//   );

//   const FilledCart = () => (
//     <>
//       <Grid container spacing={3}>
//         {cart.line_items.map((item) => (
//           <Grid item xs={12} sm={4} key={item.id}>
//             <CartItem
//               item={item}
//             //   onRemoveFromCart={handleRemoveFromCart}
            
//             />
//           </Grid>
//         ))}
//       </Grid>
//       <div className={classes.cardDetails}>
//         <Typography variant="h4">
//           Subtotal: {cart.subtotal.formatted_with_symbol}
//         </Typography>
//         <div>
//           <Button
//             className={classes.emptyButton}
//             size="large"
//             type="button"
//             variant="contained"
//             color="secondary"
//             onClick={handleEmptyCart}
//           >
//             Empty cart
//           </Button>
//           <Button
//             component={Link}
//             to="/checkout"
//             className={classes.checkoutButton}
//             size="large"
//             type="button"
//             variant="contained"
//             color="primary"
//           >
//             Checkout
//           </Button>
//         </div>
//       </div>
//     </>
//   );

//   if (!cart.line_items) {
//     return 'Loading...';
//   }

//   return (
//     <>
//       <Container>
//         <div className={classes.toolbar} />
//         <Typography className={classes.title} variant="h3" gutterBottom>
//           Your Shopping Cart
//         </Typography>
//         {cart.line_items.length ? <FilledCart /> : <EmptyCart />}
//       </Container>
//       <div></div>
//     </>
//   );
// }


