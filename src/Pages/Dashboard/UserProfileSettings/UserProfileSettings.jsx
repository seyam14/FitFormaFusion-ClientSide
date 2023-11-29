import { useContext, useState } from 'react';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const UserProfileSettings = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState('');

  const handleUser = async (e) => {
    e.preventDefault();

    // Create a FormData object to handle form data
    const form = new FormData(e.currentTarget);
    const updateUser = {
      name: form.get('name'),
    };

    try {
      // Send data to the server
      const response = await fetch(`http://localhost:5000/user`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateUser),
      });

      if (!response.ok) {
        throw new Error(`Failed to update user. Status: ${response.status}`);
      }

      const data = await response.json();

      console.log(data);

      if (data.user) {
        Swal.fire({
          title: 'Success!',
          text: 'Updated Successfully',
          icon: 'success',
          confirmButtonText: 'Done',
        });
      } else {
        // Handle the case where data.user is not present in the response
        throw new Error('Unexpected response from the server');
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle the error, show an alert, etc.
      Swal.fire({
        title: 'Error',
        text: 'Failed to update user. Please try again later.',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    }
  };

  return (
    <div>
      <SectionTitle subHeading="User Can Maintain" heading="Profile Settings" />
      
      <form onSubmit={handleUser}>
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text"> E-mail</span>
            </label>
            <label className="input-group">
              <input
                type="email"
                name="email"
                placeholder="email"
                value={user?.email || ''}
                readOnly
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text"> Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          updated Profile
        </button>
      </form>
    </div>
  );
};

export default UserProfileSettings;
