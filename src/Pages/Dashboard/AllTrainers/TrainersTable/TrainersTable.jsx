import { Link } from "react-router-dom";


const TrainersTable = ({item}) => {
    console.log(item);
    const {_id,image, name,yearsOfExperience, salary,skills} = item;
    console.log(_id);
    console.log(item);
      return (
    
        <tr>
          <img className="w-12 h-12 m-2" src={image} alt="" />
          <td>{name}</td>
          <td>{skills}</td>
           <td>{yearsOfExperience}</td>
           <td> ${salary}</td>
           <Link to={`/dashboard/payment/${item._id}/${item.salary}`}>
           <button className="btn btn-secondary m-2">Pay </button>
           </Link>
        </tr>
     
      );
  };
export default TrainersTable;