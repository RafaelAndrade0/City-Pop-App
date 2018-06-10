import React from 'react';
import Button from '@material-ui/core/Button';
import YouTube from '@u-wave/react-youtube';
import '../styles/player.css';

const Player = (props) => {
    return (
        <div className="playerStyle">
            <YouTube 
                video={props.videos.link}
                width={320}
                height={240}
                autoplay={false}
                paused={props.pauseVideo}
                controls={false}
                allowFullscreen={false}
            />

            <p></p>
            <Button variant="contained" color="primary" onClick={props.handleChangeVideo}>
                Change Video
            </Button>

        </div>
    );
}

export default Player;