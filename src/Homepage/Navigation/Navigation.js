import './Navigation.css';
export let Navigation = () => {
   function showNav(event){
        console.log(event);
        let doc= document.getElementById("rightNavDiv");
        doc.classList.toggle("rightNavDivDrawar");
   };
    return (
        <div id="nav">
            
            <div Id="leftNavDiv">
                <div className="IconNav">
                    <img id="logoNav" src="assets/images/challenging.png" alt="img" />
                </div>
                <div className="IconTitle">SkyHigh-Paragliding</div>
            </div>
            <div id="rightNavDiv" className='rightNavDivclass'>
                <div className='cross' onClick={showNav}>X</div>
                <div className="navigationButton">Home</div>
                <div className="navigationButton">Activity</div>
                <div className="navigationButton">Pricing</div>
                <div className="navigationButton">ContactUs</div>
            </div>
            <div id="navButton">
                <div className='ham' onClick={showNav}><img src="assets/images/hamburger.png"/></div>
            </div>

        </div>
    );
}

