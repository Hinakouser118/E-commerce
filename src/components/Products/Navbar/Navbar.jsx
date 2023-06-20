import React from 'react';
import { AppBar,Toolbar,IconButton,Badge,MenuItem,Menu,Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import useStyle from './styles';
export default function Navbar({totalItems}) {
    const classes =useStyle();
    const location=useLocation();
   
  return (
    <>
      <AppBar position='fixed' className={classes.appBar} color='inherit'>
        <Toolbar>
            <Typography component={Link} to="/" variant='h6' className={classes.appBar} color='inherit'>
             <img src="https://tse3.mm.bing.net/th?id=OIP.YQ9avwRdTW-6tBiy4Jz-mQHaHM&pid=Api&P=0&h=180" alt="Commerce.js" height="25px" className={classes.image}/>
             Commerce.js
            </Typography>
            <div className={classes.grow}/>
            { location.pathname ==='/' &&(
            <div className={classes.button}>
             <IconButton component={Link} to="/cart" aria-label="show cart items" color="inherit">
                    <Badge badgeContent={totalItems} color="secondary">
                        <ShoppingCart/>
                    </Badge>
                </IconButton>
            </div>)}
        </Toolbar>
      </AppBar>
    </>
  )
}
