import '../components/styles/badges.css'
import awscp from '../components/images/awscp.png'
import azai from '../components/images/azai.png'
import azfund from '../components/images/azfun.png'
import azdf from '../components/images/azdf.png'
function Card({image,name})
{
  return(
    <div className="badgecard">

        <img src ={image} alt = 'badge'/>   
</div>
  );
}
export default function Badges(){
    return(
        <div className="badges">
            <h1>BADGES</h1>
            <hr/>
            <div className="bcards">
            <div className="badge-image">
              <Card image = {awscp}/>
            </div>
              <div className="badge-image">
                <Card image={azai} /> 
              </div>
              <div className="badge-image">
                <Card image = {azdf}/>
               </div>
              <div className="badge-image">
                <Card image={azfund} />
              </div>
            </div>

           
        </div>
    )
}