import { useEffect, useState } from 'react';
import axios from 'axios';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';

const RecommendedClasses = () => {
  const [recommendedClasses, setRecommendedClasses] = useState([]);

  useEffect(() => {
    const apiUrl = 'http://localhost:5000/trainer';

    axios.get(apiUrl)
      .then(response => {
        setRecommendedClasses(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <SectionTitle subHeading="Recommended for users" heading="Classes" />

      <ul className="m-8 space-y-2">
        {recommendedClasses.map((course) => (
          <li key={course.id} className="flex items-center">
            <h2 className="font-semibold">{course.skills}</h2>
            <br />
            <h2 className="ml-2">- <span className='text-blue-700'> Instructor:</span> {course.name}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendedClasses;
