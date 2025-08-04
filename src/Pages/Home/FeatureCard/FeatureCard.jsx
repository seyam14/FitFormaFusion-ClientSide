import { motion } from "framer-motion";

const FeatureCard = ({ feature }) => {
  const { name, picture, description } = feature;

  return (
    <motion.div
      className="card lg:card-side bg-gradient-to-tr from-purple-400 via-purple-300 to-purple-200 md:h-[400px] my-8 shadow-lg rounded-3xl overflow-hidden cursor-pointer
                 hover:shadow-2xl hover:scale-[1.03] transition-transform duration-300 ease-in-out"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="card-body flex flex-col items-center text-center space-y-6 p-6 md:p-8">
        {/* Image with overlay */}
        <motion.div className="relative w-full h-[200px] rounded-xl overflow-hidden shadow-md">
          <motion.img
            className="w-full h-full object-cover rounded-xl"
            src={picture}
            alt={name}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          />
          {/* subtle dark overlay for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-xl pointer-events-none" />
        </motion.div>

        {/* Title */}
        <motion.h2
          className="card-title font-extrabold text-purple-900 text-xl md:text-2xl drop-shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        >
          {name}
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-purple-900 text-base md:text-lg max-w-xl leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
