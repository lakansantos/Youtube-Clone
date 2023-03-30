import useGetVideos from './useGetVideos'
import VideoBox from './VideoBox';

const VideoCollections = () => {

    const data = useGetVideos();
    
    return (
        <div className="video-collections-container">
            {data?.map((postData) => {
                return (
                    <VideoBox 
                    postData={postData} 
                    key={postData.id}
                    />
                )
            })}
        </div>
    )
}

export default VideoCollections;