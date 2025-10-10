import Header from "./Header/Header.jsx";
import HeroSection from "./Hero-section/Hero.jsx";
import HowWorks from "./How-it-works-section/How-it-works.jsx";
import TrendingProjects from "./Trending Projects/Trending.jsx";
import Footer from "./Footer/footer.jsx";

export default function App() {
    return(
        <div>
            <Header />
            <HeroSection />
            <TrendingProjects />
            <HowWorks />
            <Footer />
        </div>
    )
}