import { RecoilRoot } from 'recoil'
import Slider from './components/Slider'
import { Footer } from './components/Footer'
import React, { useRef, useState } from 'react';
import { Gallery } from './components/Gallery'
import { Navbar } from './components/Navbar';
import { Buttonbar } from './components/Buttonbar';
import { Testimonial } from './components/Testimonial';
import { Infotab } from './components/Infotab';
import { About } from './components/About';
import { Form } from './components/Form';
import { ButtonTab } from './components/ButtonTab';

export default function App() {``
  return (
    <div>
      <RecoilRoot>
        <Navbar></Navbar>
        <Slider />
        <Buttonbar></Buttonbar>
        <About />
        <Infotab></Infotab>
        <Testimonial />
        <Form />
        <Gallery></Gallery>
        <ButtonTab></ButtonTab>
        <Footer />
      </RecoilRoot>
    </div>
  )
}
