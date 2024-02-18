import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import QueryBuilderOutlinedIcon from '@material-ui/icons/QueryBuilderOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import SettingsIcon from '@material-ui/icons/Settings';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';
import styled from 'styled-components';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import logo from '../assets/images/logo2x2.jpg'
import "../assets/css/slidebar.css";



function Sidebar() {
  return (
    <>
    <div className='SidebarContainer'>
        <div>
            <logo2x2>
                <img src={logo} alt="Vault"/>
            </logo2x2>
        </div>
        <div className='SidebarBtn'>
            <button>
                {/* <img src="data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2236%22 height=%2236%22 viewBox=%220 0 36 36%22%3E%3Cpath fill=%22%2334A853%22 d=%22M16 16v14h4V20z%22/%3E%3Cpath fill=%22%234285F4%22 d=%22M30 16H20l-4 4h14z%22/%3E%3Cpath fill=%22%23FBBC05%22 d=%22M6 16v4h10l4-4z%22/%3E%3Cpath fill=%22%23EA4335%22 d=%22M20 16V6h-4v14z%22/%3E%3Cpath fill=%22none%22 d=%22M0 0h36v36H0z%22/%3E%3C/svg%3E"/> */}
                <span><b>INSERT</b></span>
            </button>
        </div>
        <div className='SidebarOptions'>
            <div className='SidebarOption'>
                <AccountBoxIcon />
                <span>My Drive</span>
            </div>
            <div className='SidebarOption'>
                <PeopleAltOutlinedIcon />
                <span>Shared with me</span>
            </div>
            <div className='SidebarOption'>
                <QueryBuilderOutlinedIcon />
                <span>Recent</span>
            </div>
            <div className='SidebarOption'>
                <StarBorderOutlinedIcon />
                <span>Starred</span>
            </div>
            <div className='SidebarOption'>
                <DeleteOutlineOutlinedIcon />
                <span>Trash</span>
            </div>
            <div className='SidebarOption'>
                <SettingsIcon />
                <span>Settings</span>
            </div>
        </div>
        <hr/>
        <div className='SidebarOptions'>
            <div className='SidebarOption'>
                <CloudQueueIcon />
                <span>Storage</span>
            </div>
            <div className="progress_bar">
                <progress size="tiny" value="70" max="100" />
                <span>105 GB  of 200 GB used</span>
            </div>
        </div>
    </div>    
    </>
  )
}

export default Sidebar
