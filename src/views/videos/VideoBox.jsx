import {AiFillCheckCircle} from 'react-icons/ai'
import {BsDot} from 'react-icons/bs'
import { useState } from 'react'

const VideoBox = ({postData}) => {
    
    const [hovered, setHovered] = useState(null)

    return (
        <div className="video-box" 
            onMouseEnter={() => setHovered(postData.id)}
            onMouseLeave={() => setHovered(null)}
        >
            <div 
            className="thumbnail-container"
            style={{
                background: `url(${postData.thumbnail}) center/cover no-repeat`,
                borderRadius: `${hovered === postData.id ? '0px' : '15px'}`,
                transition: '.3s ease-in-out',
                transform: `${hovered === postData.id ? 'scale(1.05)' : ''}`,
            }}
            >
            {hovered === postData.id && 
                <iframe src={`${postData.embedVideo}?autoplay=1&mute=1&controls=0`} frameBorder={0} height={'100%'} width={'100%'}></iframe>
            }
            </div>
            <div className="video-details-container">
                <div className="channel-profile-container">
                    <img src={postData.channelProfile} alt={`${postData.channel} avatar`} className="channel-profile"/>
                </div>
                <div className="post-details-container">
                    <h3 className="youtube-post-title">{postData.title}</h3>
                    <p className="post-channel-name">{postData.channel} 
                        {postData.verified ? 
                            <span>
                                <AiFillCheckCircle style={{
                                    color: 'gray',
                                    marginLeft: '5px'
                                }}/>
                            </span> 
                            : null
                        }
                    </p>
                    <div className="viewcount-container">
                        <p className="view-count-text">{postData.viewCount} views</p>
                        <span>
                            <BsDot style={{
                                color: 'gray',
                                height: '100%',
                            }}/>
                        </span>
                        <p>{postData.time}</p>
                    </div>
                </div>
            </div>
            </div>
    )
}


export default VideoBox;