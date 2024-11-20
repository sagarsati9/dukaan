import './homePage.css';
import Bodyfunction from "../bodyFunction/bodyFunction";
import Contentbody from "../contentBody/contentBody";
import Navbar from "../navBar/navbar";
import Footer from '../footer/footer';
import Otherproduct from '../otherProduct/otherProduct';

const Homepage = () => {
    return (
        <div className="homepage">
            <Navbar />
            <Contentbody />
            <Bodyfunction />
            <Otherproduct />
            <Footer />
        </div>
    )
}

export default Homepage;