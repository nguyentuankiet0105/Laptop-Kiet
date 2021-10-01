import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { addToCart } from '../../../Redux/Reducer/cartReducer';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Button } from 'antd';


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 768 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 768, min: 465 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 375, min: 0 },
    items: 2,
  },
};

const CarouselNewProduct = () => {

  const dispatch = useDispatch();
  
  const handelAddToCart = (item) => {
    dispatch(addToCart(item));
  };
  const {listProductLaptop, listProductCPU, listProductScreen} = useSelector((state) => state.product);

  const newListProduct = () => {
    const listProductConcat = listProductLaptop.concat(
      listProductCPU,
      listProductScreen
    );
    const listProduct = listProductConcat.map((item, index) => {
      return (
        <>
        <ProductCard
          id={item.id}
          status={item.status}
          src={item.src}
          title={item.title}
          content={item.content}
          price={item.price}
        />
        <div className="productCard__wrapButton">
            <Button className="btn--add" onClick={()=> handelAddToCart(item)}>
              <ShoppingCartOutlined style={{ fontSize: '16px' }} />
              Add To Cart
            </Button>
          </div>
        </>
      );
    });
    return listProduct;
  };

  return (
    <div className="wrapper__carouselNewProduct">
      <div className="wrapper__carouselNewProduct--title">
        <h2>New Products</h2>
        <Link href="">See All New Products</Link>
      </div>
      <Carousel responsive={responsive} swipeable={true} draggable={true}>
        {newListProduct()}
      </Carousel>
    </div>
  );
};

export default CarouselNewProduct;
