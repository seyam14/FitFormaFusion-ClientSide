import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="mt-4">
      <div
        className="hero h-[70vh] md:h-[80vh] lg:h-[85vh] relative"
        style={{
          backgroundImage: "url(https://i.ibb.co/t8bWB7Y/Banner-for-fitness.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        <div className="hero-content text-center text-neutral-content relative z-10">
          <motion.div
            className="max-w-[90%] md:max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2
              className="mb-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-md"
              whileHover={{ scale: 1.05, color: "#a855f7" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              WELCOME TO FitFormaFusion
            </motion.h2>

            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed"
              whileHover={{ scale: 1.02, color: "#fca5a5" }}
            >
              FitFormaFusion is perfect for any type of gym, fitness club
              <br />
              <span className="font-semibold">and personal trainers.</span>
            </motion.p>

            <motion.div
              className="inline-flex mt-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
            >
              <Link
                to="/classes"
                className="bg-red-500 hover:bg-blue-600 transition-all duration-300 text-white font-semibold rounded-lg py-2 px-6 shadow-lg"
              >
                View Classes
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
