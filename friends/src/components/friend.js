import React from 'react';

const Friend = (props) => {
    console.log(props)
    return (
        <>
            {props.friends.map((friend) => {
                return (<div>
                    <h3>{friend.name}</h3>
                    <p>{friend.age}</p>
                    <p>{friend.email}</p>
                </div>)
            })}
        </>
    )
}

export default Friend