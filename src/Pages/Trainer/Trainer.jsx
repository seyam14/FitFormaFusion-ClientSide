import { useEffect, useState } from "react";
import TrainerCard from "./TrainerCard/TrainerCard";



const Trainer = () => {
    const [trainers, setTrainers] = useState([]);

    useEffect(() => {
      // Fetch trainers from the backend API when the component mounts
      const fetchTrainers = async () => {
        try {
          const response = await fetch('http://localhost:5000/trainer');
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
      <div className="bg-gray-200 min-h-screen">
        <div className="container mx-auto py-8">
          <h1 className="text-4xl font-bold text-center mb-8">Trainer Profiles</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((trainer) => (
              <TrainerCard key={trainer._id} trainer={trainer} onKnowMoreClick={handleKnowMoreClick} />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
    
  

export default Trainer;