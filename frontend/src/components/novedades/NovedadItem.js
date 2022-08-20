import React from "react";

const NovedadItem = (props) => {
    const { title, image, body } = props;

    return (
        <div className="novedades">
            <h3>{title}</h3>
            <p>
                <div dangerouslySetInnerHTML ={{__html: body}} />
            </p>
            <img src={image} />            
        </div>
    );
}

export default NovedadItem;