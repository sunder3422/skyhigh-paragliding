
import './About.css';
export let About=()=>{
    return(
        <div class="Main_About">
            <h2>About us</h2>
        <div className="AboutPAge">
            
            <div className="leftAbout">
            <div class="aobutFeaturesTable">
                <div class="row1-aboutus aboutRows">
                    <div>Trainded Experts</div>
                    <div>Secure & Safe</div>
                </div>
                <div class="row2-aboutus aboutRows" >
                    <div>Medical Staff</div>
                    <div>Best Equipment</div>
                </div>
                <div class="row3-aboutus aboutRows" >
                    <div>Customer Support</div>
                    <div>Affordable price</div>
                </div>
            </div>
            <div className='AboutUsDetail'>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                </p>
            </div>
            </div>
            <div className="rightAbout">
                <div class="aboutImageContainer">
                    <img src="assets/images/para-collage.png"/>
                </div>
            </div>
        </div>
        </div>
    );
}