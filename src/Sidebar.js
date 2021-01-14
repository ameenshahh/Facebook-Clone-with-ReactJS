import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import { ExpandMoreOutlined } from '@material-ui/icons'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow
                src="https://scontent.fcok10-1.fna.fbcdn.net/v/t1.0-9/44484220_2211069829175743_5472295940108845056_n.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_ohc=dUZc9WjeaOYAX9IsAqi&_nc_ht=scontent.fcok10-1.fna&oh=a9be58497990d592779192850f5bf672&oe=60266D14"
                title="Ameen Sha"
            />

            <SidebarRow
                Icon={LocalHospitalIcon}
                title="COVID-19 Information Center"
            />

            <SidebarRow
                Icon={EmojiFlagsIcon}
                title=" Pages"
            />

            <SidebarRow Icon={PeopleIcon}
                title="Friends"
            />

            <SidebarRow Icon={ChatIcon}
                title="Messenger"
            />

            <SidebarRow Icon={StorefrontIcon}
                title="Marketplace"
            />

            <SidebarRow Icon={VideoLibraryIcon}
                title="Videos"
            />

            <SidebarRow Icon={ExpandMoreOutlined}
                title="Marketplace"
            />




        </ div>
    )
}

export default Sidebar
