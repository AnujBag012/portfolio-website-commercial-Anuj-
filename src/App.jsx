import { RecoilRoot } from 'recoil'
import Slider from './components/Slider'
import { Footer } from './components/Footer'
import React, { useRef, useState } from 'react';
import { Gallery } from './components/Gallery'
import { Navbar } from './components/Navbar';
import { Particle } from './components/Particle';
import { Buttonbar } from './components/Buttonbar';
import { Testimonial } from './components/Testimonial';
import { Infotab } from './components/Infotab';
import { About } from './components/About';
import { Form } from './components/Form';

import {ButtonTab} from './components/ButtonTab';

export default function App() {
  return (
    <div>
      <RecoilRoot>
        {/* <Slider/>
        <Footer/>
        <Gallery></Gallery>
        <Navbar></Navbar>
        <Buttonbar></Buttonbar>
        <Testimonial/>
        <Infotab></Infotab> */}
        {/* <Form /> */}
        {/* <Slider/> */}
        {/* <Gallery></Gallery> */}
        {/* <Navbar></Navbar> */}
        {/* <Buttonbar></Buttonbar> */}
        {/* <Testimonial/> */}
        {/* <Infotab></Infotab> */}
        {/* <Navbar></Navbar> */}
        {/* <Form /> */}
        {/* <About/> */}
        <ButtonTab></ButtonTab>
      </RecoilRoot>
    </div>
  )
}
