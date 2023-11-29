import Axios from "axios";
import { useEffect, useState } from "react";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";

const GymSchedule = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get('https://b8a12-server-side-seyam14.vercel.app/weeklySchedule')
      .then(res => setData(res.data))
      .catch(error => console.error('Error fetching weekly schedule', error));
  }, []);

  console.log(data);

  return (
    <div>
       <SectionTitle
        subHeading="Daily activities for Member"
        heading="Weekly schedule"
      ></SectionTitle> 
      <div className="overflow-x-auto bg-slate-400">
        <table className="table table-zebra">
          <thead className="bg-slate-50 text-lg">
            <tr>
              <th>Time</th>
              <th>Saturday</th>
              <th>Sunday</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => (
              <tr key={item._id}>
                <td className=""> {item.time}</td>
                <td>
                  <h1 className="font-bold"> {item.name}</h1> <br />
                </td>
                <td>
                  <h1 className="font-bold"> {item.name}</h1> <br />
                </td>
                <td>
                  <h1 className="font-bold"> {item.name}</h1> <br />
                </td>
                <td>
                  <h1 className="font-bold"> {item.name}</h1> <br />
                </td>
                <td>
                  <h1 className="font-bold"> {item.name}</h1> <br />
                </td>
                <td>
                  <h1 className="font-bold"> {item.name}</h1> <br />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GymSchedule;
