import React from 'react';
import { Link } from 'react-router-dom';


const Heading = ({ onChangeAbout, onchangeDetails }) => {
  return (
    <div className="container">
      <div className="ProductDetails__navigation">
        <Link onClick={onChangeAbout}>About Product</Link>
        <Link onClick={onchangeDetails}>Details</Link>
      </div>

      <div className="ProductDetails__addProduct">
        <div className="ProductDetails__addProduct--quantity">
          <span>
            On Sale from <span style={{ fontWeight: 'bold' }}>$3,299.00</span>
          </span>
        </div>
        
      </div>
    </div>
  );
};

export default Heading;
