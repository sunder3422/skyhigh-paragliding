import './Nav.css';
import { Link } from 'react-router-dom';
export let Nav = () => {
    function showNav(event) {
        console.log(event);
        let doc = document.getElementById("rightNavDiv");
        doc.classList.toggle("rightNavDivDrawar");
    };
    return (
        <div id="nav">

            <div id="leftNavDiv">
                <div className="IconNav">
                    <img id="logoNav" src="assets/images/challenging.png" alt="img" />
                </div>
                <div className="IconTitle">SkyHigh-Paragliding</div>
            </div>
            <div id="rightNavDiv" className='rightNavDivclass'>
                <div className='cross' onClick={showNav}>X</div>
                <div className="navigationButton"><Link to="/">Home</Link></div>
                <div className="navigationButton">Activity</div>
                <div className="navigationButton">Pricing</div>
                <div className="navigationButton"><Link to="/contact">ContactUs</Link></div>
            </div>
            <div id="navButton">
                <div className='ham' onClick={showNav}><img src="assets/images/hamburger.png" /></div>
            </div>

        </div>
    );
}

