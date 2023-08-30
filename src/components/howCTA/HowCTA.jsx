import React from "react";
import "./howCTA.css";

const HowCTA = () => {
    return (
        <div className="howCTA_container">
            <div className="howCTA_content">
                <div className="CTA_container">
                    <h1>Still have questions?</h1>
                    <p>
                        Can’t find the answer you’re looking for? Please chat to our friendly team.
                    </p>
                </div>
                <button className="CTA_btn btn">Contact us here</button>
            </div>
        </div>
    )
}

export default HowCTA;