import React from "react";
import ProductCard from "./ProductCard";
import { dataLaptop } from "./DataCard";

const ListCardLaptop = () => {
  const [listCard, setListCard] = React.useState({
    Laptop: dataLaptop,
  });
  return (
    <>
      {listCard.Laptop.map((item, index) => {
        return (
          <ProductCard
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

export default ListCardLaptop;
