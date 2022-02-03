import { DiJavascript1 } from 'react-icons/di';
import { DiReact } from 'react-icons/di';
import { DiNodejsSmall } from 'react-icons/di';
import { DiHtml5 } from 'react-icons/di';
import { DiCss3Full } from 'react-icons/di';

const About = () => {
    return ( 
        <div className="about-main-container">
            <div className="about-title">
                <h1>Hey there!</h1>
            </div>
            <div className="about-main-text">
                <p>I'm <span className="name-highlight">Daniel Bladh Stenberg</span>, an upcoming front-end developer and designer <br/>
                   based in Stockholm, Sweden. <br/>
                   <br/>
                   Well-organised person, problem solver, independent employee with high attention to detail. <br/>
                   Fan of sports, outdoor activities, TV series and gaming. <br/> <br/> <br/>
                   Here are a few technologies I’ve been learning recently: <br/>
                   <span className="iconLeft"><DiJavascript1 />Javascript</span>
                   <span className="iconLeft"><DiReact />React</span>
                   <span className="iconLeft"><DiNodejsSmall />node.js</span>
                   <span className="iconLeft"><DiHtml5 />Html</span>
                   <span className="iconLeft"><DiCss3Full />Css</span>
                </p> 
                
            <div className="about-main-picture"></div>           
            </div>
        </div>
     );
}
 
export default About;