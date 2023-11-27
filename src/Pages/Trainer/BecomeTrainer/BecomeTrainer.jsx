import Swal from "sweetalert2";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { useContext } from "react";


const BecomeTrainer = () => {
    const {user}=useContext(AuthContext)
    
    const handleTrainer = e => {
        e.preventDefault();
    const form = new FormData(e.currentTarget);
    const BecomeTrainer = {
        fullName: form.get("fullName"),
        email: form.get("email"),
       age: form.get("age"),
       Skills: form.getAll("Skills[]"),
      PhotoURL: form.get("PhotoURL"),
      AvailableTimeinaweek: form.get("AvailableTimeinaweek"),
      AvailableTimeinaday: form.get("AvailableTimeinaday"),
      role : "memeber"
    };
    console.log(BecomeTrainer);

         // send data to the server
         fetch(`http://localhost:5000/becomeTrainer`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(BecomeTrainer)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: ' Successfully added',
                        icon: 'success',
                        confirmButtonText: 'Done'
                      })
                }
            })

    }

    return (
        <div className="bg-purple-300 p-24 m-4 rounded-xl">
    
        <h2 className="text-3xl font-extrabold  text-center">Become a Trainer </h2>
        
        <form onSubmit={handleTrainer} >
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text"> E-mail</span>
                    </label>
                    <label className="input-group">
                    <input type="email" name="email" placeholder="email" value={user?.email || ''} readOnly className="input input-bordered w-full" />

                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Full Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="fullName" placeholder="fullName" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* form  */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Age</span>
                    </label>
                    <label className="input-group">
                        <input type="number" name="age" placeholder="age" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="w-1/2 pl-2 mb-4">
                <label className="text-gray-600" htmlFor="Skills">
                        Skills:
                    </label>
                    <div className="flex flex-wrap">
                        <label className="inline-flex items-center mt-3 mr-3">
                            <input
                                type="checkbox"
                                name="Skills[]"
                                value="Weightlifting"
                                className="form-checkbox h-5 w-5 text-blue-600"
                            />
                            <span className="ml-2">Weightlifting</span>
                        </label>
                        <label className="inline-flex items-center mt-3 mr-3">
                            <input
                                type="checkbox"
                                name="Skills[]"
                                value="Cardio"
                                className="form-checkbox h-5 w-5 text-blue-600"
                            />
                            <span className="ml-2">Cardio</span>
                        </label>
                        <label className="inline-flex items-center mt-3">
                            <input
                                type="checkbox"
                                name="Skills[]"
                                value="Yoga"
                                className="form-checkbox h-5 w-5 text-blue-600"
                            />
                            <span className="ml-2">Yoga</span>
                        </label>
                    </div>
                </div>

        </div>

            
            {/* form */}
            <div className="md:flex mb-8 ">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text"> Photo URL</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="PhotoURL" placeholder="Photo URL" className="input input-bordered w-full" />
                    </label>
                </div>
                
                </div>
            {/* form */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Available Time in a week</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="AvailableTimeinaweek" placeholder="Available Time in a week" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Available Time in a day</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="AvailableTimeinaday" placeholder="Available Time in a day"  className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            
            {/* button */}
            <input type="submit" value="Apply" className="btn btn-block" />

        </form>
    </div>
);
};


export default BecomeTrainer;