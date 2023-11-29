import { useEffect, useState } from "react";
import TrainerCard from "./TrainerCard/TrainerCard";
import SectionTitle from "../../Component/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet";



const Trainer = () => {
    const [trainers, setTrainers] = useState([]);

    useEffect(() => {
      // Fetch trainers from the backend API when the component mounts
      const fetchTrainers = async () => {
        try {
          const response = await fetch('https://b8a12-server-side-seyam14.vercel.app/trainer');
          const data = await response.json();
          setTrainers(data);
        } catch (error) {
          console.log('Error fetching trainers:', error);
        }
      };
  
      fetchTrainers();
    }, []);
  
    const handleKnowMoreClick = (trainer) => {
      // Implement logic to handle the "Know More" button click, e.g., redirect to Trainer Details page
      console.log(`Redirect to Trainer Details page for ${trainer.name}`);
    };
  
    return (
      <div>
         <Helmet>
            <title>FitFF|Trainer</title>
        </Helmet>
        <SectionTitle
      subHeading="Meet Our Expert Trainers: Dedicated Professionals Guiding Your Fitness Journey"
      heading="Trainer Profiles"
    ></SectionTitle>
      <div className="bg-gray-200 min-h-screen">
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((trainer) => (
              <TrainerCard key={trainer._id} trainer={trainer} onKnowMoreClick={handleKnowMoreClick} />
            ))}
          </div>
        </div>
      </div>
      </div>
    );
  };
  
    
  

export default Trainer;