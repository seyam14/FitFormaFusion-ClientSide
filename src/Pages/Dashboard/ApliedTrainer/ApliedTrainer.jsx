import axios from "axios";
import { useEffect, useState } from "react";
import ApliedTrainerTable from "./ApliedTrainerTable/ApliedTrainerTable";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";


const ApliedTrainer = () => {
    const [data, setData] = useState([]);
    const [reloadData, setReloaddata] = useState(true);
    
    useEffect(() => {
        axios.get('https://b8a12-server-side-seyam14.vercel.app/becomeTrainer')
            .then(res => setData(res.data))
    }, [])

    const reFetch = () => {
      setReloaddata(!reloadData)
  }

    console.log(data);
    return (
        <div>
          <SectionTitle
                subHeading="Make trainer and Reject "
                heading=" Maintain"
              ></SectionTitle>
                  <div className="ml-6">
          <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>FullName</th> 
        <th>E-mail</th>
        <th>Role</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     
            {
                data?.map((item) => <ApliedTrainerTable key={item._id} item={item} reFetch={reFetch}></ApliedTrainerTable> )
            }

</tbody>
  </table>
</div>
        </div>
        </div>
    );
};

export default ApliedTrainer;