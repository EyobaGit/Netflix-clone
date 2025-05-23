import React from 'react'
import './Header.css'
import netflixlogo from '../../assets/images/BrandAssets_Logos_01-Wordmark.jpg'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Header = () => {
  return (
    <div className='header-outer-container'>
      <div className='header-container'>
        <div className='header-left'>
        <ul>
        <li><img src={netflixlogo} alt="logo" width="100"/></li>
            <li>Netflix</li>
            <li>Home</li>
            <li>TvShows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browse by Languages</li>
        </ul>
            
        </div>
        <div className='header-right'>
            <ul>
            <li><SearchIcon/></li> 
             <li><NotificationsNoneIcon/></li>
            <li><AccountBoxIcon/></li>
            <li><ArrowDropDownIcon/></li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
