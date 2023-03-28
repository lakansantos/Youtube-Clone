import {AiFillHome} from 'react-icons/ai'
import {BiLike} from 'react-icons/bi'
import {BsCollectionPlay, BsFilePlay} from 'react-icons/bs'
import {MdVideoLibrary, MdHistory, MdOutlineWatchLater, MdOutlinedFlag} from 'react-icons/md'
import musicImage from '/src/assets/images/music.png'
import trophyImage from '/src/assets/images/trophy.png'
import videoImage from '/src/assets/images/video.png'
import {TfiMusic} from 'react-icons/tfi'
import fireImage from '/src/assets/images/fire.png'
import youtubeImage from '/src/assets/images/youtube.png'
import youtubeMusicImage from '/src/assets/images/youtube music.png'
import youtubeKidsImage from '/src/assets/images/youtube-kids.png'
import {CiSettings} from 'react-icons/ci'
import {FiHelpCircle} from 'react-icons/fi'
import {RiFeedbackLine} from 'react-icons/ri'

import PagesFooter from './PagesFooter'
const PageSideBar = () => {
    return (
        <div className="page-side-bar">
            <div className="icon-container icon-container-1">
                <ul>
                    <li className="active"> 
                        <a href="">
                            <span><AiFillHome className="sidebar-icon" /></span>
                            <p>Home</p>
                        </a>
                    </li>
                    <li>
                        
                        <a href="">
                            <span><BsFilePlay className="sidebar-icon" /></span>
                            <p>Shorts</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span><BsCollectionPlay className="sidebar-icon" /></span>
                            <p>Subscriptions</p>
                        </a>
                    </li>
                </ul>
            </div>
            <hr />
            <div className="icon-container icon-container-2">
                 <ul>
                    <li>
                        <a href="">
                            <span><MdVideoLibrary className="sidebar-icon" /></span>
                            <p>Library</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span><MdHistory className="sidebar-icon" /></span>
                            <p>History</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span><MdOutlineWatchLater className="sidebar-icon" /></span>
                            <p>Watch Later</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span><BiLike className="sidebar-icon" /></span>
                            <p>Liked Videos</p>
                        </a>
                    </li>
                </ul>
            </div>
            <hr />
            <div className="icon-container icon-container-3">
                <ul>
                    <h3>Subscriptions</h3>
                    <li>
                        <a href="">
                            <span>
                                <img src={musicImage} className="sidebar-icon subscription-icon icon-1"  alt="music image" />
                            </span>
                            <p>Music</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span>
                                <img src={trophyImage} className="sidebar-icon subscription-icon icon-2" alt="trophy" />
                            </span>
                            <p>Sports</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span>
                                <img src="https://yt3.ggpht.com/pzvUHajbQDLDt63gKFYUX445k3VprUs8CeJFpNTxGQZlk0grOSkAqU8Th1_C97dyYM3nENgjbw=s88-c-k-c0x00ffffff-no-rj" 
                                className="sidebar-icon subscription-icon icon-3" 
                                alt="Gaming"
                                />
                            </span>
                            <p>Gaming</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span>
                                <img src={videoImage} alt="Movies" className="sidebar-icon subscription-icon icon-4" />
                            </span>
                            <p>Movies</p>
                        </a>
                    </li>
                </ul>
            </div>
            <hr />
            <div className="icon-container icon-container-4">
                <ul>
                    <h3>Explore</h3>
                    <li>
                        <a href="">
                            <span>
                                <img src={fireImage} alt="Movies" className="sidebar-icon explore-icon icon-1" />
                            </span>
                            <p>Trending</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span><TfiMusic className="sidebar-icon explore-icon icon-2" /></span>
                            <p>Music</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span><BsCollectionPlay className="sidebar-icon" /></span>
                            <p>Movies</p>
                        </a>
                    </li>
                </ul>
            </div>
            <hr />
            <div className="icon-container icon-container-5">
                <ul>
                    <h3>More from YouTube</h3>
                    <li>
                        <a href="">
                            <span>
                                <img src={youtubeImage} alt="Youtube Premium" className="sidebar-icon more-icon icon-1" />
                            </span>
                            <p>YouTube Premium</p>
                        </a>    
                    </li>
                    <li>
                        <a href="">
                            <span>
                                <img src={youtubeMusicImage} alt="Youtube Music" className="sidebar-icon more-icon icon-2" />
                            </span>
                            <p>YouTube Music</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span>
                                <img src={youtubeKidsImage} alt="Youtube Kids" className="sidebar-icon more-icon icon-3" />
                            </span>
                            <p>YouTube Kids</p>
                        </a>    
                    </li>
                </ul>
            </div>
            <hr />
            <div className="icon-container icon-container-6">
                <ul>
                    <li>
                        <a href="">
                            <span><CiSettings className="sidebar-icon settings-icon" /></span>
                            <p>Settings </p>
                        </a>    
                    </li>
                    <li>
                        <a href="">
                            <span><MdOutlinedFlag className="sidebar-icon" /></span>
                            <p>Report History</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span><FiHelpCircle className="sidebar-icon" /></span>
                            <p>Help</p>
                        </a>    
                    </li>
                    <li>
                        <a href="">
                            <span><RiFeedbackLine className="sidebar-icon" /></span>
                            <p>Send feedback</p>
                        </a>    
                    </li>
                </ul>
            </div>
            <hr />
            <PagesFooter />
        </div>
    )
}

export default PageSideBar;