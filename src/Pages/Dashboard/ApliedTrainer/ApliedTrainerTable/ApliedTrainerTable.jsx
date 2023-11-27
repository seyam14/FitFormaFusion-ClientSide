

const ApliedTrainerTable = ({item}) => {
    console.log(item);
    const { fullName, email,age} = item;
    console.log(item);
      return (
    
        <tr>
          <td>{fullName}</td>
          <td>{email}</td>
           <td> {age}</td>
           <button className="btn btn-secondary m-2"> Action </button>
        </tr>
     
      );
  }

export default ApliedTrainerTable;