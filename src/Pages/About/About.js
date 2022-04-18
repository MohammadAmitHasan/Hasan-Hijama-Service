import React from 'react';
import displayPhoto from '../../images/Hasan.jpg'

const About = () => {
    return (
        <div className='container mx-auto my-5 p-5'>
            <div className='rounded-lg p-5 max-w-4xl hover:bg-slate-50 shadow-lg hover:shadow-2xl duration-300 border-2 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5'>
                <div className='flex justify-center items-center'>
                    <div>
                        <img className='rounded-md max-w-xs' src={displayPhoto} alt="" />
                    </div>
                </div>
                <div>
                    <h2 className='text-red-500 text-3xl text-center font-semibold mb-3'>Md. Amit Hasan</h2>
                    <div>
                        <h5 className='text-xl font-bold'>My Goal</h5>
                        <p className='leading-7 text-gray-700'>
                            My goal is to join in a web development company as a full time web developer. <br />

                            To get the job there is no alternative of hard working. In_sha_Allah I will provide my full effort to get the dream job. I will continue to build new projects with unique ideas. The react world is a huge one and there is a huge number of libraries which creates new functionality projects. So I will keep trying to explore the world as much as I can and will try to implement new libraries in my projects. Through this process In_sha_Allah I will become better day by day and will be ready to become a web developer.

                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;