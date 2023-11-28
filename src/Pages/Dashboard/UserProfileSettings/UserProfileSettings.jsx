import { useState, useEffect } from 'react';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';

const UserProfileSettings = () => {
  // State to store user data
  const [user, setUser] = useState({
    name: '',
    email: '',
  });

  // State to manage form inputs
  const [editedUser, setEditedUser] = useState({ ...user });

  // Simulate fetching user data from a database
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost:5000/user'); // Replace with your API endpoint
        const userData = await response.json();

        // Update user state with fetched data
        setUser(userData);
        setEditedUser(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  // Function to save changes
  const saveChanges = () => {
    // Assuming you have an API or backend to update user details
    // Here, we're just updating the state for demonstration purposes
    setUser(editedUser);
    alert('Changes saved!');
  };

  return (
    <div>
      <SectionTitle subHeading="User Can Maintain" heading="Profile Settings" />
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={editedUser.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={editedUser.email}
            onChange={handleInputChange}
          />
        </div>
        <button className='btn btn-primary' onClick={saveChanges}>
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default UserProfileSettings;
