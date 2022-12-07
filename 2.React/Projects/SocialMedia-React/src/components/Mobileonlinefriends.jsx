import React from 'react'
import onlinedata from "./Onlinedata"
import { BiSend } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from "./Header"

const Loadvariants = {
    hidden: {
        opacity: 0,
        x: "-100vw"
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            duration: 2
        },
        exit: {
            x: "-100vw",
            transition: { ease: 'easeInOut' }
        }
    }
}

const Mobileonlinefriends = () => {
    return (

        <
        motion.section className = 'mobileonlinefriends'
        initial = "hidden"
        animate = "visible"
        exit = {
            {
                x: "-100vw",
                transition: { ease: 'easeInOut' },
                duration: 1
            }
        }
        variants = { Loadvariants } >
        <
        div className = "online-container" >

        <
        h1 className = 'headdy' > Online friends < /h1>

        {
            onlinedata.map((friend) => {
                const { profileimg, friendname, online, title, id } = friend
                return ( <
                    div className = '"Who-to-follow-list online-ol'
                    key = { id } >
                    <
                    div className = "wtfl-top online-top" >
                    <
                    div className = "online-profile-image" >
                    <
                    img src = { profileimg }
                    alt = ""
                    className = 'profile-picture2' / > { online ? < div className = 'dot-green' > < /div> : <div className='dot-orange'></div > } <
                    /div> <
                    div className = "wtfl-middle" >
                    <
                    p className = "friendname" > { friendname } < /p> <
                    p className = "text-muted" > { title } < /p> <
                    /div> <
                    /div> <
                    div className = "message-buttons" >
                    <
                    Link to = { `/chatpage/${id}` } >
                    <
                    BiSend className = 'online-btn btn' / >
                    <
                    /Link> <
                    /div>

                    <
                    /div>
                )
            })
        }




        <
        /div> <
        /motion.section>
    )
}

export default Mobileonlinefriends