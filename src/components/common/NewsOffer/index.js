import React from "react";
import NewsItems from "./NewsItems";
import { dataNewsOffer } from "./DataNewsOffer";
const index = () => {
  return (
    <div className="container container--newsOffer">
      <div className="newsOffer__title">
        <h3>Follow us on Instagram for News, Offers & More</h3>
      </div>
      <div className="newsOffer">
        {dataNewsOffer.map((item, index) => {
          return (
            <NewsItems
              key={index}
              src={item.src}
              content={item.content}
              date={item.date}
            />
          );
        })}
      </div>
    </div>
  );
};

export default index;
