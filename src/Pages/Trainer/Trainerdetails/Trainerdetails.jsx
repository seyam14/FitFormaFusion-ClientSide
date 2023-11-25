

const TrainerDetails = ({trainer}) => {
 

  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="container mx-auto py-8">
        {trainer ? (
          <>
            <h1 className="text-4xl font-bold text-center mb-8">{trainer.name} Details</h1>
            <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md my-8">
              <img src={trainer.image} alt={trainer.name} className="w-full h-40 object-cover" />
              <div className="p-4">
                <p className="text-gray-600 mb-2">Years of Experience: {trainer.yearsOfExperience}</p>
                <p className="text-gray-700">Available Time Slots:</p>
                <ul className="list-disc ml-6">
                  {trainer.availableTimeSlots.map((slot, index) => (
                    <li key={index}>{slot}</li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default TrainerDetails;
