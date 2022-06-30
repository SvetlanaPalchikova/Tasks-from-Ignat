import React from 'react'
import style from './Error404.module.css'

function Error404() {
    return (
        <div className={style.error}>
            <div>404</div>
            <div>Page not found!</div>
            <img src = "http://pro444.ru/wp-content/uploads/2012/08/oshibka404.jpg"/>
        </div>
    )
}

export default Error404
