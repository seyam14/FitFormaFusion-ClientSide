import About from "./About/About";
import Banner from "./Banner/Banner";
import Features from "./Features/Features";
import SuccessStories from "./SuccessStories/SuccessStories";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <About></About>
            <SuccessStories></SuccessStories>
        </div>
    );
};

export default Home;