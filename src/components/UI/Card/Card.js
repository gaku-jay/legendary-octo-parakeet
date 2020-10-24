import React from 'react';
import classes from './Card.module.css'

const Card = (props) => {

    let title;
    let description;
    let url;
    let image;

    if (props.data) {
        title = props.data.title;
        description = props.data.description;
        url = props.data.url;
        image = 'images/' + props.data.image;
    }

    return (
        <div className={classes.Card}>
            <img src={image} />
            <div className={classes.CardContents}>
                <h1>{title}</h1>
                <p>{description}</p>
                <a href={url} target="_blank"></a> 
            </div>
        </div>
    );

}

export default Card;