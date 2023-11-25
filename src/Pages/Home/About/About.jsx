import SectionTitle from "../../../Component/SectionTitle/SectionTitle";


const About = () => {
    return (
      <div>
      <SectionTitle
        subHeading="Inspiring Active Living"
        heading={'About'}
    ></SectionTitle>
        <div className="container mx-auto mt-8 px-4 md:px-8 lg:px-16 m-4"> 
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8 lg:p-12">
          <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-4">
            Welcome to Fitness Tracker, your go-to platform for tracking your fitness journey. Whether you are a seasoned athlete or just getting started on your fitness goals, our website is here to support you every step of the way.
          </p>
          <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-8">
            Our mission is to provide you with the tools and resources needed to achieve your fitness objectives. From workout tracking to nutrition guidance, we have got you covered. Stay motivated, set goals, and see the progress you make on your path to a healthier lifestyle.
          </p>
        </div>
      </div>
      </div>
    );
  };
  

export default About;