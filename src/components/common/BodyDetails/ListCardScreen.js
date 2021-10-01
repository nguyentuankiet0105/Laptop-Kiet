import React from "react";
import ProductCard from "./ProductCard";
import { dataScreen } from "./DataCard";
const ListCardScreen = () => {
  const [listCard, setListCard] = React.useState({
    Screen: dataScreen,
  });

  return (
    <>
      {listCard.Screen.map((item, index) => {
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

export default ListCardScreen;
