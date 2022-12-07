import {useState} from 'react'
import Notifydata from './Notifydata'
import './notification.css'
import { motion } from 'framer-motion'
import { MdCancel} from 'react-icons/md';


const Notification = () => {

const [notifydata, setNotifyData] = useState(Notifydata)

const handleDeleteNotification = (index) => {
    const newNotify = notifydata.filter((item) => item.id !== index)
    setNotifyData(newNotify)
}

  return (
    <motion.section className='notify-page'
      initial={{y: "-50vh"}}
      animate={{y: 0}}
    >

     
        <div className="notify-container">
               <h1>Your Notifications</h1>
               {
        notifydata.length ? (  <div className="notifydata-container">
        {
            notifydata.map((item) => {
                const {id, note} = item
                return(
                 <div className="notify-subcont" key={id}>
                      <p className='text-muted'>{ note}</p>
                      <MdCancel className='noti-btn'
                        onClick={()=> handleDeleteNotification(id)}
                      />
                 </div>
                )
            })
        }
       
    </div>) : (<p>No Notifications</p>)
      }
             
        </div>
    </motion.section>
  )
}

export default Notification