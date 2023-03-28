import axios from "axios";
import { useEffect, useState} from "react";
import {AiFillCheckCircle} from 'react-icons/ai'
import {BsDot} from 'react-icons/bs'

const VideoCollections = () => {
    const [data, setData] = useState(null)
    const [hovered, setHovered] = useState(null)

    useEffect(() => {
        axios.get('/src/data/VideosData.json')
        .then(response => {
            setData(response.data.videos)
            console.log(response.data.videos)
        })
        .catch(err => console.error(err))
    }, [])

    return (
        <div className="video-collections-container">
            {data?.map((postData) => {
                return (
                    <div className="video-box" 
                    key={postData.id}
                    onMouseEnter={() => setHovered(postData.id)}
                    onMouseLeave={() => setHovered(null)}
                    >
                        <div 
                        className="thumbnail-container"
                        style={{
                            background: `url(${postData.thumbnail}) center/cover no-repeat`,
                            borderRadius: `${postData.id === hovered ? '0px' : '15px'}`,
                            transition: '.3s ease-in-out',
                            transform: `${postData.id === hovered ? 'scale(1.05)' : ''}`,
                        }}
                        >
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
            })}
        </div>
    )
}

export default VideoCollections;