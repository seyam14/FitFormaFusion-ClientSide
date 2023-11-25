
const GalleryPage = () => {

  return (
    <div className="bg-gray-200 min-h-screen flex justify-center items-center">
      <div className="text-center w-full">
        <h1 className="text-4xl font-bold mb-6">Fitness Tracker Gallery</h1>
        <div className="max-w-2xl mx-auto">
          <img
            src='https://i.ibb.co/Dpt8Y5N/Gallery.jpg'
            alt="Fitness Gallery"
            className="rounded-lg shadow-md w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
