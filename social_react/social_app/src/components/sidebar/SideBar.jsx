import React from 'react';
import "./SideBar.css";
import {Users} from "../../dummyData";
import {
  RssFeed,
  School,
  Event,
  WorkOutline,
  HelpOutline,
  Bookmark,
  Group,
  PlayCircleFilledOutlined,
  Chat } from "@material-ui/icons";
import CloseFriends from '../closeFriends/CloseFriends';
const SideBar = () => {
  return (
    <div className='sidebar'>
      <div className="sideBarWrapper">
        <ul className='sideBarList'>
          <li className='sideBarListItem'>
            <RssFeed className='sideBarListIcons' />
            <span className='sideBarListIconsText' >Feed</span>
          </li>
          <li className='sideBarListItem'>
            <Chat className='sideBarListIcons' />
            <span className='sideBarListIconsText' >Chats</span>
          </li>
          <li className='sideBarListItem'>
            <PlayCircleFilledOutlined className='sideBarListIcons' />
            <span className='sideBarListIconsText' >Videos</span>
          </li>
          <li className='sideBarListItem'>
            <Group className='sideBarListIcons' />
            <span className='sideBarListIconsText' >Group</span>
          </li>
          <li className='sideBarListItem'>
            <Bookmark className='sideBarListIcons' />
            <span className='sideBarListIconsText' >Bookmark</span>
          </li>
          <li className='sideBarListItem'>
            <HelpOutline className='sideBarListIcons' />
            <span className='sideBarListIconsText' >Questions</span>
          </li>
          <li className='sideBarListItem'>
            <WorkOutline className='sideBarListIcons' />
            <span className='sideBarListIconsText' >Jobs</span>
          </li>
          <li className='sideBarListItem'>
            <Event className='sideBarListIcons' />
            <span className='sideBarListIconsText' >Events</span>
          </li>
          <li className='sideBarListItem'>
            <School className='sideBarListIcons' />
            <span className='sideBarListIconsText' >Course</span>
          </li>
          
        </ul>

        <button className="sideBarButton">
          Show more 
        </button>
        <hr className='sideBarHr'></hr>

        <ul className="sidebarFriendList">
          {
            Users.map((u) => (
              <CloseFriends key={u.id} user={u} />
            ))
          }
         
          
        </ul>
      </div>
      </div>
  )
}

export default SideBar