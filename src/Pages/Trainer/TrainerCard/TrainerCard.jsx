
// import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TrainerCard = ({ trainer }) => {
    const {_id}=trainer;
  return (
    <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md my-8">
      <img src={trainer.image} alt='' className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 text-center">{trainer.name}</h2>
        <p className="text-gray-600 mb-2">Years of Experience: {trainer.yearsOfExperience}</p>
        {/* <div className="flex justify-center space-x-4 mb-4">
          <a href={trainer.socialIcons.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a href={trainer.socialIcons.twitter} target="_blank" rel="noopener noreferrer">
            <FaTwitter className="w-6 h-6" />
          </a>
          <a href={trainer.socialIcons.github} target="_blank" rel="noopener noreferrer">
            <FaGithub className="w-6 h-6" />
          </a>
        </div> */}
        <Link to={`/userbooked`}>
        <p className="text-blue-500">Available Time Slots:</p>
        </Link>
        {/* <ul className="list-disc ml-6 ">
          {trainer.availableTimeSlots.map((slot, index) => (
            <li key={index}>{slot}</li>
          ))}
        </ul> */}
        <Link to={`/trainerdetails/${_id}`}>
        <button className="mt-4 bg-purple-500 text-white px-4 py-2 rounded-md">
          Know More
        </button>
        </Link>
        
      </div>
    </div>
  );
};

export default TrainerCard;
