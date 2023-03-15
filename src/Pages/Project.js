import Header from '../components/Header'
import '../components/styles/project.css'
import Footer from '../components/Footer';
import Projects from '../components/Projects';
import chatbot from '../components/images/Chatbot.jpg'
import tfidf from '../components/images/tfidf.jfif'
import taskt from '../components/images/taskt.png'
import tictactoe from '../components/images/tic tac toe.png'
export default function Project()
{
    return (
        <div className="project">
           <Header h={'MY PROJECTS'} ifh ={false} />
           <br/>
           <div className="sec">
             <Projects images = {[taskt,tictactoe]} header = {"Web Development Projects"} name = {["Task Tracker","Tic Tac Toe"]} text= {["Developed a task tracker with the help of Reactjs.","Developed a Basic Tic Tac Toe game using reactjs "]} ifh={false}/>
            </div>
            <br/>
            <div className="sec">
             <Projects images = {[chatbot,tfidf]} header = {"Machine Learning Models "} name = {["Chatbot","TF-IDF Vectorizer"]} 
             text= {["Developed a chatbot using artificial neural network and natural language processing.",
             "Developed a TF-IDF Vectorizer, short for term frequency–inverse document frequency, is a numerical statistic that is intended to reflect how important aword is to a document in a collection or corpus."]} 
             ifh={false}/>
            </div>
            <br/>
           <Footer/>
       </div>
    );
}