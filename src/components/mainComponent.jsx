import React from 'react';
import vdo from '../assets/eatPlek.mp4';
import mobile from '../assets/mobile view .mp4';
import bgPic from '../assets/Untitled-1.png';

function MainComponent() {
    return (
        <div className=' h-screen md:flex  md:mb-0'
            style={{
                backgroundImage: `url(${bgPic})`,
            }}>

            <div
                className='w-full h-screen md:w-1/2 md:h-screen bg-cover relative flex justify-center items-center'
                style={{
                    backgroundImage: `url(${bgPic})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    boxShadow: '10px 0px 35px rgba(0, 0, 0, 0.5)', // Shadow on the right
                }}
            >
                <div className='p-5 flex flex-col justify-center items-center h-screen'>
                    <h1 className='text-center text-5xl text-white'>
                        EATPLEK new.
                    </h1>

                    <p className='text-center text-1xl text-white mt-4 max-w-lg'>
                        Kerala first time dine in takeaway prebooking platform                    </p>

                    <button className="bg-blue-900 hover:bg-blue-600 mt-4 bg-opacity-85 hover:bg-opacity-100 text-white font-bold py-2 px-4 rounded rounded-lg shadow-lg transition duration-300 ease-in-out">
                        Download Bompitup
                    </button>
                </div>
            </div>

            {/* second  section */}
            <div
                className='w-full    md:w-1/2 h-screen md:h-screen bg-cover relative flex justify-center items-center   '
                style={{
                    backgroundImage: `url(${bgPic})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    boxShadow: '35px 0px 15px rgba(0, 0, 0, 0.5)', // Shadow on the left
                }}
            >
                <div className='w-full  md:w-full  h-full  md:h-full  p-4   flex relative justify-center items-center    '>
                    <video autoPlay loop muted   // Added playsInline for iOS support
                        className='absolute   h-full md:h-screen object-cover '
                    >
                        <source
                            className=' '
                            src={mobile} type="video/mp4" />
                    </video>
                </div>


            </div>


        </div >

    );
}

export default MainComponent;




{/*
 <video autoPlay loop muted
className='absolute top-0 left-0 w-full h-full object-cover block md:hidden'
>
<source src={mobile} type="video/mp4" />
</video> 
*/}