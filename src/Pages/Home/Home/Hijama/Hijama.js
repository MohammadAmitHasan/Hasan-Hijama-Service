import React from 'react';
import { Link } from 'react-router-dom';
import displayPhoto from '../../../../images/banner3.jpg'

const Hijama = () => {
    return (
        <div className='container mx-auto my-10 p-5'>
            <h2 className='text-red-500 mb-8 text-4xl font-semibold text-center'>What is Hijama.?</h2>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>

                <div>
                    <img className='rounded-lg' src={displayPhoto} alt="" />
                </div>

                <div className='flex items-center'>
                    <article className='leading-7 text-gray-800'>
                        <p>
                            Wet cupping is also known as Hijama (Arabic: حجامة lit. "sucking") or medicinal bleeding, where blood is drawn by local suction from a small skin incision. The first reported usages are found in the Islamic hadith, sayings attributed to or describing the actions of the Islamic prophet Muhammad.
                        </p>
                        <p className='mt-3 mb-5'>
                            Hijama or cupping is an effective treatment for this condition. Cupping is an effective treatment for lung diseases like chronic cough, asthma, bronchial congestion, and pleurisy. Often the health of your skin directly reflects what is happening inside your body.
                        </p>
                        <Link className='bg-red-300 px-3 py-2 rounded-md hover:bg-red-400' to={'/hijama'}>Know More About Hijama</Link>
                    </article>

                </div>


            </div>
        </div>
    );
};

export default Hijama;