

const TrainersTable = ({item}) => {
    console.log(item);
    const {image, name, role,yearsOfExperience} = item;
    console.log(item);
      return (
    
        <tr>
          <img className="w-20 h-20" src={image} alt="" />
          <td>{name}</td>
          <td>{role}</td>
           <td>{yearsOfExperience}</td>
        </tr>
     
      );
  };
export default TrainersTable;