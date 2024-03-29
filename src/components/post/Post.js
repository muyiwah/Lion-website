import React from 'react';
import './Post.css';
import {Avatar} from '@material-ui/core';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import InputOption from '../inputOption/InputOption';

function Post({name, description, message, photoUrl}) {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar />
                <div className="post__info">
                    <h4>
                        {name}
                    </h4>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post__body">
               <p> {message}</p> 
            </div>
            <div className="post__buttons">
                <InputOption 
                Icon={ThumbUpAltOutlinedIcon}
                title='Likes'
                color='grey'
                />
                <InputOption 
                Icon={ChatOutlinedIcon}
                title='Comment'
                color='grey'
                />
                <InputOption 
                Icon={ShareOutlinedIcon}
                title='Share'
                color='grey'
                />
                <InputOption 
                Icon={SendOutlinedIcon}
                title='Send'
                color='grey'
                />
            </div>
        </div>
    )
}

export default Post
