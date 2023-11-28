import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';

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
        <SectionTitle
        subHeading="Trainer and classes"
        heading="All Classes"
      ></SectionTitle> 

      <div className="grid grid-cols-3 gap-4">
        {Array.isArray(classesData) &&
          classesData.map((classInfo) => (
            <div key={classInfo.id} className="border p-4 cursor-pointer">
              <h2 className="text-lg font-semibold mb-2"> <span className='text-blue-500'>Trainer name: </span>{classInfo.name}</h2>
              <p> <span className='text-blue-500'>Class: </span>{classInfo.skills}</p>
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
