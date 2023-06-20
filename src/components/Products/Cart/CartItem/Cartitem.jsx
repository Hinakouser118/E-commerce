import React from 'react'
import { Typography,Button,Card,CardActions,CardContent,CardMedia } from '@material-ui/core'
import useStyles from './styles'
// import cartReducer from '../../../../reducers/cartReducer';
export default function Cartitem({item,onUpdateCartQty,onRemoveFromCart}) {
    const classes= useStyles();
  return (
    <div>
      <Card>
        {/* <CardMedia image={item.media.source} alt={item.name} className={classes.media}/> */}
        <CardMedia 
  image={item.media && item.image.source ? item.media.source : ''}
  alt={item.name}
  className={classes.media}
/>

        <CardContent className={classes.cardContent}>
            <Typography variant='h4'>{item.name} </Typography>
            <Typography variant='h5'>{item.line_total.formatted_with_symbol} </Typography>
        </CardContent>
        {/* <cartReducer /> */}
        <CardActions className={classes.cartActions}>
            <div className={classes.buttons}>
<Button type="button"  size="small"  color="primary"onClick={()=>onUpdateCartQty(item.id,item.quantity-1)}>-</Button>
<Typography>{item.quantity}</Typography>
<Button type="button"  size="small"color="primary" onClick={()=>onUpdateCartQty(item.id,item.quantity+1)}>+</Button>
            </div>
            <Button variant='contained' type="button" color="secondary"onClick={()=>onRemoveFromCart(item.id)}>Remove</Button>
        </CardActions>
      </Card>
    </div>
  )
}


// import React from 'react';
// import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';
// import { connect } from 'react-redux'; // Import connect from react-redux
// import useStyles from './styles';

// const CartItem = ({ item, handleUpdateCartQty, handleRemoveFromCart }) => {
//   const classes = useStyles();

//   return (
//     <div>
//       <Card>
//         <CardMedia
//           image={item.media && item.media.source ? item.media.source : ''}
//           alt={item.name}
//           className={classes.media}
//         />

//         <CardContent className={classes.cardContent}>
//           <Typography variant="h4">{item.name}</Typography>
//           <Typography variant="h5">{item.line_total.formatted_with_symbol}</Typography>
//         </CardContent>

//         <CardActions className={classes.cartActions}>
//           <div className={classes.buttons}>
//             <Button
//               type="button"
//               size="small"
//               color="primary"
//               onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}
//             >
//               -
//             </Button>
//             <Typography>{item.quantity}</Typography>
//             <Button
//               type="button"
//               size="small"
//               color="primary"
//               onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}
//             >
//               +
//             </Button>
//           </div>
//           <Button
//             variant="contained"
//             type="button"
//             color="secondary"
//             onClick={() => handleRemoveFromCart(item.id)}
//           >
//             Remove
//           </Button>
//         </CardActions>
//       </Card>
//     </div>
//   );
// };

// // Map dispatch actions to props
// const mapDispatchToProps = (dispatch) => {
//   return {
//     handleUpdateCartQty: (itemId, newQty) => {
//       dispatch({ type: 'UPDATE_CART_QUANTITY', payload: { itemId, newQty } });
//     },
//     handleRemoveFromCart: (itemId) => {
//       dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
//     },
//   };
// };

// export default connect(null, mapDispatchToProps)(CartItem);

