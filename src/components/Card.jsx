import React, { useState } from 'react';

function formatDate(props) {
    const unixCode = props.date;
    const months_arr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

    const date = new Date(unixCode * 1000)
    const year = date.getFullYear()
    const month = months_arr[date.getMonth()];
    const day = date.getDate();
    
    return(month + " " + day + "," + year)
}


function Card(props) {
    
    const [isHover, setIsHover] = useState(true);
    const [isClicked, setIsClicked] = useState(false);

    const hoverCard = () => setIsHover(false);
    const noHoverCard = () => setIsHover(true);
    const handleClick = () => setIsClicked(!isClicked);
    return (
        <div className="card">
            <div onMouseEnter={hoverCard} onMouseLeave={noHoverCard} className="card-img">
                <div className="learn-more">
                    <button style={isHover? {visibility:"hidden"} : {visibility:"visible"} } onClick={handleClick}>Learn more</button>
                </div>
                <img className="small-img" src={props.image} alt="card-image" />
                <div className="modal-container" style={isClicked ? {display:"flex"} : {display:"none"}}>
                    <div className="modal">
                        <div className="modal-header">
                            <a href="javascript:void(0)" role="button"> <span className="close-icon" onClick={handleClick}>&times;</span></a>
                        </div>
                        
                        <div className="modal-image">
                            <img src={props.largeImage} alt="modal-image" />
                        </div>

                        <div className="modal-content">
                            <h2>{props.title}</h2>
                            <p>{props.content}</p>
                        </div>

                        <div className="modal-footer">
                            {props.avatar && (
                                <img src={props.avatar} alt="avatar-image" />
                            )}
                            <p>{props.name} - {props.role}</p>
                        </div>
                    </div>
            </div>     
            
            </div> 
            
            
            <div className="card-body">
                <div className="circles">
                    <div className="blue-circle"></div>
                    <div className="yellow-circle"></div>
                </div>
                <h2 onClick={handleClick}>{props.title}</h2>
                <p>{props.content}</p>
            </div>

            <div className="card-footer">
                <p>{props.name} - {props.role}</p>
                <p>{formatDate(props)} </p>
            </div>        
    </div>
    )
}

export default Card;