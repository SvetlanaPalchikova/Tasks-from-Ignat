import React from 'react'
import styles from './Message.module.css'

export type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={styles.container}>
            <div className={styles.message_container}>
                <img src={props.avatar} className={styles.avatar}/>
                <div className={styles.message}>
                    <div>{props.message}
                    </div>
                    <div>
                        {props.time}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message
