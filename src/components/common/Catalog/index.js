import React from 'react';
import { Row, Col, Pagination,Button } from 'antd';
import { CaretLeftOutlined,ShoppingCartOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';

import ProductCardRow from './ProductCardRow';
import { dataLaptop, dataCPU, dataScreen } from '../BodyDetails/DataCard';
import ButtonTagDelete from './ButtonTagDelete';
import BreadcrumbCatalog from './BreadcrumbCatalog';
import CatalogColumLeft from '../Catalog/CatalogColumLeft/index';
import CatalogNav from './CatalogNav';
import MoreInfo from './MoreInfo';
import Support from '../Support/index';
import ProductCart from '../BodyDetails/ProductCard';
import { addToCart } from '../../../Redux/Reducer/cartReducer';


const Catalog = () => {
  const dispatch = useDispatch();
  const { listProductLaptop, listProductCPU, listProductScreen } = useSelector(
    (state) => state.product
  );

  const [minValue, setMinValue] = React.useState(0);
  const [maxValue, setMaxValue] = React.useState(15);
  const [numEachPage, setNumEachPage] = React.useState(15);
  const [isShowListProduct, setIsShowListProduct] = React.useState(true);
  const [isShowListProductRow, setIsShowListProductRow] = React.useState(false);
 

  const newListCard = listProductLaptop.concat(listProductCPU, listProductScreen);
  console.log('newListCard ~', newListCard);

  const handelAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleIsShowListGrid = () => {
    setIsShowListProduct(true);
    setIsShowListProductRow(false);
    setNumEachPage(15);
    setMinValue(0);
    setMaxValue(15);
  };
  const handleIsShowListRow = () => {
    setIsShowListProductRow(true);
    setIsShowListProduct(false);
    setNumEachPage(4);
    setMinValue(0);
    setMaxValue(4);
  };
  const handleChange = (valueCurrent) => {
    if (valueCurrent <= 1) {
      setMinValue(0);
      setMaxValue(numEachPage);
    } else {
      setMaxValue(valueCurrent * numEachPage);
    }
  };

  const listCardGrid = () => {
    const newListCard = listProductLaptop.concat(listProductCPU, listProductScreen);
    return (
      <>
        {newListCard.slice(minValue, maxValue).map((item, index) => {
          return (
            <div style={{display: 'block'}}>
              <ProductCart
                id={item.id}
                key={index}
                status={item.status}
                src={item.src}
                title={item.title}
                content={item.content}
                price={item.price}
              />
              <div className="productCard__wrapButton">
                <Button className="btn--add" onClick={() => handelAddToCart(item)}>
                  <ShoppingCartOutlined style={{ fontSize: '16px' }} />
                  Add To Cart
                </Button>
              </div>
            </div>
          );
        })}
      </>
    );
  };
  const listCardRow = () => {
    return (
      <>
        {newListCard.slice(minValue, maxValue).map((item, index) => {
          return (
            <ProductCardRow
              id={item.id}
              key={index}
              status={item.status}
              src={item.src}
              title={item.title}
              content={item.content}
              price={item.price}
            />
          );
        })}
      </>
    );
  };

  return (
    <div className="catalogProduct">
      <div className="container">
        <BreadcrumbCatalog />
        <h1 className="catalogProduct--h1">MSI PS Series (20)</h1>
        <Row>
          <Col lg={{ span: 4 }} md={{ span: 7 }}>
            <div className="catalogProduct__navBar--left">
              {' '}
              <CaretLeftOutlined />
              Back
            </div>
            <CatalogColumLeft />
          </Col>
          <Col lg={{ span: 20 }} md={{ span: 17 }} style={{ paddingLeft: '4px' }}>
            <CatalogNav handleIsShow={handleIsShowListGrid} handleIsShowRow={handleIsShowListRow} />
            <Row className="tagProduct" style={{ padding: '5px 0' }}>
              <ButtonTagDelete title={'CUSTOM PCS'} number={'24'} />
              <ButtonTagDelete title={'HP/COMPAQ PCS'} number={'24'} />
              <ButtonTagDelete title={'HP/COMPAQ PCS'} number={'24'} />
            </Row>
            <Row className="catalogProduct__wrapProduct">
              {isShowListProduct ? listCardGrid() : null}
              {isShowListProductRow ? listCardRow() : null}
            </Row>
            <Row
              style={{
                display: 'flex',
                justifyContent: 'center',
                margin: '15px 0 60px 0',
              }}
            >
              <Pagination
                defaultCurrent={1}
                total={newListCard.length}
                pageSize={numEachPage}
                onChange={handleChange}
              />
            </Row>
            <Row>
              <MoreInfo />
            </Row>
          </Col>
        </Row>
      </div>
      <Row>
        <Support />
      </Row>
    </div>
  );
};

export default Catalog;
