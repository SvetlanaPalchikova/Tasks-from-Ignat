import React from 'react'
import Message from "./Message";

const hours: string = (new Date().getHours()).toString();
const minutes: string = (new Date().getMinutes()).toString();

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Some Name',
    message: 'Привет! Как дела? Что делаешь сегодня вечером?',
     time: `${hours}:${minutes}`
};


function HW1() {
    return (
        <div>
            <hr/>
            {/*homeworks 1*/}

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
