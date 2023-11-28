import { Helmet } from "react-helmet";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";


const UserBookedPage = () => {
  return (
    <div>
      <Helmet>
        <title>FitFF|Booked</title>
     </Helmet>
      
      <SectionTitle
      subHeading=" Packages"
      heading="Choose Your plan"
    ></SectionTitle>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 max-w-3xl mx-auto bg-white rounded-md overflow-hidden shadow-md my-4 p-4">
      <div className="flex flex-col mb-8 p-6 border rounded-md bg-gray-100 text-center">
        <h3 className="text-xl font-bold mb-2 ">Silver Plan</h3>
        <p className="font-semibold">Includes:</p>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Yoga Class on Mondays and Wednesdays</li>
          <li>Cardio Class on Fridays</li>
          <li>Access to Gym Facilities</li>
        </ul>
        <button className="mt-20 bg-blue-500 text-white px-4 py-2 rounded-md">
          Join Now
        </button>
      </div>

      <div className="flex flex-col mb-8 p-6 border rounded-md bg-gray-100 text-center">
        <h3 className="text-xl font-bold mb-2">Gold Plan</h3>
        <p className="font-semibold">Includes:</p>
        <ul className="list-disc ml-6 text-gray-700 text-sm">
          <li>Yoga Class on Mondays and Wednesdays</li>
          <li>Cardio Class on Fridays</li>
          <li>Strength Training on Tuesdays and Thursdays</li>
          <li>Access to Gym Facilities</li>
          <li>Nutrition Counseling</li>
        </ul>
        <button className="mt-10 bg-yellow-500 text-white px-4 py-2 rounded-md">
          Join Now
        </button>
      </div>

      <div className="flex flex-col mb-8 p-6 border rounded-md bg-gray-100 text-center">
        <h3 className="text-xl font-bold mb-2">Diamond Plan</h3>
        <p className="font-semibold">Includes:</p>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Unlimited Access to All Classes</li>
          <li>Personal Trainer Sessions (2 per week)</li>
          <li>Access to Gym Facilities</li>
          <li>Nutrition Counseling</li>
          <li>Exclusive Spa Access</li>
        </ul>
        <button className="mt-4 bg-purple-500 text-white px-4 py-2 rounded-md">
          Join Now
        </button>
      </div>
    </div>
    </div>
  );
};

export default UserBookedPage;
