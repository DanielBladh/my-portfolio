import { FaGithub } from 'react-icons/fa'
import { useEffect, useState } from 'react';


// Funktion som fetcher mina repos från Github, med hjälp av useState och useEffect //
const Home = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [profileUrl, setProfileUrl] = useState('');
    const [avatar, setAvatar] = useState('');
    const [repos, setRepos] = useState([]);
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
                setAvatar(data.avatar_url);
                setProfileUrl(data.html_url);
            })
            .catch(setError("Could not fetch from Github API Users."));
    }
    const requestUserRepoAsync = async () => {
        await fetch("https://api.github.com/users/DanielBladh/repos")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setRepos(data);
            })
            .catch(setError("Could not data from Github API Repos."));
    }

    return (
        <>
            <div className="main-container">
                <div className="main-left">
                    <h3>Hi, my name is</h3>
                    <h1>{name}</h1>
                    <h2>I build things for the web.</h2>
                    <p>Currently studying Front-end development on KYH, Stockholm.</p>
                    <div className="social-icons">
                        <h3>Checkout my other projects here</h3>
                        <a href={profileUrl} rel="noreferrer" target="_blank"><FaGithub /></a>
                    </div>
                    <div className="repos-container">
                        {repos !== null && repos.map((x) => {
                            return <div key={x.id} className="repos-card">
                                <div>{x.name}</div>
                                <a href={x.html_url} rel="noreferrer" target="_blank">{x.html_url}</a>
                            </div>
                        })
                        }
                    </div>
                </div>
                <div className="profile-picture">
                    <img alt="github-avatar" src={avatar} className="profile-picture-background"></img>
                </div>
            </div>
        </>


    )
}

export default Home;