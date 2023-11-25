import {  useLoaderData } from "react-router-dom";
import FeatureCard from "../FeatureCard/FeatureCard";


const Features = () => {
    const features =useLoaderData();
     console.log(features);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 mx-auto p-5 mt-20">
          {features.map((feature) => (
            <div key={feature.id}>
                <FeatureCard  feature={feature} key={feature.id}></FeatureCard>
            </div>
          ))}
        </div>
    );
};

export default Features;