

const ErrorPage = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center">
        <div>
            <img className="h-45 w-60" src="https://i.ibb.co/HHMtX2d/error-101407-1280.jpg" />
        </div>
        <div className="mt-10 ">
            <p className="text-4xl ">Error....! </p>
            <a href="/"><button className=" mt-4 btn btn-neutral">Back to Home</button></a>
            
        </div>
    </div>
);
};

export default ErrorPage;