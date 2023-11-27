import axios from "axios";
import { useEffect, useState } from "react";
import ApliedTrainerTable from "./ApliedTrainerTable/ApliedTrainerTable";


const ApliedTrainer = () => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:5000/becomeTrainer')
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
        <th>FullName</th> 
        <th>E-mail</th>
        <th>Age</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     
            {
                data?.map((item) => <ApliedTrainerTable key={item._id} item={item}></ApliedTrainerTable> )
            }

</tbody>
  </table>
</div>
        </div>
        </div>
    );
};

export default ApliedTrainer;