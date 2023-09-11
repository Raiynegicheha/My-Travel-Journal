import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot} from '@fortawesome/free-solid-svg-icons'


function Post(props){
    return(
        <div className="post">
            <img src={props.imageUrl} alt="" className="img-journal"/>
            <div className="post-info">
                <p className="post-location">
                    <span><FontAwesomeIcon icon={faLocationDot} className="location-icon"/></span>
                    <span className="country">{props.location.toUpperCase()}</span>
                    <a href={props.googleMapsUrl}>View On Google Maps</a></p>
                <h1>{props.title}</h1>
                <span className="dates">{props.startDate}-{props.endDate}</span>
                <p className="description">{props.description}</p>
            </div>
        </div>
    )
}

export default Post;