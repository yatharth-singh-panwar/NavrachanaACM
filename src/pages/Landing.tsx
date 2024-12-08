
import { Globe } from "@/components/ui/globe";
import Meteors from "@/components/ui/meteors";
import SparklesText from "@/components/ui/sparkles-text";
import BlurredInComponent from "@/components/BlurIn";
import Navbar from "@/components/Navbar";
import { AnimatedBeamDemo } from "@/components/About";

export function Landing() {

  return (
    <div>
        <div className = "absolute -z-10 flex h-screen w-full flex-col items-center justify-center overflow-hidden"> 
          <Meteors number={30} />
        </div> 
        <div className="z-10 flex justify-end">
          <Navbar/>
        </div>
        <div >
          <div className="pt-4 flex w-full items-center justify-center pb-20">
              <div className="-z-20 w-full top-0  min-h-64 items-center justify-center ">
                  <div className="text-center text-white font-extrabold text-6xl">Welcome To</div>
                  <SparklesText
                      className="text-center text-red-600 font-mega-bold text-9xl p-2"
                      text="NUV x ACM"
                  />
                  <div className="text-center text-white font-extrabold text-6xl pb-0">Student Chapter</div> 
                <div className="items-center w-full max max-h-[500px] overflow-hidden">
                    <Globe />
                </div>           
              </div> 
          </div>
          <div>
            <BlurredInComponent/>
          </div>
          <div className="w-full flex items-center justify-center ">
            <div className="text-white flex items-center max-w-3xl" >
              <p className="pr-36 text-lg">The Association for Computing Machinery (ACM) is a global organization dedicated to advancing computing as a science and profession. With over 100,000 members worldwide, ACM brings together educators, researchers, and professionals to address the challenges and opportunities in computing. The Navrachana University ACM Chapter joins this vast network, creating a platform for students and faculty to connect, learn, and contribute to the ever-evolving field of technology.
              </p>
            </div>
            <div className="text-white flex w-[500px] items-center justify-center mx-0 px-0">
              <AnimatedBeamDemo/> 
            </div>
          </div>
        </div>
    </div>
  );
}
