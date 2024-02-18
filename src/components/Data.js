import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ListIcon from '@material-ui/icons/List';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import styled from 'styled-components';
import React from 'react'
import "../assets/css/data.css";


function Data() {
  return (
    <div className='DataContainer'>
        <div className='DataHeader'>
            <div className="headerLeft">
                <p><h3>My Drive</h3></p>
                <ArrowDropDownIcon/>
            </div>
            <div className="headerRight">
                <ListIcon/>
                <InfoOutlinedIcon/>
            </div>
        </div>
        <div>
            <div className='DataGrid'>
                <div className='DataFile'>
                    <InsertDriveFileIcon/>
                    <p>File Name</p>
                </div>
                <div className='DataFile'>
                    <InsertDriveFileIcon/>
                    <p>File Name</p>
                </div>
            </div>
            <div>
                <div className='DataListRow'>
                    <p><b>Name<ArrowDownwardIcon/></b></p>
                    <p><b>Owner</b></p>
                    <p><b>Last Modified</b></p>
                    <p><b>FileSize</b></p>
                </div>
                <div className='DataListRow'>
                    <p><b>Notes<InsertDriveFileIcon/></b></p>
                    <p><b>Me</b></p>
                    <p><b>Yesterday</b></p>
                    <p><b>100kb</b></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Data
