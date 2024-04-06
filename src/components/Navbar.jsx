import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export function Navbar() {
    return (
        <div className="flex justify-around mt-4 mb-4 items-center">
            <div className="flex gap-2 text-2xl font-medium">
                <div>DUMMY</div>
                <div className="text-blue-500">NAME</div>
            </div>
            <div className="flex gap-8 items-center">
                <a href="#"><div className="text-blue-500 hover:text-blue-400">Home</div></a>
                <a href="#"><div className="hover:text-slate-500">About</div></a>
                <Popup trigger={
                <a href="#">
                    <div className="hover:text-slate-500">Media</div>
                </a>}
                 position="bottom left" on="hover" closeOnDocumentClick mouseLeaveDelay={300} mouseEnterDelay={300} contentStyle={{ padding: '0px', border: 'none', width:'100px' }} arrow={false}>
                    <div className=" flex-col justify-center ">
                    <div className="flex justify-left hover:bg-gray-500 hover:text-white px-4 py-2 transition-colors duration-300"> <a href='#' style={{ border: 'none', outline: 'none' }}>Gallery</a></div>
                      <div className="flex justify-left  hover:bg-gray-500 hover:text-white px-4 py-2 transition-colors duration-300"> <a href='#'>Montage</a></div>
                        <div className="flex justify-left  hover:bg-gray-500 hover:text-white px-4 py-2 transition-colors duration-300"> <a href='#'>Coverage</a></div>
                    </div>
                </Popup>
                <a href="#"> <div className="hover:text-slate-500">Consultancy</div></a>
                <a href="#"><div className="hover:text-slate-500">Contact</div></a>
                <a href="#"><div className="hover:text-slate-500"> Login</div></a>

                <button className="bg-blue-500 text-white p-2 rounded hover:animate-wiggle">
                    <div>Book Us</div>
                </button>

            </div>

        </div>
    )
}