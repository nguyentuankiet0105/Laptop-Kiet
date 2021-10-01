import * as React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { dataLaptop, dataCPU, dataScreen } from '../../common/BodyDetails/DataCard';
import ProductCard from '../../common/BodyDetails/';

const SearchBar = () => {
  const [listCard, setListCard] = React.useState({
    Laptop: dataLaptop,
    CPU: dataCPU,
    Screen: dataScreen,
  });
  const listforSearch = listCard.Laptop.concat(listCard.CPU, listCard.Screen);

  const [Term, setTerm] = React.useState('');

  const SearchText = (e) => {
    setTerm(e.target.value);
  };
  console.log('Term', Term);

 
  return (
    <>
      <div className="container__search ">
        <input
          type="text"
          value={Term}
          className="container__search--input"
          placeholder="Search entiere store here..."
          onChange={SearchText.bind(this)}
        />
        <SearchOutlined className="container__search--icon" htmlType="submit" />
      </div>
    </>
  );
};

export default SearchBar;
