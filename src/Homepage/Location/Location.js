import "./Location.css";
export let Location = () => {
    return (
        <div className="locationPage">
            <h1>Locations</h1>
                <div className="locationCards">
                    <div className="bhimtalCard Cards">
                        <div className="bhimtalImage">
                            <img  className="location-images" src="assets/images/bhimtal.jpg"/>
                        </div>
                        <div className="ContentDesc">
                            <h4>Bhimtal</h4>
                            <p>Bhimtal a beautiful place to visit sorrounded with mountains and a beauty to watch. sorrounded by mountains so it give a seriene view to watch and paraglide with us.</p>
                        </div>
                    </div>
                    <div className="nanitalCard Cards">
                        <div className="nanitalImage">
                        <img className="location-images" src="assets/images/nanital.jpg"/>
                        </div>
                        <div className="ContentDesc">
                            <h4>Nanital</h4>
                            <p>Nanital a beautiful place to visit sorrounded with mountains and a beauty to watch. sorrounded by mountains so it give a seriene view to watch and paraglide with us.</p>
                        </div>
                    </div>
                    <div className="bhimtalCard Cards">
                        <div className="bhimtalImage">
                            <img  className="location-images" src="assets/images/bhimtal.jpg"/>
                        </div>
                        <div className="ContentDesc">
                            <h4>Ghorakhal</h4>
                            <p>Bhimtal a beautiful place to visit sorrounded with mountains and a beauty to watch. sorrounded by mountains so it give a seriene view to watch and paraglide with us.</p>
                        </div>
                    </div>
                </div>
            
        </div>
        // <div>This is location</div>
    )
}