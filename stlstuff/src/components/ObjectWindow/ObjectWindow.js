import "./ObjectWindow.css"
import ObjectTile from "../ObjectTile/ObjectTile";

function ObjectWindow(properties){
    return(
        <div className="objectWindow">
            <ObjectTile name="Object1"/>
            <ObjectTile name="Object1"/>
            <ObjectTile name="Object1"/>
            <ObjectTile name="Object1"/>
        </div>
    )   
}
export default ObjectWindow