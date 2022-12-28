import React from 'react';
import SectionEight from '../Components/HomeComponents/SectionEight';
import SectionFive from '../Components/HomeComponents/SectionFive';
import SectionFour from '../Components/HomeComponents/SectionFour';
import SectionOne from '../Components/HomeComponents/SectionOne';
import SectionSeven from '../Components/HomeComponents/SectionSeven';
import SectionSix from '../Components/HomeComponents/SectionSix';
import SectionThree from '../Components/HomeComponents/SectionThree';
import SectionTwo from '../Components/HomeComponents/SectionTwo';
import '../CSS/home.css';

const Home = () => {
  return (
    <>
    <SectionOne/>
    <SectionTwo/>
    <SectionThree/>
    <SectionFour/>
    <SectionFive/>
    <SectionSix/>
    <SectionSeven/>
    <SectionEight/>
    </>
  )
}

export default Home