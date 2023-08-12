import './MyProjects.css'
import restaurant from '../../../assets/restaurent.jpg'
import toy from '../../../assets/toy.jpg'
import schoolCamp from '../../../assets/schoolCamp.jpg'

const MyProjects = () => {
    return (
        <div>
            <div className='w-10/12 mx-auto py-20'>
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-white">
                        My <span className="text-teal-400">Projects</span>
                    </h2>
                    <p className="border-b-4 pt-2 border-teal-400 w-48 mx-auto" />
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-16'  data-aos="fade-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000">
                    <div className='border'>
                        <div>
                            <div>
                                <img src={restaurant} className='w-96 h-full' alt="" />
                            </div>

                            <div className='mt-5 space-y-3 py-4 px-3'>
                                <h4 className=' text-white font-semibold text-2xl'>Special Chef Site</h4>

                                <p className='text-sm text-gray-400'>It was a Chef details site. In this site, some chefs can be found here. In the first state, their picture, name, review etc. will be seen. To see the details of each chef, click on the View Recipe button.</p>

                                <div className='pt-5'>
                                    <a href="https://chef-recipe-hunter-22950.web.app/" target="blank" className='border px-2 py-1 text-white'>Live Site</a>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className='border'>
                        <div>
                            <div>
                                <img src={toy} className='w-96 h-full' alt="" />
                            </div>

                            <div className='mt-5 space-y-3 py-4 px-3'>
                                <h4 className=' text-white font-semibold text-2xl'>Kids Toys</h4>

                                <p className='text-sm text-gray-400'>It was a Kids Store site. In this site, some Kids Toys can be found here. In the first state, their picture, name, review etc. will be seen. To see the details of each Toys, click on the View Details button.</p>

                                <div className='pt-5'>
                                    <a href="https://toy-market-365e5.web.app" target="blank" className='border px-2 py-1 text-white'>Live Site</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='border'>
                        <div>
                            <div>
                                <img src={schoolCamp} className='w-96 h-full' alt="" />
                            </div>

                            <div className='mt-5 space-y-3 py-4 px-3'>
                                <h4 className=' text-white font-semibold text-2xl'>School Camp</h4>

                                <p className='text-sm text-gray-400'>In this site, there will be separate dashboards for admin, instructor and student. Student can view only his selected classes and payment history. And the instructor can add his courses.</p>

                                <div className='pt-5'>
                                    <a href="https://summer-camp-70639.web.app/" target="blank" className='border px-2 py-1 text-white'>Live Site</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;