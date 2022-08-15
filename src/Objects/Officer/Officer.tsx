import React from 'react';
import './Officer.css';
import insta from '../../Images/instaCircle.png'
import linkedin from "../../Images/LinkedInLogo.png";

function toWebsite(link: string){
    window.location.href = link;
}

export type OfficerProps = {
    position: string;
    firstName: string;
    lastName: string;
    image?: string;
}

function Officer({position, firstName, lastName, image}: OfficerProps): JSX.Element {
    return (
        <div className="officer-outline">
        <p className='officer-position'>{position}</p>
            <p className='officer-name'>{firstName} {lastName}</p>
            <img src={image} className="officer"/>
            <img src={linkedin} alt="" className="linkedin" onClick={() => toWebsite('https://www.linkedin.com')}/>
        </div>
    );
}
export default Officer;