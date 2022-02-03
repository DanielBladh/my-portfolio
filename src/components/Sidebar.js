import { FaFacebookF } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'



const Sidebar = () => {
    return ( 
        <div className="sidebar-left">
            <div className="social-sidebar">
        <ul>
            <a href="https://www.linkedin.com/in/daniel-bladh-stenberg-a2a69a210/"><li><FaLinkedinIn /></li></a>
            <a href="https://www.facebook.com/daniel.bladh.14/"><li><FaFacebookF /></li></a>
            <a href="https://www.instagram.com/danielbladh/"><li><FaInstagram /></li></a>
            <a href="https://github.com/DanielBladh"><li><FaGithub /></li></a>
            <a href="https://twitter.com/DanielBladh1897"><li><FaTwitter /></li></a>
        </ul>
            </div>
        </div>
     );
}
 
export default Sidebar;