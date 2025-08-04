import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import 'swiper/css';
import 'swiper/css/navigation';
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const Team = () => {
  const [trainers, setTrainer] = useState([]);

  useEffect(() => {
    fetch("https://b8a12-server-side-seyam14.vercel.app/trainer")
      .then((res) => res.json())
      .then((data) => setTrainer(data));
  }, []);

  return (
    <section className="my-10 px-4 md:px-10 lg:px-20 rounded-lg max-w-screen-xl mx-auto">
      <SectionTitle subHeading="" heading={"Professional Trainers"} />

      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {trainers.map((trainer) => (
          <SwiperSlide key={trainer._id}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                className="w-36 h-36 object-cover rounded-full mb-4 border-4 border-blue-100"
                src={trainer.image}
                alt={trainer.name}
              />
              <h3 className="text-xl font-bold text-blue-500 mb-1">{trainer.name}</h3>
              <h4 className="text-gray-500 text-sm mb-1">{trainer.skills}</h4>
              <p className="text-gray-600 text-sm mb-2">
                Experience: {trainer.yearsOfExperience} {trainer.yearsOfExperience === 1 ? "year" : "years"}
              </p>

              {/* Optional Social Icons */}
               <div className="flex gap-4 mt-2">
                {trainer.socialIcons?.linkedin && (
                  <a href={trainer.socialIcons.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-blue-600 w-5 h-5 hover:scale-110 transition-transform" />
                  </a>
                )}
                {trainer.socialIcons?.twitter && (
                  <a href={trainer.socialIcons.twitter} target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="text-sky-500 w-5 h-5 hover:scale-110 transition-transform" />
                  </a>
                )}
                {trainer.socialIcons?.github && (
                  <a href={trainer.socialIcons.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-gray-800 w-5 h-5 hover:scale-110 transition-transform" />
                  </a>
                )}
              </div> 
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Team;
