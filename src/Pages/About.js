import Header from "../components/Header";
import Footer from "../components/Footer";
import myimg from '../components/images/myimg.jpg'
import '../components/styles/about.css'
export default function About()
{
    return( 
    <div className="about">
       <Header h={'ABOUT ME !'}/>
       <div className="body">
           <div className="desc">
            <h3>GREETINGS!</h3>
            <hr />
            <p>I am Shraddha Bahuguna, I am pursuing B.Tech. in Computer Science with a specialization in Artificial intelligence and Machine Learning. 
             I am in my 5th semester. My interest areas are Web Development, Artificial Intelligence, 
             Machine Learning, and Deep Learning.</p>
             <form>
                <button id="learnmore"
                 formaction='https://drive.google.com/file/d/13bPikYzFAZM1E9SPblz0DLc2eImX3Va8/view?usp=sharing' 
                 target = 'blank'>MY RESUME</button>
              </form> 
           </div>
           <div className="my-img">
            <img id ='i' src={myimg} alt ="img"/>
           </div>          
       </div>
       <Footer/>   
    </div>);
}