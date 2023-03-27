import {RxHamburgerMenu} from 'react-icons/rx'
import youtubeIcon from '/public/youtube.png'
import {AiOutlineSearch} from 'react-icons/ai'
import {BsFillMicFill} from 'react-icons/bs'
import {TfiUpload} from 'react-icons/tfi'
import {BsBell} from 'react-icons/bs'
import avatarIcon from '/src/assets/images/avatarIcon.png'
const PagesHeader = () => {
    return (
        <div className="pages-header">
           <div className="header-left-section">
                <RxHamburgerMenu style={{
                    width: '25px',
                    height: '25px'
                }}/>
                <div className="youtube-logo-container">
                    <img src={youtubeIcon} alt="youtube" className="header-youtube-logo"/>
                    <p className="youtube-logo-text">YouTube</p>
                </div>
           </div>
           <div className="header-mid-section">
                <div className="search-bar-container">
                    <input type="text" placeholder="Search" />
                    <button><AiOutlineSearch className="search-logo"/></button>
                    <BsFillMicFill className="microphone-logo"/>
                </div>
            </div>
            <div className="header-right-section">
                <TfiUpload />
                <BsBell />
                <img src={avatarIcon} alt="user avatar" className="user-avatar-icon"/>
            </div>
        </div>
    )
}

export default PagesHeader;