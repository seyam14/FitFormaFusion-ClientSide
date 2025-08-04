import { motion } from "framer-motion";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";

const About = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 via-white to-purple-50 min-h-screen py-12 px-4 md:px-8 lg:px-20">
      <SectionTitle
        subHeading="Inspiring Active Living"
        heading={"About"}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="container mx-auto mt-10 bg-white rounded-xl shadow-xl p-6 md:p-10 lg:p-14 max-w-4xl"
      >
        <motion.p
          className="text-gray-700 text-base md:text-lg lg:text-xl mb-6 leading-relaxed tracking-wide"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Welcome to <span className="font-semibold text-blue-600">Fitness Tracker</span>, your go-to platform for tracking your fitness journey. Whether you are a seasoned athlete or just getting started on your fitness goals, our website is here to support you every step of the way.
        </motion.p>

        <motion.p
          className="text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed tracking-wide"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Our mission is to provide you with the tools and resources needed to achieve your fitness objectives. From workout tracking to nutrition guidance, we have got you covered. Stay motivated, set goals, and see the progress you make on your path to a healthier lifestyle.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default About;
