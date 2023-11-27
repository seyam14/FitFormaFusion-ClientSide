import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllClassesSection = () => {
  const [classesData, setClassesData] = useState([]);

  useEffect(() => {
    const fetchTrainersData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/trainer');
        console.log('API Response:', response.data);

        if (Array.isArray(response.data)) {
          setClassesData(response.data);
        } else {
          console.error('Invalid data format received from the API. Expected an array.');
        }
      } catch (error) {
        console.error('Error fetching trainers data:', error);
      }
    };

    fetchTrainersData();
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4 text-center">All Classes</h1>

      <div className="grid grid-cols-3 gap-4">
        {Array.isArray(classesData) &&
          classesData.map((classInfo) => (
            <div key={classInfo.id} className="border p-4 cursor-pointer">
              <img className='w-25 h-20 justify-center' src={classInfo.image} alt="" />
              <h2 className="text-lg font-semibold mb-2">{classInfo.name}</h2>
              <p>Class: {classInfo.role}</p>
              <p>Details: {classInfo.details}</p>
              <Link to='/trainer'>
              <button className="bg-blue-500 text-white px-4 py-2 mt-2" >
                Join Now
              </button>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AllClassesSection;