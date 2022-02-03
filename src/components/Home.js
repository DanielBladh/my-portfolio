import { FaGithub } from 'react-icons/fa'
import { useEffect, useState } from 'react';




const Home = () => {

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');
    
    useEffect(() => {
        const requestUser = async () => {
            await requestUserAsync();
        }
        const requestUserRepo = async () => {
            await requestUserRepoAsync();
        }
        requestUser();
        requestUserRepo();
    }, []);

    const requestUserAsync = async () => {
        await fetch("https://api.github.com/users/DanielBladh")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setName(data.name);
            setUsername(data.login);

        })
        .catch(setError("Could not fetch from Github API Users."));
    }
    const requestUserRepoAsync = async () => {
        await fetch("https://api.github.com/users/DanielBladh/repos")
        .then(response => response.json())
        .then(data => {
            console.log(data);

        })
        .catch(setError("Could not data from Github API Repos."));        
    }

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