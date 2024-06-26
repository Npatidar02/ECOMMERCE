import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import { Breadrums } from '../Components/Breadcrums/Breadrums';
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay';
import { DescriptionBox } from '../Components/DescriptionBox/DescriptionBox';
import { RelatedProduct } from '../Components/RelatedProduct/RelatedProduct';


export const Product = () => {
    const {all_product} = useContext(ShopContext)
     const {productId} = useParams();
     const product = all_product.find((e)=> e.id === Number(productId));
 
    return (
    <div >
        <Breadrums  product={product}/>
        <ProductDisplay product={product} />
        <DescriptionBox/>
        <RelatedProduct/>
    </div>
  )
}

