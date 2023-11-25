
import FeatureCard from "../FeatureCard/FeatureCard";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import { useLoaderData } from "react-router-dom";

const Features = () => {
  const features = useLoaderData();

  return (
    <div className="container mx-auto mt-20 px-4 py-10  md:px-8 lg:px-16 ">
      <SectionTitle
        subHeading="Discover Our Featured Workouts and Nutrition Insights for a Balanced Lifestyle"
        heading="Unlock Your Peak Performance"
      ></SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature) => (
          <div key={feature.id} className="mb-4">
            <FeatureCard feature={feature}></FeatureCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
