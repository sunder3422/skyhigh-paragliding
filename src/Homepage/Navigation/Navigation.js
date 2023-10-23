import './Navigation.css';
export let  Navigation=()=>{
    return(
        <div id="nav">
            <div Id="leftNavDiv">
                    <div className="IconNav">
                        <img id="logoNav" src="assets/images/challenging.png" alt="img"/>
                    </div>
                    <div className="IconTitle">SkyHigh-Paragliding</div>
            </div>
            <div Id="rightNavDiv">
                <div className="navigationButton">Home</div>
                <div className="navigationButton">Activity</div>
                <div className="navigationButton">Pricing</div>
                <div className="navigationButton">ContactUs</div>
            </div>
        </div>
    );
}

