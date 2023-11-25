

const FeatureCard = ({feature}) => {
    const {name, picture,description} = feature;
    console.log(feature);
    return (
        <div className="card lg:card-side bg-purple-300 md:h-[400px] my-8 shadow-xl">
        <div className="card-body">
        <img className="w-full rounded-md  h-[200px]" src={picture} alt="" />
        <h2 className="card-title font-bold text-center"> {name}</h2>
         <p className="text-center">{description}</p>
       </div>
       </div>
    );
  };

export default FeatureCard;
