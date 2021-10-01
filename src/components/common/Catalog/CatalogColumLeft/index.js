import React from "react";
import BrandCatalog from "./BrandCatalog";
import CompareProducts from "./CompareProducts";
import Filters from "./Filters";
import bannerAdvertisement from "../../../../assets/images/CatalogBanner.png";
const CatalogColumLeft = () => {
  return (
    <div className="CatalogColumLeft">
      <Filters />
      <BrandCatalog />
      <CompareProducts
        title={"Compare Products"}
        subtitle={"You have no items to compare."}
      />
      <CompareProducts
        title={"My Wish List"}
        subtitle={"You have no items in your wish list."}
      />
      <div className="bannerAdvertisement">
        <img src={bannerAdvertisement} alt="" />
      </div>
    </div>
  );
};
export default CatalogColumLeft;
