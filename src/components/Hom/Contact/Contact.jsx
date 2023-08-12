import './Contact.css'

const Contact = () => {
    return (
        <div>
            <div>
                <div className='w-10/12 mx-auto py-20'>
                    <div className="text-center">
                        <h2 className="text-4xl font-bold text-white">
                            Contact With <span className="text-teal-400">Me</span>
                        </h2>
                        <p className="border-b-4 pt-2 border-teal-400 w-48 mx-auto" />
                    </div>

                    <div className='w-8/12 mx-auto pt-12'>
                        <div className='flex flex-col md:flex-row gap-8'>
                            <div className='space-y-2 w-full md:w-6/12'>
                                <p className='text-white'>Full Name</p>
                                <input type="text" className='py-2 w-full px-4 bg-stone-700 outline-none border' placeholder='Enter Full Name' />
                            </div>

                            <div className='space-y-2 w-full md:w-6/12'>
                                <p className='text-white'>Email</p>
                                <input type="Email" className='py-2 w-full px-4 bg-stone-700 outline-none border' placeholder='Enter Email' />
                            </div>
                        </div>

                        <div className='pt-10 space-y-2 w-full'>
                            <p className='text-white'>Message</p>
                            <textarea name="" id="" cols="30" rows="8" className='py-2 w-full px-4 bg-stone-700 outline-none border' placeholder='Enter Message...'></textarea>
                        </div>

                        <div className='flex justify-end'>
                            <button className='flex items-center text-black space-x-3 bg-teal-400 hover:bg-teal-300 px-10 py-3 mt-6 rounded-full font-semibold'>
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Contact;