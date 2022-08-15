import React from "react";

const NovedadItem = (props) => {
    const { title, subtitle, image, body } = props;

    return (
        <div className="novedades">
            <h3>{title}</h3>
            <h3>{subtitle}</h3>
            <img src={image} />
            <div dangerouslySetInnerHtml ={{__html: body}} />
            <hr />
        </div>
    );
}

export default NovedadItem;