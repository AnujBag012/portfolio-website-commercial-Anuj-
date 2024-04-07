import { RecoilRoot } from 'recoil'
import Slider from './components/Slider'
import { Footer } from './components/Footer'
import React, { useRef, useState } from 'react';
import { Gallery } from './components/Gallery'
import { Navbar } from './components/Navbar';
import { Particle } from './components/Particle';
import { Buttonbar } from './components/Buttonbar';
import { Testimonial } from './components/Testimonial';
import { About } from './components/About';
import { Form } from './components/Form';


export default function App() {
  return (
    <div>
      <RecoilRoot>
        {/* <Navbar></Navbar> */}
        {/* <Slider/> */}
        {/* <Gallery></Gallery> */}
        {/* <Buttonbar></Buttonbar> */}
        {/* <Form /> */}
        {/* <About/> */}
        {/* <Testimonial/> */}
        {/* <Footer/> */}
      </RecoilRoot>
    </div>
  )
}
