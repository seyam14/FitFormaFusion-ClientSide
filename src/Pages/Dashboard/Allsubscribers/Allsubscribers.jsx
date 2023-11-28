import axios from "axios";
import { useEffect, useState } from "react";
import SubscriberTable from "./SubscriberTable/SubscriberTable";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";


const Allsubscribers = () => {

        const [data, setData] = useState([]);
        useEffect(() => {
    
            axios.get('http://localhost:5000/newsletterInfo')
                .then(res => setData(res.data))
        }, [])
    
        console.log(data);
        return (
            <div>
              <SectionTitle
                subHeading="Data From Newsletter"
                heading="subscribers"
              ></SectionTitle>
              <div className="ml-6">
              <div className="overflow-x-auto">
        <table className="table">
        {/* head */}
        <thead>
          <tr>
            
            <th>Name</th>
            <th>Email</th>
          
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
    
                {
                    data?.map((item) => <SubscriberTable key={item._id} item={item}></SubscriberTable>)
                }
    
    </tbody>
      </table>
    </div>
            </div>
            </div>
        );
    };
export default Allsubscribers;