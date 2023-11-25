import { Swiper, SwiperSlide } from "swiper/react";
  import { Navigation } from "swiper/modules";
  import { useEffect, useState } from "react";
  import 'swiper/css';
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";

const LatestArticles = () => {

        const [articles, setArticles] = useState([]);
    
        useEffect(() => {
            fetch('http://localhost:5000/latestArticles')
                .then(res => res.json())
                .then(data => setArticles(data))
        }, [])
    
        return (
            <section className="my-10  rounded-lg">
               <SectionTitle
            subHeading="Here are some Article "
            heading={'Latest Articles'}
        ></SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper"> 
    
                {
                    articles.map(article=> <SwiperSlide
                        key={article._id}
                    >
                        <div className="flex flex-col items-center mx-20 my-10">
                            <img className="w-40 h-25" src={article.image} alt="" />
                            <h3 className="text-2xl text-blue-400">{article.title}</h3>    
                            <p className="py-8">{article.content}</p>
                            
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
    };

export default LatestArticles;