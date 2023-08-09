import { FC } from "react";

const Who: FC = () => {
  return (
    <div
      id="who"
      className="flex gap-[5vw] px-[5vw] lg:px-[15vw] z-[2] lg:min-h-[70vh] items-center justify-center flex-col md:flex-row"
    >
      <img
        data-scroll
        data-scroll-speed="2"
        className="w-[225px] h-[225px] rounded-full"
        src="/Atharva1212.jpg"
        alt=""
      />
      <div>
        <h1 data-scroll data-scroll-speed="0.5" className="title text-[40px]">
        Who am I?
        </h1>

        {/* Hide my age :v */}
        <p data-scroll className="text-lg text-gray-200" id="story">
          My name is Atharva Khule. I&apos;m an undergraduate student and a Web Developer currently living in Pune, Maharashtra. My current tech stack is MERN and have  
          keen interest in programming and design to find creative solutions. Besides  
          coding, I also like finance, listening to music and playing video games.
        </p>
        <div className="my-4">
        <a href="https://drive.google.com/file/d/1TneytuHoa5NsR6Rf57G7XmCRCRIbghE2/view?usp=sharing" className="p-2 text-buttonText bg-gray-600 rounded-md hover:bg-gray-400 focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out" target="_blank">Download CV</a></div>
      </div>
    </div>
  );
};

export default Who;
