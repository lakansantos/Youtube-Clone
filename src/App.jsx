import "./assets/styles/index.css"
import PagesHeader from "./components/pages/PagesHeader"
import PagesSideBar from "./components/pages/PagesSideBar"
import VideoCollections from "./views/VideoCollections"
function App() {

  return (
    <div className="App">
      <PagesHeader />
      <PagesSideBar />
      <VideoCollections />
    </div>
  )
}

export default App
