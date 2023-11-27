import { Link } from "react-router-dom";

const ApliedTrainerTable = ({item}) => {
    console.log(item);
    const { fullName, email,age} = item;
    console.log(item);
      return (
    
        <tr>
          <td>{fullName}</td>
          <td>{email}</td>
           <td> {age}</td>
           <Link to='/'>
           <button className="btn btn-secondary m-2"> Action </button>
           </Link>
        </tr>
     
      );
  }

export default ApliedTrainerTable;