import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import 'swiper/css';
import 'swiper/css/navigation';

import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";

import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const SuccessStories = () => {
    const [successStories, setSuccessStories] = useState([]);

    useEffect(() => {
        fetch('https://b8a12-server-side-seyam14.vercel.app/SuccessStories')
            .then(res => res.json())
            .then(data => setSuccessStories(data))
    }, []);

    return (
        <section className="my-20 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-blue-50 via-white to-purple-50 py-16 rounded-lg shadow-inner">
            <SectionTitle
                subHeading="Real stories"
                heading="Success Stories"
            />

            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
                spaceBetween={40}
                slidesPerView={1}
            >
                {successStories.map(story => (
                    <SwiperSlide key={story._id}>
                        <motion.div
                            className="max-w-3xl mx-auto bg-white bg-opacity-70 backdrop-blur-md border border-purple-300 rounded-2xl shadow-xl p-8 text-center"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-purple-600 text-3xl mb-4">
                                <FaQuoteLeft />
                            </div>

                            <p className="text-gray-700 text-base md:text-lg leading-relaxed italic mb-6">
                                {story.story}
                            </p>

                            <div className="flex flex-col items-center gap-2">
                                <img
                                    src={story.avatar || "https://i.pravatar.cc/100?u=" + story._id}
                                    alt="avatar"
                                    className="w-16 h-16 rounded-full object-cover border-2 border-purple-500 shadow"
                                />
                                <h3 className="text-xl font-semibold text-purple-800">{story.name}</h3>
                                <Rating
                                    style={{ maxWidth: 160 }}
                                    value={story.rating}
                                    readOnly
                                />
                            </div>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default SuccessStories;
