import React from 'react';
import {Link} from "react-router-dom";
import {arrow} from "../assets/icons";

const InfoBox = ({text, link, btnText}) => (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain"/>
        </Link>
    </div>
);


const renderContent = {
    1:(<div>
           <h1 className="sm:text-xk
           sm:leading-snug text-center
           neo-brutalism-blue py-4 px-8
           text-white mx-5"
           >
               Hi, I am <span className="font-semibold">Kripal</span>👋
               <br/>
               A <span className="font-semibold">Student</span> and <span className="font-semibold">Developer</span> from Nepal
           </h1>

    </div>
    ),
    2:(
        <InfoBox
            text={"Done a lot of projects and picked up many skills along my university days"}
            link="/about"
            btnText="Learn More"
        />
    ),
    3:(<InfoBox
        text={"Led multiple projects to success over the years. Curious about the impact?"}
        link="/projects"
        btnText="Visit my Portfolio"
    />),
    4:(<InfoBox
        text={"Need a project done or looking for a dev? I'm just a few keystrokes away"}
        link="/contact"
        btnText="Let's Talk"
    />),
}

const HomeInfo = ({currentStage}) => {
    return renderContent[currentStage] || null;
};

export default HomeInfo;