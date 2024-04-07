export const Footer = () => {
    return <div className="flex realtive bottom-0">
        <div className="absolute left-0 bottom-0 bg-black w-full h-96 pl-96 pr-96">
            <div id="about" className="">
                <div className="flex gap-6 pt-4 pb-8">
                    <div className="bg-blue-400 text-sm text-blue-400">a</div>
                    <div className="text-white text-xl">ABOUT</div>
                </div>
                <div className="flex gap-2 text-3xl font-semibold pb-8">
                    <div className="text-blue-500">ABC</div>
                    <div className="text-white">USER</div>
                </div>
                <div className="text-sm text-white font-light pb-8">
                    Mr. Abc User is the founder of 
                    <br></br>ABC GROUP OF COMPANIES (INDIA).
                    <br></br> An Author, Educator,Business
                    <br></br>Consultant, and successful Entrepreneur
                    <br></br>he is a much sought-after speaker.
                </div>
                <div className="text-white font-medium text-lg">
                    Connect whith ABC User
                </div>
            </div>
        </div>
    </div>
}