import Header from "../components/Header";
import Footer from "../components/Footer";
import Badges from "../components/Badges";
import Projects from "../components/Projects";
import erp from '../components/images/erp'
import facerecog from '../components/images/facerecognition.png'
function Home() {
    return (
     <div className="home">
      <Header h={'SHRADDHA BAHUGUNA'} p ={'Hello World! I am a web developer and ML enthusiast.'}ifh={'true'}/>
      <Projects 
      header={"ONGOING PROJECTS"} 
      ifh={true}
      images={[facerecog,erp]}
      name = {["Face Recognition","ERP"]}
       text ={['Building a Face recognition model.',
       'Developing a front-end of Erp system using Markup languages and ReactJs.']}/>
      <Badges/>
      <Footer/>
      </div>
    );
  }
  
  export default Home;