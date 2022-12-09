import axios from 'axios';
import React, { useEffect, useState } from 'react';

import ProductsCard from '../../components/ProductsCard';

const Products = () => {
    const [products,setProducts]= useState([])


    useEffect(()=>{
        axios.get('https://raw.githubusercontent.com/coddermoon/B2B-e-commerce-platform/main/public/fakedata/productinfo.json')
        .then(res=> setProducts(res.data))
    },[])


    return (
        <div className='container mx-auto grid grid-cols-2 gap-2'>

{  
 products.map(product => <ProductsCard
 key={product._id}
 product={product}
 />)
 
 }
    






    </div>
    );
};

export default Products;