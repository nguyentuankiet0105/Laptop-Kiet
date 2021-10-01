import {
  CheckCircleOutlined,
  ExclamationCircleOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { Routing } from '../../../constants/Routing_common';
import { useDispatch, useSelector } from 'react-redux';

const ProductCard = (props) => {

  return (
    <div>
      <div className="productCard">
        {props.status === 'In Stock' ? (
          <h3 className="productCard__status--inStock">
            <CheckCircleOutlined style={{ marginRight: '5px' }} />
            {props.status}
          </h3>
        ) : (
          <h3 className="productCard__status--availability">
            <ExclamationCircleOutlined style={{ marginRight: '5px' }} />
            {props.status}
          </h3>
        )}

        <Link to={`${Routing.PRODUCTDETAIL}${props.id}`}>
          <img src={props.src} alt={props.alt} />
        </Link>
        <Link to={`${Routing.PRODUCTDETAIL}${props.id}`}>
          <h2 className="productCard__title">{props.title}</h2>
        </Link>
        <p>{props.content}...</p>
        <h2 className="productCard__price">${props.price}.000</h2>
        {/* <div className="productCard__wrapButton">
          <Button className="btn--add" onClick={() => handelAddToCart(item)}>
            <ShoppingCartOutlined style={{ fontSize: '16px' }} />
            Add To Cart
          </Button>
        </div> */}
      </div>
    </div>
  );
};
export default ProductCard;
