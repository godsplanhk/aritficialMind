import { CourseGrid } from "@/components/course-grid";
import { Navbar } from "@/components/navbar";
import { AMSparkle } from "@/components/sparkleAI";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TracingBeam } from "@/components/ui/tracing-beam";


export default function Landing(){
  return(
    
    <div>
    <Navbar></Navbar>
      <div className="">
      <AMSparkle></AMSparkle>
      </div>
      <TracingBeam>
      <Intro/>
      <div id='course'>
      <CourseGrid/>
      </div>
    </TracingBeam>
    </div>
  )
}

export function Intro() {
  return (
    <div className="h-screen w-full rounded-md bg-white relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-3xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-400  text-center font-sans font-bold">
          Shaping AI with Minds
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-md text-center relative z-10">
    Welcome to Artificial Minds! Dive into the world of artificial intelligence with our comprehensive courses designed to enhance your understanding and skills in this rapidly evolving field. Whether you&apos;re a beginner or an experienced professional, our curated content ensures you stay ahead in the AI revolution. Join us on this journey of innovation and exploration!
        </p>
      </div>
      {/* <BackgroundBeams /> */}
    </div>
  );
}