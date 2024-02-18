import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
import logo from '../assets/images/logo.jpg'
import "../assets/css/header.css";
import { Class } from '@material-ui/icons';


function Header  ({photoURL}) {
  return (
    <div className='HeaderContainer'>
        <div className='HeaderLogo'>
            <img src={logo} alt="Vault" />
            {/* <span>Vault</span> */}
        </div>
        <div className='HeaderSearch'>
            <SearchIcon />
            <input type="text" placeholder='Search in Drive' />
            <FormatAlignCenterIcon />
        </div>
        <div className='HeaderIcons'>
            <span>
                <HelpOutlineIcon />
                <SettingsIcon />
            </span>
            <span>
                <AppsIcon />
                <Avatar src={photoURL} />
            </span>
        </div>
    </div>
  )
}

export default Header
