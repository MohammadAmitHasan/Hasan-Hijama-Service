import React from 'react';
import useHijama from '../../CustomHooks/useHijama';
import HijamaDetail from './HijamaDetail/HijamaDetail';
import './HijamaDetails.css'

const HijamaDetails = () => {
    // Go to the top when loading
    window.scrollTo(0, 0);

    const [hijamaDetails] = useHijama();

    return (
        <div>
            <div id='hijama-banner'>
                <h1 id='hijama-banner-title' className='text-3xl text-center text-red-400 font font-semibold p-5'>Hijama is completely safe and pain free</h1>
            </div>

            <div className='container mx-auto mt-5 mb-10 p-5 '>
                <div>
                    <article className='mb-5 leading-7 text-gray-700 max-w-xl mx-auto p-5 border-2 shadow-lg hover:border-red-200 duration-200 ease-in hover:shadow-2xl rounded-lg hover:bg-slate-100'>
                        <h2 className='text-red-500 my-2 text-3xl font-semibold text-center'>What is Hijama.?</h2>
                        <p>
                            Wet cupping is also known as Hijama (Arabic: حجامة lit. "sucking") or medicinal bleeding, where blood is drawn by local suction from a small skin incision. The first reported usages are found in the Islamic hadith, sayings attributed to or describing the actions of the Islamic prophet Muhammad.
                        </p>
                        <p className='mt-3'>
                            Hijama or cupping is an effective treatment for this condition. Cupping is an effective treatment for lung diseases like chronic cough, asthma, bronchial congestion, and pleurisy. Often the health of your skin directly reflects what is happening inside your body.
                        </p>
                    </article>

                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {
                        hijamaDetails.map(hijamaDetail => <HijamaDetail
                            key={hijamaDetail.id}
                            hijamaDetail={hijamaDetail}
                        ></HijamaDetail>)
                    }
                </div>
            </div>

        </div>
    );
};

export default HijamaDetails;