import React from "react";
import ProductCard from "./ProductCard";
import { dataCPU } from "./DataCard";
const ListCardPC = () => {
  const [listCard, setListCard] = React.useState({
    CPU: dataCPU,
  });

  return (
    <>
      {listCard.CPU.map((item, index) => {
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

export default ListCardPC;
