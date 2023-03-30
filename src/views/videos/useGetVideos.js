import axios from "axios";
import { useEffect, useState} from "react";

const useGetVideos = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        axios.get('/src/data/VideosData.json')
        .then(response => {
            setData(response.data.videos)
        })
        .catch(err => console.error(err))
    }, [])

    return data;
}

export default useGetVideos;