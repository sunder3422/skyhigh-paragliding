import { Nav } from './Navigation/Nav';
import "./Homepage.css";
import { Frontpage } from './Frontpage/Frontpage';
import { About } from './About/About';
import { Location } from './Location/Location';
import { Footer } from './Footer/Footer';
import { Customers } from './Customers/Customers';
export let Homepage = () => {
    return (
        <div className="navPlusfrontPage">
            <div className='front-nav'>

                <div className="frontBody">
                    <Frontpage />
                    <div className="joinUs">
                        <div className="joinUsButton">
                            JOIN US
                        </div>
                    </div>
                </div>
            </div>

            <div className='about'>
                <About />
            </div>

            <div className='line'></div>
            <div className='customersPage'>
                <Customers/>
            </div>
            <div className="LocationPage">
                <Location />
            </div>

            <div className='FooterPage'>
                <Footer />
            </div>
        </div>

    );
}