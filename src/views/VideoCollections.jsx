import axios from "axios";
import { useEffect, useState} from "react";

const VideoCollections = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        axios.get('/src/data/VideosData.json')
        .then(response => setData(response.data.videos))
        .catch(err => console.error(err))
    }, [])

    return (
        <div className="video-collections-container">
            {data?.map((video) => {
                return (
                    <div className="video-box" key={video.id}>
                        <div className="thumbnail-container">test</div>
                        <div className="video-details-container">test</div>
                    </div>
                )
            })}
        </div>
    )
}

export default VideoCollections;