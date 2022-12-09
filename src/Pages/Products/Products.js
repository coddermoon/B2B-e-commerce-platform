import React from 'react';
import ProductsCard from '../../components/ProductsCard';

const Products = () => {
    return (
        <div className='container mx-auto grid grid-cols-2 gap-2'>

        {/* {
        users.map(user => <CustomarCard
        key={user._id}
        user={user}
        />)
        } */}

<ProductsCard/> 
<ProductsCard/> 
<ProductsCard/> 
<ProductsCard/> 



    </div>
    );
};

export default Products;