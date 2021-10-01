import React from "react";
import ProductCardRow from "./ProductCardRow";
import { dataLaptop, dataCPU, dataScreen } from "../BodyDetails/DataCard";

const ListProductCardRow = () => {
  const [listCard, setListCard] = React.useState({
    Laptop: dataLaptop,
    CPU: dataCPU,
    Screen: dataScreen,
  });
  const newListCard = listCard.Laptop.concat(listCard.CPU, listCard.Screen);
  return (
    <>
      {newListCard.map((item, index) => {
        return (
          <ProductCardRow
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

export default ListProductCardRow;
