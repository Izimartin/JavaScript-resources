import "./burgermenu.css"
import {  NavLink } from "react-router-dom";
import { FiSearch} from 'react-icons/fi';
import { BiMessageSquareAdd} from 'react-icons/bi';
import { motion } from "framer-motion";


const Burgermenu = () => {
  return (
                    <motion.div className="burger__link"
                    initial={{y: "-50vh"}}
                    animate={{y: 0}}
                    >
                            <ul>
                            <div className="burger__search">
                        <FiSearch className="text-muted srh" />
                        <input type="text"
                           placeholder="Search"
                        />
                        </div>
                                <li><NavLink to="profile">Account</NavLink></li>
                                <li><NavLink to="network">My Network</NavLink></li>
                            </ul>
                            <button className="btn btn-primary creee"><BiMessageSquareAdd className="cre"  /> Logout </button>
                        </motion.div>
  )
}

export default Burgermenu