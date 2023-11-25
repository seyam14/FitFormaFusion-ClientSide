import {  useLoaderData } from "react-router-dom";
import FeatureCard from "../FeatureCard/FeatureCard";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";


const Features = () => {
    const features =useLoaderData();
     console.log(features);

    return (
      <div>
          <SectionTitle
            subHeading="Discover Our Featured Workouts and Nutrition Insights for a Balanced Lifestyle"
            heading={'Unlock Your Peak Performance'}
        ></SectionTitle>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 mx-auto p-5 mt-20">
          {features.map((feature) => (
            <div key={feature.id}>
                <FeatureCard  feature={feature} key={feature.id}></FeatureCard>
            </div>
          ))}
        </div>
        </div>
    );
};

export default Features;