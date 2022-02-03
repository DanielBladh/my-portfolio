import  CV from '../assets/Cv-lorem.png';
import PB from '../assets/PB-lorem.png'

const Resume = () => {
    return (
        <>
        <div className="resume-container">
        <button className='btn-download'>Click here to download as PDF</button>
            
            <div className="resume-img">
                <img src={CV} alt="" />
            </div>
            <div className="resume-imgtwo">
            <img src={PB} />
            </div>
        </div>
        </>
    );
}

export default Resume;

{/* <img src={"./logo.jpeg"} /> */}