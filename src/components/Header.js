import '../components/styles/header.css'

import Navbar from './Navbar';

export default function Header({h,p,ifh})
{
    return(
        <>
    <div className="coverpage"></div> 
            <Navbar/>
        <div className='center'>
                <h1>{h}</h1>
                <hr/>
                <p>{p}</p>
                {ifh && (
               <form>
                <button id="learnmore" 
                 formaction='https://drive.google.com/file/d/13bPikYzFAZM1E9SPblz0DLc2eImX3Va8/view?usp=sharing' 
                 target = 'blank'>LEARN MORE ABOUT ME</button>
              </form> 
               )
            }
   </div>
   </>
   );
}