import "./Customers.css";


export let Customers=()=>{
    return(
    <div className="customers-feedbacks">
        <h2>We like to here from you</h2>
        <div className="cust-1">
            <div className="cust-img">
            <img src="assets/images/customers/cust_1.jpg"/>
            </div>
            <div className="cust-feedback">
            <h3>"Best 6 Months"</h3>
                <p>Most enthosiatic trip ever</p>
                <span>-- Marcus Stonis</span>
            </div>
        </div>
        <div className="cust-2">
            <div className="cust-img">
            <img src="assets/images/customers/cust_2.jpg"/>
            </div>
            <div className="cust-feedback">
                <h3>"Awosome Experience"</h3>
                <p>Most enthosiatic trip ever</p>
                <span>-- Jack & Darcy</span>
            </div>
        </div>
        <div className="cust-3">
            <div className="cust-img">
            <img src="assets/images/customers/cust_3.jpg"/>
            </div>
            <div className="cust-feedback">
                <h3>"Awosome Experience"</h3>
                <p>Most enthosiatic trip ever</p>
                <span>-- Jassica</span>
            </div>
        </div>
    </div>
    );
}