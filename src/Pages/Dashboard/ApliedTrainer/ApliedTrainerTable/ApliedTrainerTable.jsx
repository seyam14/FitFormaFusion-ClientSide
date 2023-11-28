
import axios from 'axios';
import { FaEye } from 'react-icons/fa';
import Swal from 'sweetalert2';

const ApliedTrainerTable = ({ item,reFetch }) => {


  const {_id, name, email, age, AvailableTimeinaweek, AvailableTimeinaday, skills, role } = item;

  const handleConfirmation = async() => {
    const res = await axios.patch(`http://localhost:5000/becomeTrainer/${_id}`);
    console.log(res.data);
    reFetch();
    Swal.fire({
     title: 'Success!',
     text: 'Trainer confirmation Successfully',
     icon: 'success',
     confirmButtonText: 'Cool'
 })
     
   };

  return (
    <tr className="m-6">
      <td>{name}</td>
      <td>{email}</td>
      <td> {role}</td>

      <button className="btn " onClick={() => document.getElementById(`modal${_id}`).showModal()}>
        <FaEye />
      </button>
      <dialog id={`modal${_id}`} className="modal">
        <div className="modal-box text-center">
          <h3 className="font-bold text-lg"> Name: {name}</h3>
          <p className="py-2">E-mail: {email}</p>
          <p className="py-2">Age: {age}</p>
          <p className="py-2">Skills: {skills}</p>
          <p className="py-2">Available Time in a week: {AvailableTimeinaweek}</p>
          <p className="py-2">Available Time in a day: {AvailableTimeinaday}</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
            <button onClick={handleConfirmation} className="btn btn-success mr-10" >
              Confirm
            </button>
            <button className="btn btn-error" >
              Reject
            </button>
          </div>
        </div>
      </dialog>
      

    </tr>
  );
};

export default ApliedTrainerTable;
