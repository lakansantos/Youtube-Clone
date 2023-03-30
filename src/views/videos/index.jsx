import PagesSideBar from "../../components/pages/PagesSideBar"
import PagesHeader from "../../components/pages/PagesHeader"
import PagesHeaderLinks from "../../components/pages/PagesHeaderLinks"
import VideoCollections from "./VideoCollections"

function Index() {
    return (
        <>
            <PagesHeader />
            <PagesSideBar />
            <PagesHeaderLinks />
            <VideoCollections />
        </>
    )
}


export default Index;