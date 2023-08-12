import "./AboutMe.css";
import aboutImg from "../../../assets/about.jpg";

const AboutMe = () => {
    return (
        <div>
            <div className="w-10/12 mx-auto py-20">
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-white">
                        About <span className="text-teal-400">Me</span>
                    </h2>
                    <p className="border-b-4 pt-2 border-teal-400 w-48 mx-auto" />
                </div>

                <div className="flex flex-col md:flex-row pt-20 items-center justify-between gap-10 w-full">
                    <div className="w-full md:w-5/12 flex items-center">
                        <div className='border-8 border-teal-400 rounded-full'>
                            <img className='h-80 w-80 rounded-full' src={aboutImg} alt="" />
                        </div>
                    </div>

                    <div className="text-white space-y-3 w-full md:w-5/12">
                        <h2 className="text-4xl font-bold">
                            I Can Develop & Design Anything You Want
                        </h2>

                        <p className="text-sm text-justify text-gray-400">
                            Hello, I am Amir Hamza, a passionate and experienced
                        MERN stack developer. With a strong background in web
                        development and a deep understanding of the MERN
                        (MongoDB, Express.js, React, Node.js) stack, I strive to
                        create innovative and high-quality applications. I have
                        a solid foundation in front-end development using HTML,
                        CSS, and JavaScript, and I specialize in building
                        dynamic and interactive user interfaces with React.js. I
                        have extensive experience working with Redux for state
                        management, as well as other popular libraries and
                        frameworks such as Material-UI, Bootstrap, and Styled
                        Components. On the back-end, I am skilled in Node.js and
                        Express.js, creating robust and scalable server-side
                        applications. I have a strong command over RESTful APIs
                        and have implemented various authentication and
                        authorization mechanisms, such as JSON Web Tokens (JWT)
                        and OAuth.
                    </p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
