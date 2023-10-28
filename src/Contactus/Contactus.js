
import './Contact.css';
import { BsPersonFill, BsTelephoneFill, BsPinMapFill, BsFillEnvelopeAtFill, BsMailbox2 } from "react-icons/bs";
export let Contactus = () => {
    return (
        <div class="contactUs-outer">
            <h2>Contact Us</h2>
            <h3>We would like to hear from you</h3>
        <div className='contactUs-main'>
            
            <div className='contactUs-leftDiv'>
                <div className='myContact'>

                    <div className='contactUser'>
                        <div className='devIcons'><BsPersonFill /></div>
                        <div>John Rambo</div>
                    </div>

                    <div className='contactUser'>
                        <div className='devIcons'><BsMailbox2 /></div>
                        <div>skyHightpara234@gmail.com</div>
                    </div>
                    <div className='contactUser'>
                        <div className='devIcons'><BsTelephoneFill /></div>
                        <div>+91 4564534564</div>
                    </div>
                </div>
                <div className='telephoneimg'>
                    <img src="assets/images/telephone.jpg" />
                </div>

            </div>
            <div className='contactUs-rightDiv'>
                <div className='form'>
                    <div className='userName inputBoxes'>
                        <div><BsPersonFill /></div>
                        <input className="form-inputs"
                            type="text"
                            placeholder='Enter your name' />
                    </div>
                    <div className='email inputBoxes'>
                        <div><BsFillEnvelopeAtFill /></div>
                        <input className="form-inputs"
                            type="email"
                            placeholder='Enter your email' />
                    </div>
                    <div className='contact inputBoxes'>
                        <div><BsTelephoneFill /></div>
                        <input className="form-inputs"
                            type="number"
                            placeholder='Enter your phone number'
                        />
                    </div>
                    <div className='place inputBoxes'>
                        <div><BsPinMapFill /></div>
                        <input className="form-inputs" type="text"
                            placeholder='Enter your location' />
                    </div>
                    <div className='textarea inputBoxes'>
                        <input className="form-inputs" type="textarea" />
                    </div>
                    <div className='submit'>
                        <button>SUBMIT</button>
                    </div>
                </div>
            </div>
        </div>

        </div>
    )
}