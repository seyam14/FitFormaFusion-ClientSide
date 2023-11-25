  import { Swiper, SwiperSlide } from "swiper/react";
  import { Navigation } from "swiper/modules";
  import { useEffect, useState } from "react";
  import 'swiper/css';
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";


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
                        <h3 className="text-2xl text-blue-400">{trainer.name}</h3>
                        <h2 className="text-xl ">{trainer.role}</h2>    
                        <p className="py-8">{trainer.description}</p>
                        
                    </div>
                </SwiperSlide>)
            }
        </Swiper>
    </section>
);
};

export default Team;