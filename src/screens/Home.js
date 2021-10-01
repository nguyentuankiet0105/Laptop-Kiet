import React from 'react';
import Body from '../components/layout/Body';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/header/index';
import ListProducts from '../components/common/BodyDetails/ListProducts';
import ScrollToTop from 'react-scroll-to-top';

const Home = () => {
  return (
    <div>
      <ScrollToTop smooth style={{backgroundColor: '#FFDD46'}}/>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default Home;
