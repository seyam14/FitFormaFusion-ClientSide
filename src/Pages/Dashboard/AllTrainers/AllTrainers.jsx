
import axios from "axios";
import { useEffect, useState } from "react";
import TrainersTable from "./TrainersTable/TrainersTable";


const AllTrainers = () => {
    const [data, setData] = useState([]);
        useEffect(() => {
    
            axios.get('http://localhost:5000/trainer')
                .then(res => setData(res.data))
        }, [])
    
        console.log(data);
        return (
            <div>
                      <div className="ml-6">
              <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>image</th> 
            <th>Name</th>
            <th>Role</th>
            <th>Years Of Experience</th>
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