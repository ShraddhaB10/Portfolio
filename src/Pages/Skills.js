import Header from "../components/Header"
import '../components/styles/skills.css'
import cpp from '../components/images/c++.png'
import c from '../components/images/C.png'
import java from '../components/images/java.png'
import python from '../components/images/python.jfif'
import html from '../components/images/html.png'
import css from '../components/images/css.png'
import js from '../components/images/js.png'
import react from '../components/images/react.png'
import collab from '../components/images/collab.png'
import wordpress from '../components/images/wordpress.png'
import jupyter from '../components/images/jupyter.png'
import figma from '../components/images/figma.png'
import Footer from "../components/Footer"

export default function Skills(){
    function Comp({name,image})
    {
        return (
        <div className="imgcontain">
            <img id = 'is' src = {image} alt= "img"/>
            <p align='center'>{name}</p>
       </div>);
    }
    return(
        <div className="skill">
            <Header h= {'SKILLS'} ifh = {false}/>
            <h2>"IF KNOWLEDGE IS POWER,<br/> LEARNING IS YOUR SUPERPOWER."</h2>
             <hr/>
            <br/>
            <div className="skillcontainer">
             <h4>Programming Languages</h4>
             <hr/>
             <div className="contain">
                
                <Comp name = {"C++"}image = {cpp}/>
                <Comp name = {"C"}image={c}/>
                <Comp name = {"Java"} image= {java}/>
                <Comp name = {"Python"}image = {python}/>
            </div>
            <div className="skillcontainer">
            <h4>Markup and Styling Languages</h4>
             <hr/>
             <div className="contain">
                
                <Comp name = {"HTML"}image = {html}/>
                <Comp name = {"CSS"}image={css}/>
                <Comp name = {"JavaScript"} image= {js}/>
                <Comp name = {"ReactJs"}image = {react}/>
            </div>
            </div>
            <div className="skillcontainer">
            <h4>Tools and Frameworks</h4>
             <hr/>
             <div className="contain">
                
                <Comp name = {"Figma"}image = {figma}/>
                <Comp name = {"Wordpress"}image={wordpress}/>
                <Comp name = {"Google Collaboratory"} image= {collab}/>
                <Comp name = {"Jupyter Notebook"}image = {jupyter}/>
            </div>
            </div>
            </div>
            <Footer/>
        </div>
    )
}