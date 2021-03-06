import React, { useRef, useState } from 'react'
import VideoSideBar from '../VideoSideBar/VideoSideBar'
import VideoFooter from '../VideoFooter/VideoFooter'
import './Video.css'


const Video = ({url,channel,discription,song,likes,shares,messages}) => {

    const [playing,setPlaying] = useState(true)
    const videoRef = useRef(null)
    const handleVideoPress = () =>{
        
        if(playing){
            videoRef.current.pause()
            setPlaying(false)
        }else{
            videoRef.current.play()
            setPlaying(true)
        }
    }

    return (
        <div className='video'>
            <video
            className='videoPlayer'
            onClick={handleVideoPress}
            ref={videoRef}
            loop
            src={url}
            >
        
            </video>

            <VideoFooter channel={channel} discription={discription} song={song}/>
            <VideoSideBar likes={likes} messages={messages} shares={shares}/>
        </div>
    )
}

export default Video
