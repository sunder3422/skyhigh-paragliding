
import "./Footer.css";
export let Footer = () => {
    return (
        <div className="footerMain">
            <div className="footerSubscribe">
                <input type="text"></input>
                <button>Subscribe</button>
            </div>
            <div className="aboutus">
                        <p>This is the paragraph fot wring about the company,,we would like to tell we we build the best website template connect with us</p>
                    </div>
            <div className="rightFooter">
                <div className="connectWitUS">

                    <div className="socialMedia">
                        <p>Connect With Us</p>
                    </div>
                    
                    <div className="socialIcon">
                        <div className="Insta">
                            <img src="assets/images/instagram.png"/>
                        </div>
                        <div className="twitter">
                        <img src="assets/images/twitter.png"/>
                        </div>
                        <div className="facebook">
                        <img src="assets/images/facebook.png"/>
                        </div>
                        <div className="gmail">
                        <img src="assets/images/gmail.png"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}