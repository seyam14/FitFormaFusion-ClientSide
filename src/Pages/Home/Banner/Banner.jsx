import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="mt-4">
        <div
          className="hero h-[75vh]"
          style={{ backgroundImage: "url(https://i.ibb.co/t8bWB7Y/Banner-for-fitness.jpg)" }}
        >
          <div className="hero-overlay bg-opacity-80"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="w-[600px">
              <h2 className="mb-5 text-5xl font-bold hover:text-purple-600  ">
              WELCOME TO FitFormaFusion
              </h2>
              <p className=" text-xl hover:text-red-300">
              FitFormaFusion is a perfect for any type of gym, fitness club
                <br />
                <span className="font-semibold">
                and personal trainers.
                </span>
              </p>
              <div className="inline-flex mt-4">
                <div className="text-center">
                  <button className="bg-red-500 text-white rounded-r py-2 px-4 hover:bg-blue-600">
                    <Link to='/classes'> Classes</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
export default Banner;