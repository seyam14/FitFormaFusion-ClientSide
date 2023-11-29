import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { Helmet } from "react-helmet";


const TrainerDetails = () => {
  const{_id}=useLoaderData({});
  const [myData, setData] = useState(null);

  useEffect(() => {
    if (_id) {
      axios.get(`https://b8a12-server-side-seyam14.vercel.app/trainer/${_id}`)
        .then(res => res.data)
        .then(data => setData(data))
        .catch(error => console.error('Error fetching data:', error));
    } else {
      console.error('Trainer ID not found in route params');
    }
  }, [_id]);

  if (!myData) {
    return <div><p>Loading...</p></div>;
  }
 

  return ( 
    <div className=" mx-auto mt-9">
      <Helmet>
        <title>FitFF|Details</title>
     </Helmet>
        <div key={myData._id} className="bg-white  flex overflow-hidden shadow rounded-lg">
        <div className="flex">
        <div>
            <img className="w-full h-96 object-cover object-center" src={myData.image} alt='' />
        </div>
        <div>
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">{myData.name}</h2>
          <p className="text-gray-600 mb-4">{myData.skills}</p>
          <p className="text-gray-700"> Years of Experience:{myData.yearsOfExperience}</p>
          <div className="mb-4">
          <p className="text-gray-700">Available Time Slots:</p>
                <ul className="list-disc ml-6">
                  {myData.availableTimeSlots.map((slot, index) => (
                    <li key={index}>{slot}</li>
                  ))}
                </ul>
          </div>
          <div className="flex justify-center space-x-4 mb-4">
          <a href={myData.socialIcons.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a href={myData.socialIcons.twitter} target="_blank" rel="noopener noreferrer">
            <FaTwitter className="w-6 h-6" />
          </a>
          <a href={myData.socialIcons.github} target="_blank" rel="noopener noreferrer">
            <FaGithub className="w-6 h-6" />
          </a>
        </div>
        </div>
        </div> 
        </div>
      </div>
      <div className="justify-center flex m-6">
        <Link to={'/becometrainer'}> <button className="btn btn-secondary">Become a Trainer</button>  </Link>
        </div>
    </div>

  );
};

export default TrainerDetails;
