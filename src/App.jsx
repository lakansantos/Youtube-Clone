import "./assets/styles/index.css"
import PagesHeader from "./components/pages/PagesHeader"
import PagesSideBar from "./components/pages/PagesSideBar"
import VideoCollections from "./views/VideoCollections"
import PagesHeaderLinks from "./components/pages/PagesHeaderLinks"
function App() {

  return (
    <div className="App">
      <PagesHeader />
      <PagesSideBar />
      <PagesHeaderLinks />
      <VideoCollections />
    </div>
  )
}

export default App
