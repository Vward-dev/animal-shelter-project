import React from 'react'
import ReactDOM from 'react-dom'
import { SocialIcon } from 'react-social-icons'
import Styles from './SocialComponents.module.css'

export default function SocialComponents() {


    return(
        <>
        <div className={Styles.social}>
            <SocialIcon url="https://youtube.com" />
        </div>
        <div className={Styles.social}>
            <SocialIcon url="https://instagram.com" />
        </div>
        <div className={Styles.social}>
            <SocialIcon url="https://facebook.com" />
        </div>
</>
 )
    }
