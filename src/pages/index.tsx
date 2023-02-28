import Contact from "../components/Contact";
import Cursor from "../components/Cursor";
import Intro from "../components/Intro";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import MainProjects from "../components/MainProjects";
import Skills from "../components/Skills";
import Who from "../components/Who";
import { data } from "../shared/data";
import { useRef } from "react";
import Experience from "../components/Experience";


const Home = () => {
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        tablet: {
          smooth: true,
          breakpoint: 768,
        },
      }}
      watch={[]}
      containerRef={containerRef}
    >
      <Cursor />

      <div data-scroll-container ref={containerRef}>
        <Intro />
        <Who />
        <Skills skills={data.skills} />
        <Experience/>
        <MainProjects projects={data.projects} />
        <Contact />
      </div>
    </LocomotiveScrollProvider>
  );
};

export default Home;