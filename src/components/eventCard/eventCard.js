import { Link } from "gatsby";
import * as React from "react"
import './eventCard.scss';


function EventCard({showData}) {
    return(
        <Link to={showData.newEvent? `/new-events/${showData.slug}` : `/projects/${showData.slug}`} className="event-card">
            
            {showData.image && 
                <div className='event-card__img'>
                    {showData.newEvent && <span className="newEvent">{ showData.newEventsText}</span>}
                    <img src={showData.image.url} alt={showData.image.description}/>  
                </div>
            }

            <div className="event-card__body">
                {showData.title && <h5 className="event-card__title">{showData.title}</h5>}
                {showData.previewText && <div className="event-card__text">
                    <p>{showData.previewText}</p>
                </div>}
               
                {showData.textBtn && 
                    <div className="btn-wrap">
                        <span  className='link ' >{showData.textBtn}</span>
                    </div>
                }
            </div>
        </Link>
    )
}

export default EventCard;

