import React, { useState } from "react";
import "./styles";
import { PlayerVideoObj } from "./styles";
import VideoBlanch from "../../images/blanch.mp4";
import PosterBlanch from "../../images/blanch-icon.png";

const PlayerVideo = ()=> {

    // const videoURL = "https://www.youtube.com/watch?v=WeO960qFpFQ"

    return (

        <PlayerVideoObj>

            <video 
                src={VideoBlanch}
                poster={PosterBlanch}
                controls
            />

        </PlayerVideoObj>
            
        

    );

}

export default PlayerVideo