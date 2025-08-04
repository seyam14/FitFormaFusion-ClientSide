import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import 'swiper/css';
import 'swiper/css/navigation';

import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import { motion } from "framer-motion";

const LatestArticles = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch('https://b8a12-server-side-seyam14.vercel.app/latestArticles')
            .then(res => res.json())
            .then(data => setArticles(data))
    }, []);

    return (
        <section className="my-20 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-blue-50 via-purple-50 to-purple-100 py-16 rounded-lg shadow-inner">
            <SectionTitle
                subHeading="Here are some Articles"
                heading="Latest Articles"
            />

            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
                spaceBetween={30}
                slidesPerView={1}
            >
                {articles.map(article => (
                    <SwiperSlide key={article._id}>
                        <motion.div
                            className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-6 flex flex-col items-center text-center transition-all duration-300 hover:scale-[1.02]"
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <img
                                className="w-full h-48 md:h-60 object-cover rounded-md mb-4 shadow"
                                src={article.image}
                                alt={article.title}
                            />
                            <h3 className="text-xl md:text-2xl font-semibold text-blue-700 mb-2">
                                {article.title}
                            </h3>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                {article.content}
                            </p>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default LatestArticles;
