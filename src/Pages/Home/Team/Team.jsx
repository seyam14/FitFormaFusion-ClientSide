  import { Swiper, SwiperSlide } from "swiper/react";
  import { Navigation } from "swiper/modules";
  import { useEffect, useState } from "react";
  import 'swiper/css';
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";

import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';


const Team = () => {
    const [trainers, setTrainer] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/trainer')
            .then(res => res.json())
            .then(data => setTrainer(data))
    }, [])

    return (
        <section className="my-10  rounded-lg">
           <SectionTitle
        subHeading=" "
        heading={' Professional Trainers'}
    ></SectionTitle>

        <Swiper navigation={true} modules={[Navigation]} className="mySwiper"> 

            {
                trainers.map(trainer=> <SwiperSlide
                    key={trainer._id}
                >
                    <div className="flex flex-col items-center mx-20 my-10">
                        <img className="w-40 h-25" src={trainer.image} alt="" />
                        <h3 className="text-2xl font-semibold mb-2 text-blue-400">{trainer.name}</h3>
                        <h2 className="text-gray-600 mb-2">{trainer.role}</h2>    
                        <p className="text-gray-700 mb-4">Years of Experience: {trainer.yearsOfExperience}</p>
                        <div className="flex justify-center space-x-4 mb-4">
                        <a href={trainer.socialIcons.linkedin} target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="w-6 h-6" />
                        </a>
                        <a href={trainer.socialIcons.twitter} target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="w-6 h-6" />
                        </a>
                        <a href={trainer.socialIcons.github} target="_blank" rel="noopener noreferrer">
                            <FaGithub className="w-6 h-6" />
                        </a>
                        </div>
                        <p className="text-gray-700">Available Time Slots:</p>
                        <ul className="list-disc ml-6">
                        {trainer.availableTimeSlots.map((slot) => (
                            <li key={slot}>{slot}</li>
                        ))}
                        </ul>
                    </div>
                </SwiperSlide>)
            }
        </Swiper>
    </section>
);
};

export default Team;