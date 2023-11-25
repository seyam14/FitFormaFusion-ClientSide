import About from "./About/About";
import Banner from "./Banner/Banner";
import Features from "./Features/Features";
import LatestArticles from "./LatestArticles/LatestArticles";
import Newsletter from "./Newsletter/Newsletter";
import SuccessStories from "./SuccessStories/SuccessStories";
import Team from "./Team/Team";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <About></About>
            <SuccessStories></SuccessStories>
            <LatestArticles></LatestArticles>
            <Newsletter></Newsletter>
            <Team></Team>
        </div>
    );
};

export default Home;