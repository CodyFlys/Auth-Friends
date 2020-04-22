import React, { useState, useEffect} from 'react';
import Nav from './Nav';
import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth'
import Friend from './friend'
import AddFriend from './addFriend';

const FriendsList = () => {

    const [friends, setFriends] = useState([])

    const handleChanges = (e) => {
        e.preventDefault()
        console.log(friends)
        setFriends({ 
            ...friends,
            [e.target.name]: e.target.value
        })
    }

    const submitChanges = (e) => {
        e.preventDefault();
        axiosWithAuth().post('http://localhost:5000/api/friends', setFriends)
    }

    const getfriends = () => {
        console.log('Hi from getfriends', localStorage)
        axiosWithAuth().get('http://localhost:5000/api/friends')
        .then(res => {
            console.log('Here Is The Friends List:', res)
            setFriends(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        getfriends()
    }, [friends])

    return (
        <div>
            <p></p>
            <Nav />
            <h5>Friendslist:</h5>
            <AddFriend />
            <Friend friends={friends}/>
        </div>
    )
}

export default FriendsList