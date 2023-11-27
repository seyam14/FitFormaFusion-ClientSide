import { useState } from 'react';
import { FaEye } from 'react-icons/fa';

const ApliedTrainerTable = ({ item }) => {
  const [confirmation, setConfirmation] = useState(false);
  const [rejection, setRejection] = useState(false);

  const { fullName, email, age, AvailableTimeinaweek, AvailableTimeinaday, Skills } = item;

  const handleConfirmation = () => {
    setConfirmation(true);
  };

  const handleRejection = () => {
    setRejection(true);
  };

  return (
    <tr className="m-6">
      <td>{fullName}</td>
      <td>{email}</td>
      <td> {age}</td>
      <button className="btn " onClick={() => document.getElementById('my_modal_1').showModal()}>
        <FaEye />
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box text-center">
          <h3 className="font-bold text-lg"> Name: {fullName}</h3>
          <p className="py-2">E-mail: {email}</p>
          <p className="py-2">Age: {age}</p>
          <p className="py-2">Skills: {Skills}</p>
          <p className="py-2">Available Time in a week: {AvailableTimeinaweek}</p>
          <p className="py-2">Available Time in a day: {AvailableTimeinaday}</p>
          <div className="modal-action">
          <form method="dialog">
            <button className="btn">Close</button>
            </form>
            <button className="btn btn-success mr-10" onClick={handleConfirmation}>
              Confirm
            </button>
            <button className="btn btn-error" onClick={handleRejection}>
              Reject
            </button>
          </div>
        </div>
      </dialog>
      {confirmation && <p>User confirmed and status updated.</p>}
      {rejection && <p>Email sent to the user.</p>}
    </tr>
  );
};

export default ApliedTrainerTable;
