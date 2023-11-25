import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import 'swiper/css';

import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const SuccessStories = () => {
    const [SuccessStories, setSuccessStories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/SuccessStories')
            .then(res => res.json())
            .then(data => setSuccessStories(data))
    }, [])

    return (
        <section className="my-20 bg-purple-200  rounded-lg">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper"> 

            {
                SuccessStories.map(SuccessStory => <SwiperSlide
                    key={SuccessStory._id}
                >
                    <div className="flex flex-col items-center mx-24 my-16">
                    
                        <h3 className="text-2xl text-orange-400">{SuccessStory.name}</h3>    
                        <p className="py-8">{SuccessStory.story}</p>
                        <Rating
                                style={{ maxWidth: 180 }}
                                value={SuccessStory.rating}
                                readOnly
                            />
                        
                    </div>
                </SwiperSlide>)
            }
        </Swiper>
    </section>
);
};
export default SuccessStories;