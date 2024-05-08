import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import profile_icon from '../../assets/jack.png'

const Navbar = ({setSidebar}) => {

 const[searchbar,setSearchbar] = useState(true)

 const [isSearchVisible, setIsSearchVisible] = useState(false);

 const toggleSearchVisibility = () => {
  setIsSearchVisible(!isSearchVisible);
};


  return (
    <div>
        <nav className="flex-div">
            <div className="nav-left">
                <img className="hamburger-icon" src={menu_icon} onClick={()=>setSidebar(prev=>prev===false?true:false)} alt="" />
              <Link to="/">
                <img src={logo} width={"200px"} alt="" className="logo"/>
              </Link>
            </div>

            <div className="nav-middle">
              <div className="searchbar">
                <input type="text" placeholder='search' />
                <span className="material-symbols-outlined searchicon">search</span>
              </div>
              <span className="material-symbols-outlined mic">mic</span>
            </div>

            <div className="nav-right">
                 {isSearchVisible && (
                  <input type='text' className='it' placeholder='search....'/>
                 )}
                 <span className='media-search-icon'><span className="material-symbols-outlined searchicon" onClick={toggleSearchVisibility}>search</span></span>
                 <span className="material-symbols-outlined">videocam</span>
                 <span className="material-symbols-outlined">notifications</span>
                 <img src={profile_icon} alt="" />
            </div>
        </nav>
    </div>
  )
}

export default Navbar