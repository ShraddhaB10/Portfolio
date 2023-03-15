import Header from "../components/Header";
import Footer from "../components/Footer";
import'../components/styles/contact.css'
export default function Contact()
{
    return(
    <div className="contact">
        <Header h= {"CONTACT ME!"} ifh ={false}/>
        <br/>
        <div className="container">
            <div className="left">
                <h2>CONTACT ME</h2>
                <hr/>
                <form className="form">
                     <input id ='name' type = 'text' name ="Your Name" value='Your Name'/> 
                     <input id = 'email' type ='text' name ='Email Address' value = 'Email Address'/>
                     <input type='text' id='msg' name = 'Message' value = 'Message'/><br/>
                     <button type='submit'id="learnmore"  >SEND MESSAGE</button>
                </form>
            </div>
            <div className="right">
                <h2>CONTACT INFORMATION</h2>
                <hr/>
                <h6>Address</h6>
                <p>Rajeshwar Nagar, Phase 6, Lane 6,
                    Dehradun -248001, Uttarakhand.</p> <br/>
                <h6>Email </h6>
                <p>shraddhabahuguna2002@gmail.com</p><br/>
                <h6>Phone No.</h6>
                <p>6397818872</p><br/>
                
                </div>
        </div>
        <Footer/>
    </div>);
}