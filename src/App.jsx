import React, { useRef, useState } from 'react';
import {RecoilRoot} from 'recoil';
import {Gallery} from './components/Gallery'
import { Navbar } from './components/Navbar';


export default function App() {
  return (
      <div>
        <RecoilRoot>
          {/* <Gallery></Gallery> */}
          {/* <Navbar></Navbar> */}
        </RecoilRoot>
      </div>
  );
}
