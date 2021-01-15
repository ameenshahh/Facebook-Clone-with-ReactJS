import React from 'react'
import './Feed.css'
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'

function Feed() {
    return (
        <div className="feed">
            <StoryReel />

            <MessageSender />

            <Post
                profilePic='this is a profilepic'
                message='WOW this works!'
                timestamp='This is a timestamp'
                username='ameenshah'
                image='This is an image'
            />

            <Post
                profilePic='this is a profilepic'
                message='WOW this works!'
                timestamp='This is a timestamp'
                username='ameenshah'
                image='This is an image'
            />
            <Post />
        </ div>
    )
}

export default Feed
