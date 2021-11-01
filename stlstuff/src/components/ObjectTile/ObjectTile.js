import test from '../../img/test.jpg'
import "./ObjectTile.css"

function ObjectTile(properties){
    return(
        <div className="objectTile">
            <h1 className="objectTitle">{properties.name}</h1>
            <img src={test} alt={"ligma balls"} className="objectImage" />
        </div>
    )   
}
export default ObjectTile