import SwipeTestimonials from "./SwipeTestimonials";

export const Testimonial = () => {
    return (
        <div className="relative mb-16" id="testimonials">
            <div
                className="absolute inset-0 bg-cover bg-center bg-white"
                style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1661297516412-e9eb1fc3e317?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2hpdGUlMjBiYWNrZ3JvdW5kcyUyMGRlc2lnbnMlMjBkZXNrb3B8ZW58MHx8MHx8fDA%3D')" }}
            />
            <div className="relative">
                <div className="p-3">
                    <div className="text-white flex justify-center items-center pb-3">
                        <div className="flex items-center">
                            <div className="border border-gray-500 w-96"></div>
                            <div className="ml-3 mr-3 text-4xl text-black font-semibold">Testimonials</div>
                            <div className="border border-gray-500 w-96"></div>
                        </div>
                    </div>
                    <div className="flex justify-center text-gray-600 text-lg pb-4">Trusted By</div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="w-7/12">
                        <SwipeTestimonials />
                    </div>
                </div>
            </div>
        </div>
    );
};
