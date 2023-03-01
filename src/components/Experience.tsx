import React from 'react'

const Experience = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <h1 data-scroll data-scroll-direction="horizontal" data-scroll-speed="-1" className="text-center text-4xl mb-20 md:mb-8">Experience</h1>
            <div
                className="block sm:w-3/4 md:w-[90%] pb-6 pt-3 px-6 border justify-center border-gray-200 rounded-lg shadow md:text-center mb-20"
            >
                <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-start">
                    <h5 className="text-2xl font-bold">
                        Newton School Coding Club,PCCOE - Full Stack Co-Lead
                    </h5>

                    <p className="font-normal text-2xl py-4">
                        Jan 2023 - Present
                    </p>
                </div>
                <div>
                    <p className="text-white text-center md:text-start  text-[18px]">
                    As a Co-Lead, I am responsible for working on the development of websites and web applications using Next.js. I was responsible for designing, building, and testing new features, as well as maintaining and improving existing code. In addition to my technical skills, I also developed strong communication and teamwork skills as a co-lead. 
                    </p>

                </div>



            </div>
        </div>
    )
}

export default Experience