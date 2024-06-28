export const Footer = () => {
    return <div className="hidden md:block footer md:flex bottom-0 mt-80">
        <div className="z-10 flex gap-28 bottom-0 bg-black w-full h-96 pl-96 pr-96">
            <div>
                <div className="flex gap-6 pt-4 pb-8">
                    <div className="bg-blue-400 text-sm text-blue-400">a</div>
                    <div className="text-white text-xl">ABOUT</div>
                </div>
                <div className="flex gap-2 text-3xl font-semibold pb-8">
                    <div className="text-blue-500">Siddhant</div>
                    <div className="text-white">Seth</div>
                </div>
                <div className="text-sm text-white font-light pb-8">
                    Mr. Siddhant Seth ranked among top 10
                    <br></br>Buissness Proffesionals(INDIA).
                    <br></br> A Leader, Educator,Business
                    <br></br>Consultant, and successful Entrepreneur
                    <br></br>he is a much sought-after speaker.
                </div>
                {/* <div className="text-white font-medium text-lg">
                    Connect whith ABC User
                </div> */}
            </div>
            <div className="text-white">
                <div className="flex gap-6 pt-4 pb-8">
                    <div className="bg-blue-400 text-sm text-blue-400">a</div>
                    <div className="text-white text-xl">QUICK LINKS</div>
                </div>
                <div className="grid gap-4">
                    <div>About Us</div>
                    <div>Store</div>
                    <div>Book A Show</div>
                    <div>Corporate Events</div>
                    <div>Become A Affiliate</div>
                    <div>Upcoming Events</div>
                </div>
            </div>
            <div>
                <div className="flex gap-6 pt-4 pb-8">
                    <div className="bg-blue-400 text-sm text-blue-400">a</div>
                    <div className="text-white text-xl">EXPLORE</div>
                </div>
                <div className="grid gap-4 text-white">
                    <div>Order Tracking</div>
                    <div>Privacy Policy</div>
                    <div>Shipping Policy</div>
                    <div>Refund/Exchange Policy</div>
                    <div>Subscription Agreement</div>
                    <div>Payment Links</div>
                </div>
            </div>
            <div>
                <div className="flex gap-6 pt-4 pb-8">
                    <div className="bg-blue-400 text-sm text-blue-400">a</div>
                    <div className="text-white text-xl">Get in Touch</div>
                </div>
                <div>
                    <form className="text-white grid gap-1" action="/submit_form" method="POST">
                        {/* <label form="name">Name</label>
                        <br></br> */}
                        <input className="outline-none bg-black border border-gray-400 p-2" placeholder="Name" type="text" id="name" name="name"></input>
                        <br></br>
                        {/* <label form="name">Name</label>
                        <br></br> */}
                        <input className="outline-none bg-black border border-gray-400 p-2" placeholder="Mobile" type="text" id="name" mobile="mobile"></input>
                        <br></br>
                        {/* <label form="name">Name</label>
                        <br></br> */}
                        <input className="outline-none bg-black border border-gray-400 p-2" placeholder="Email" type="text" id="name" email="email"></input>
                        <br></br>
                        {/* <label form="name">Name</label>
                        <br></br> */}
                        <input className="outline-none bg-black border border-gray-400 p-2" placeholder="Message" type="text" id="name" message="message"></input>
                        <br></br>
                        <input className="bg-white text-black rounded m-4 pt-2 pb-2" type="submit" value="Send"></input>
                    </form>
                </div>
            </div>
        </div>
    </div>
}