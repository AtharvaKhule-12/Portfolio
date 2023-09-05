import React from "react";

const Experience = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="-1"
        className="text-center text-4xl mb-20 md:mb-8"
      >
        Experience
      </h1>

      <div className="block sm:w-3/4 md:w-[90%] pb-6 pt-3 px-6 border justify-center border-gray-200 rounded-lg shadow md:text-center mb-20">
        <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-start">
          <h5 className="text-2xl font-bold">
            Suprrlink - Web Developer Intern
          </h5>

          <p className="font-normal text-2xl py-4">June 2023 - Present</p>
        </div>
        <div>
          <ul
            style={{ listStyle: "disc", padding: "0rem 1rem" }}
            className="text-white text-center md:text-start  text-[18px]"
          >
            <li>
               Collaborated and successfully led the end-to-end development of Suprrlink’s brand website, employing
Next.js to deliver a highly performant and responsive user experience.
            </li>
            <li>
               Designed and implemented the admin dashboard, utilizing real-time data updates to display 30+ business
metrics to efficiently track the growth of brands and creators on the platform.
            </li>
            <li>
               Integrated Redux for state management, optimzing application peroformance and reducing load time 47%.
            </li>
          </ul>
        </div>
      </div>
      <div className="block sm:w-3/4 md:w-[90%] pb-6 pt-3 px-6 border justify-center border-gray-200 rounded-lg shadow md:text-center mb-20">
        <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-start">
          <h5 className="text-2xl font-bold">
            Newton School Coding Club,PCCOE - Full Stack Co-Lead
          </h5>

          <p className="font-normal text-2xl py-4">Jan 2023 - Present</p>
        </div>
        <div>
          <ul
            style={{ listStyle: "disc", padding: "0rem 1rem" }}
            className="text-white text-center md:text-start  text-[18px]"
          >
            <li>
                Co-led a team of 10 full-stack developers in organizing and conducting technical workshops and hackathons,
resulting in increased participation and engagement.
            </li>
            <li>
               Organized and mentored 200+ junior developers, helping them to grow their skills and knowledge.
            </li>
            <li>
                Collaborated with industry experts to bring in guest speakers and conduct workshops, enriching the learning
experience for club members.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
