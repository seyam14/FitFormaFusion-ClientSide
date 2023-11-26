import { useEffect, useState } from "react";
import axios from "axios";

const WeeklyscheduleSection = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/weeklySchedule")
      .then((res) => setData(res.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  console.log(data);

  return (
    <div>
      <div className="overflow-x-auto bg-slate-400 m-4 rounded-xl">
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
                  <p className="text-xs"> {item.activity}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WeeklyscheduleSection;
