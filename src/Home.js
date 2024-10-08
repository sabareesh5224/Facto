import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Slider from './Slider/Slider';
import Desc from './Desc/Desc';
import Searchbar from './SearchBar/Searchbar';
import Accordion from './Accordion/Accordion';

export const Home = () => {
  return (
    <>
    <Navbar/>
    <Slider/>
    <Searchbar/>
    <Desc/>
   
   
    </>
    
  )
}
