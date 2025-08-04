import FeatureCard from "../FeatureCard/FeatureCard";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import { useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25, delayChildren: 0.4 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Features = () => {
  const features = useLoaderData();

  return (
    <section className="relative overflow-hidden">
      {/* Decorative Background Circles */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="absolute -top-20 -left-20 w-72 h-72 bg-purple-300 dark:bg-purple-800 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.4 }}
        className="absolute bottom-0 right-0 w-80 h-80 bg-pink-300 dark:bg-pink-700 rounded-full blur-3xl"
      />

      <div className="relative container mx-auto px-4 md:px-8 lg:px-16 py-16">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <SectionTitle
            subHeading="Discover Our Featured Workouts and Nutrition Insights for a Balanced Lifestyle"
            heading="Unlock Your Peak Performance"
          />
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                rotate: 1,
                boxShadow: "0px 10px 25px rgba(0,0,0,0.2)",
              }}
              transition={{ type: "spring", stiffness: 250 }}
              className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700"
            >
              <FeatureCard feature={feature} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
