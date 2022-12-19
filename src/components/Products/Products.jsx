import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';

const products = [
    { id: 1, name: 'Shoes', description: 'Running shoes.', price: '$40', image: 'https://i.imgur.com/xB8gfiM.jpg'},
    { id: 1, name: 'Macbook', description: 'Apple macbook.', price: '$1000', image: 'https://i.imgur.com/4rlzl7S.jpg'},
];

const Products = () => {
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products;