// import './Banner.css'
import { FaGithub } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaDownload } from 'react-icons/fa';
import myResume from '../../../assets/Resume_of_Amir_Hamza.pdf'
import bannerImg from '../../../assets/profile.png'

const Banner = () => {
    return (
        <div>
            <div>
                <div className='w-10/12 text-2xl space-y-2 mx-auto py-24 text-white'>
                    <div className='flex flex-col md:flex-row md:justify-between items-center'  data-aos="fade-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000">
                        <div className='space-y-3 pb-10 md:pb-0'>
                        <h2 className='font-semibold'>Hello, Its Me</h2>
                        <h2 className='text-5xl font-bold tracking-wider'>Amir Hamza</h2>
                        {/* <div className='wrapper'>
                        <h2 className='font-semibold text-3xl static-text'>And I am a</h2>
                        <ul className='dynamic-text font-semibold text-3xl'>
                            <li><span>MERN Stack Developer</span></li>
                            <li><span>Full Stack Web Developer</span></li>
                            <li><span>Frontend Developer</span></li>
                            <li><span>Web Developer</span></li>
                        </ul>
                        </div> */}

                    <h2 className="font-semibold">And I am a <span className=" text-teal-400">MERN Stack Developer</span></h2>

                    <div className='flex items-center space-x-6 pt-4'>
                        <a href="https://github.com/amirhamza24" target='blank'>
                            <div className='border border-teal-400 rounded-full p-3'>
                                <FaGithub className='text-teal-400 hover:text-white'></FaGithub>
                            </div>
                        </a>
                        
                        <a href="https://web.facebook.com" target="blank">
                            <div className='border border-teal-400 rounded-full p-3'>
                                <FaFacebook className='text-teal-400 hover:text-white'></FaFacebook>
                            </div>
                        </a>
                        
                        <a href="">
                            <div className='border border-teal-400 rounded-full p-3'>
                                <FaLinkedin className='text-teal-400 hover:text-white'></FaLinkedin>
                            </div>
                        </a>
                    </div>

                    <div className="pt-5">
                        <a href={myResume} download>
                            <button className='flex items-center text-black space-x-3 bg-teal-400 hover:bg-teal-300 px-6 py-3 rounded-full'>
                                <FaDownload className='text-lg'></FaDownload>
                                <span className='text-lg font-semibold'>My Resume</span>
                            </button>
                        </a>
                    </div>
                    </div>

                    <div className='border-8 border-teal-400 rounded-full'>
                        <img className='h-96 w-96 rounded-full' src={bannerImg} alt="" />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;