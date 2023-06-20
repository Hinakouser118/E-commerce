import React from "react";
import {Grid} from '@material-ui/core';
import Product from './Product/Products';
import useStyles from './styles'
// const products=[
//     {id:1, name:'shoes',description: 'Running shoes.',image:'https://tse1.mm.bing.net/th?id=OIP.iSu2RcCcdm78xbxNDJMJSgHaEo&pid=Api&rs=1&c=1&qlt=95&w=154&h=96', price:'$5'},
//     {id:2, name:'watch',description: 'Running watch.',image:'https://tse1.mm.bing.net/th?id=OIP.1d6tBbNiJTFQNEK_k0sSjQHaFj&pid=Api&rs=1&c=1&qlt=95&w=128&h=96'
//     ,price:'$10'},
 
// ];
const Products = ({ products, onAddToCart })=>{
    const classes=useStyles();
    return(
<main className={classes.content}>
    <div className={classes.toolbar}/>
    <Grid container justifyContent="center" spacing={4}>
{products.map((product)=>(
    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
        <Product product={product} onAddToCart={onAddToCart}/>
    </Grid>
))}
    </Grid>
</main>
    )
}
export default Products;



