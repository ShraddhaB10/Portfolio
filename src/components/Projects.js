import '../components/styles/projects.css'
function Card({image,name,text,ifh})
{
  return(
    <div className="card">
    <div className="image">
        <img src ={image} alt = 'tictactoe'/>
        
    </div><h3> {name}</h3>
    <p id = 'text'>{text}</p>
</div>
  );
}
export default function Projects({header,images,ifh,name,text}){
    return(
        <div className="ongoingproject">
            <h1>{header}</h1>
            <hr/>
            <div className="cards">
              <Card image = {images[0]} name ={name[0]} text = {text[0]} ifh={ifh}/>
              <Card image={images[1]} name = {name[1]} text = {text[1]} ifh={ifh}/>
              </div>  
        </div>
    )
}