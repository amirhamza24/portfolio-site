import './Skills.css'
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3 } from 'react-icons/fa';
import { FaBootstrap } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { BiLogoTailwindCss } from 'react-icons/Bi';
import { BiLogoJavascript } from 'react-icons/Bi';
import { BiLogoFirebase } from 'react-icons/Bi';
import { BiLogoMongodb } from 'react-icons/Bi';
import { FaNodeJs } from 'react-icons/fa';
// import { FaHtml5 } from 'react-icons/fa';

const Skills = () => {
    return (
        <div>
            <div className='w-10/12 mx-auto py-20'>
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-white">
                        My <span className="text-teal-400">Skills</span>
                    </h2>
                    <p className="border-b-4 pt-2 border-teal-400 w-48 mx-auto" />
                </div>

                <div className='pt-20'>
                    <div className='text-teal-400 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10'  data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000">
                        <div className='w-16 h-16'>
                            <div className='border border-teal-400 p-3 rounded-full w-full h-full flex items-center justify-center'>
                                <FaHtml5 className='text-3xl'></FaHtml5>
                            </div>

                            <p className='text-center'>HTML</p>
                        </div>

                        <div className='w-16 h-16'>
                            <div className='border border-teal-400 p-3 rounded-full w-full h-full flex items-center justify-center'>
                                <FaCss3 className='text-3xl'></FaCss3>
                            </div>

                            <p className='text-center'>CSS</p>
                        </div>

                        <div className='w-16 h-16'>
                            <div className='border border-teal-400 p-3 rounded-full w-full h-full flex items-center justify-center'>
                                <FaBootstrap className='text-3xl'></FaBootstrap>
                            </div>

                            <p className='text-center'>Bootstrap</p>
                        </div>

                        <div className='w-16 h-16'>
                            <div className='border border-teal-400 p-3 rounded-full w-full h-full flex items-center justify-center'>
                                <BiLogoTailwindCss className='text-3xl'></BiLogoTailwindCss>
                            </div>

                            <p className='text-center'>Tailwind</p>
                        </div>

                        <div className='w-16 h-16'>
                            <div className='border border-teal-400 p-3 rounded-full w-full h-full flex items-center justify-center'>
                                <BiLogoJavascript className='text-3xl'></BiLogoJavascript>
                            </div>

                            <p className='text-center'>JavaScript</p>
                        </div>

                        <div className='w-16 h-16'>
                            <div className='border border-teal-400 p-3 rounded-full w-full h-full flex items-center justify-center'>
                                <FaReact className='text-3xl'></FaReact>
                            </div>

                            <p className='text-center'>React</p>
                        </div>

                        <div className='w-16 h-16'>
                            <div className='border border-teal-400 p-3 rounded-full w-full h-full flex items-center justify-center'>
                                <BiLogoFirebase className='text-3xl'></BiLogoFirebase>
                            </div>

                            <p className='text-center'>Firebase</p>
                        </div>
                        
                        <div className='w-16 h-16'>
                            <div className='border border-teal-400 p-3 rounded-full w-full h-full flex items-center justify-center'>
                                <BiLogoMongodb className='text-3xl'></BiLogoMongodb>
                            </div>

                            <p className='text-center'>MongoDB</p>
                        </div>
                        
                        <div className='w-16 h-16'>
                            <div className='border border-teal-400 p-3 rounded-full w-full h-full flex items-center justify-center'>
                                <FaNodeJs className='text-3xl'></FaNodeJs>
                            </div>

                            <p className='text-center'>NodeJS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;