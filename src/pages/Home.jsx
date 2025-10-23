import React from 'react';
import Banner from './sections/Banner';
import PopularToys from './sections/PopularToys';
import ToyCategory from './sections/ToyCategory';
import WhyChoose from './sections/WhyChoose';
import Reviews from './sections/Reviews';

const Home = () => {
  return (
    <div>
     <Banner></Banner>
     <PopularToys></PopularToys>
     <ToyCategory></ToyCategory>
     <WhyChoose></WhyChoose>
     <Reviews></Reviews>
    </div>
  );
};

export default Home;