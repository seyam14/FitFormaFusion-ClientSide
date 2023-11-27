

const TrainersTable = ({item}) => {
    console.log(item);
    const {image, name, role,yearsOfExperience} = item;
    console.log(item);
      return (
    
        <tr>
          <img className="w-12 h-12 m-2" src={image} alt="" />
          <td>{name}</td>
          <td>{role}</td>
           <td>{yearsOfExperience}</td>
        </tr>
     
      );
  };
export default TrainersTable;