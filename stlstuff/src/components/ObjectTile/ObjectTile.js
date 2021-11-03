import test from '../../img/test.jpg'
import heart from '../../img/icons/heart-line.svg'
import download from '../../img/icons/download.svg'

import "./ObjectTile.css"

function ObjectTile(properties){
    return(
        <div className="objectTile">
            <h1 className="objectTitle">{properties.name}</h1>
            <img src={test} alt={"ligma balls"} className="objectImage" />
            <div className="interactBar">
            <img src={heart} alt={"heart icon"}/>
            <img src={download} alt={"download icon"}/>
            </div>
        </div>
    )   
}
export default ObjectTile