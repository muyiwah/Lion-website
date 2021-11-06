import React ,{useEffect, useState} from 'react';
import './forum.css';
import {db} from '../../firebase';
import firebase from 'firebase';
import Post from '../../components/post/Post';
import CreateIcon from '@material-ui/icons/Create'
import InputOption from '../../components/inputOption/InputOption';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';

import ImageIcon from '@material-ui/icons/Image'


function Forum() {


const [input, setInput] = useState('')
const [posts, setPosts] = useState([])

useEffect(() => {
    db.collection('post')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshoot => (
        setPosts(snapshoot.docs.map(doc => (
            {
                id: doc.id,
                data: doc.data(),
            }
        )))
    )       
    )
})


const sendPost = (e) => {
    e.preventDefault();
    db.collection('post').add({
        name: 'emma',
        description:' my test',
        message: input,
        photUrl: '',
        timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput('');
}

    return (
        <div class='feed'>
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form >
                        <input type="text" name="" value={input} onChange={e => setInput(e.target.value)} />
                        <button onClick={sendPost} type="submit"> Send Post</button>
                    </form>


                </div>
                <div className="feed__inputOptions">
                    <InputOption 
                        Icon ={ImageIcon}
                        title= 'Photo'
                        color='#70b5f9'
                    />
                    <InputOption 
                        Icon ={SubscriptionsIcon}
                        title= 'Video'
                        color='#e7a33e'
                    />
                    <InputOption 
                        Icon ={EventNoteIcon}
                        title= 'Event'
                        color='#c0cbcd'
                    />
                

                 </div>
            </div>
           {posts.map(({id, data: {name, description, message, photoUrl}}) => (
            <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
           />
           ))}
           
        </div>

     
    )
}

export default Forum
