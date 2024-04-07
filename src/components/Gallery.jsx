import {Swipe} from './Swipe'


export function Gallery() {
    return (
        <div className="grid justify-items-center" id='gallery'>
        <div className="flex items-center flex-col w-full">
            <div className="flex-1 border-t border-gray-400"></div>
            <div className="px-4 text-4xl">Gallery</div>
            <div className="py-4 text-gray-700">Cherishing Moments</div>
            <div className='pb-[750px]'><Swipe/></div>
        </div>
       
        </div>

    )
}