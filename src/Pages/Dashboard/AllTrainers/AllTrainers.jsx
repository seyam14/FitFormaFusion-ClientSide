
import axios from "axios";
import { useEffect, useState } from "react";
import TrainersTable from "./TrainersTable/TrainersTable";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";


const AllTrainers = () => {
    const [data, setData] = useState([]);
    
        useEffect(() => {
            axios.get('http://localhost:5000/trainer')
                .then(res => setData(res.data))
        }, [])
    
        console.log(data);
        return (
            <div>
              <SectionTitle
                subHeading="Show Trainer Info"
                heading="Trainers"
              ></SectionTitle>
                <div className="ml-6">
              <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>image</th> 
            <th>Name</th>
            <th>Class</th>
            <th>Years Of Experience</th>
            <th>Monthly salary</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
         
                {
                    data?.map((item) => <TrainersTable  key={item._id} item={item}></TrainersTable> )
                }
    
    </tbody>
      </table>
    </div>
            </div>
            </div>
        );
    };

export default AllTrainers;