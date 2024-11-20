import logo from '../../Assets/white.svg';
import made from '../../Assets/MADE_IN_INDIA.png';
import './footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_body">

                <div className="flex_footer">

                    <img className="footer_logo" src={logo} alt="logo" />
                    <div>
                        <div className="footer_page">
                            Contact
                        </div>
                        <div className="footer_page">
                            FAQ's
                        </div>
                    </div>
                    <div>
                        <div className="footer_page">
                            Tutorials
                        </div>
                        <div className="footer_page">
                            Blog
                        </div>
                    </div>
                    <div>
                        <div className="footer_page">
                            Privacy
                        </div>
                        <div className="footer_page">
                            Banned Items
                        </div>
                    </div>
                    <div>
                        <div className="footer_page">
                            About
                        </div>
                        <div className="footer_page">
                            Jobs
                            <span id="job">3</span>
                        </div>
                    </div>
                    <div>
                        <div className="footer_page">
                            Facebook
                        </div>
                        <div className="footer_page">
                            Twitter
                        </div>
                        <div className="footer_page">
                            Linkdin
                        </div>
                    </div>

                </div>

                <div className="line"></div>

                <div className="footer_rights">
                    <div>
                        Dukaan 2020, All rights reserved
                    </div>
                    <div className="footer_made_in">
                        Made in
                        <img className="footer_made_in_img" src={made} alt="Made in India"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;