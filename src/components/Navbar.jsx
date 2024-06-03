import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useState, useEffect } from 'react';
import { Example } from './motion-nav/hamburger';

export function Navbar() {
    const [Logic, setLogic] = useState(true);
    const [isBelowThreshold, setIsBelowThreshold] = useState(window.innerWidth < 768);
    useEffect(() => {

        function handleResize() {
          const currentIsBelowThreshold = window.innerWidth < 768;
          if (currentIsBelowThreshold !== isBelowThreshold) {
            setIsBelowThreshold(currentIsBelowThreshold);
            if (!isBelowThreshold) {
              setLogic(false);
            }
            else
            {
                setLogic(true)
            }
          }
        }
    
        window.addEventListener('resize', handleResize);
    
        return () => window.removeEventListener('resize', handleResize);
      }, [isBelowThreshold]);
    

    return (
        <>
            {Logic ? (
                <div className="sticky z-10 top-0 bg-white flex justify-around p-4 pb-4 items-center">
                    <div className="flex gap-2 text-2xl font-medium">
                        <div>DUMMY</div>
                        <div className="text-blue-500">NAME</div>
                    </div>
                    <div className="flex gap-8 items-center">
                        <a href="#"><div className="text-blue-500 hover:text-blue-400">Home</div></a>
                        <a href="#about"><div className="hover:text-slate-500">About</div></a>
                        <Popup trigger={
                            <a href="#">
                                <div className="hover:text-slate-500">Media</div>
                            </a>}
                            position="bottom left" on="hover" closeOnDocumentClick mouseLeaveDelay={300} mouseEnterDelay={300} contentStyle={{ padding: '0px', border: 'none', width: '100px' }} arrow={false}>
                            <div className=" flex-col justify-center ">
                                <div className="flex justify-left hover:bg-gray-500 hover:text-white px-4 py-2 transition-colors duration-300"> <a href='#gallery' style={{ border: 'none', outline: 'none' }}>Gallery</a></div>
                                <div className="flex justify-left  hover:bg-gray-500 hover:text-white px-2 py-2 transition-colors duration-300"> <a href='#testimonials'>Testimonials</a></div>
                                <div className="flex justify-left  hover:bg-gray-500 hover:text-white px-4 py-2 transition-colors duration-300"> <a href='#buttonbar'>Coverage</a></div>
                            </div>
                        </Popup>
                        <a href="#services"> <div className="hover:text-slate-500">Consultancy</div></a>
                        <a href="#form"><div className="hover:text-slate-500">Contact</div></a>
                        <a href="#form"><div className="hover:text-slate-500"> Login</div></a>

                        <a href='#form'>
                            <button className="bg-blue-500 text-white p-2 rounded hover:animate-wiggle">
                                <div>Book Us</div>
                            </button>
                        </a>

                    </div>
                </div>
            ) :         <Example></Example>
        }
        </>
    )
}