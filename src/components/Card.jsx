import React from 'react'


export default function Card(props) {
    

    return (
        <>
            <div className="journal__card">
                <img className="img__title" src={props.imageUrl} />
                <div className="div__journal">
                    <p className="p__location">
                        <img className="img__visit" src="location.png"  alt="location"/> &nbsp;
                        {props.location} &nbsp;
                        <span><a href="{props.googleMapsUrl}">View on Google Maps</a></span>
                    </p>
                    <p className="p__title">{props.title}</p>
                    <h6>
                        {props.startDate} - {props.endDate}
                    </h6>
                    <p className="p__description">
                        {props.description}
                    </p>
                </div>

            </div>
        </>
    )
}
