import {Navigation} from './Navigation/Navigation';
import "./Homepage.css";
import { Frontpage } from './Frontpage/Frontpage';
import {About} from './About/About';
export let Homepage=()=>{
    return(
        <div className="navPlusfrontPage">
            <div class="navModule">
            <Navigation/>
            </div>
            <div classNAme="frontBody">
                <Frontpage/>
            </div>
            <div className="joinUs">
                <div className="joinUsButton">
                    JOIN US
                </div>
            </div>
            <div className='about'>
              <About/>
            </div>
        </div>
        
    );
}