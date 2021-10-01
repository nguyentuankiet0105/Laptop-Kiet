import React from 'react';
import IntroduceCard from './IntroduceCard';
import ProductCard from './ProductCard';
import backgroundLaptop from '../../../assets/images/Body/MSILaptops.png';
import { useSelector } from 'react-redux';

const ListProducts = (prosp) => {
  
  const listProduct = useSelector((state) => {
    console.log('listProductLaptop ~ state', state);
    return state.product.listProductLaptop;
  });
  console.log('listProduct ~ listProductLaptop', listProduct);

  
  return (
    <div className="container">
      <hr />
      <IntroduceCard srcImage={backgroundLaptop} title="MSI LapTop" />
      {listProduct &&
        listProduct.map((item) => (
          <ProductCard
            status={item.status}
            src={item.src}
            content={item.content}
            title={item.title}
            price={item.price}
          />
        ))}
    </div>
  );
};
export default ListProducts;
