

const SubscriberTable = ({item}) => {
    console.log(item);
    const { name, email} = item;
    console.log(name);
      return (
    
        <tr>
          <td>{name}</td>
          <td>{email}</td>
         
        </tr>
   
     
      );
  };
  
  export default SubscriberTable;