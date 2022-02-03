import { FaGithub } from 'react-icons/fa'




const Home = () => {
    return (
        <div className="main-container">
            <div className="main-left">
            <h3>Hi, my name is</h3>
            <h1>Daniel Bladh/Stenberg</h1>
            <h2>I build things for the web.</h2>
            <p>Currently studying Front-end development on KYH, Stockholm.</p>
            <div className="social-icons">
                <h3>Checkout my other projects here</h3>
                <a href="https://github.com/DanielBladh"><FaGithub /></a>
            </div>
            </div>
           <div className="profile-picture">
                   <div className="profile-picture-background"></div> 
                </div>
        </div>
        
    )
}

export default Home;