
import { Globe } from "@/components/ui/globe";
import Meteors from "@/components/ui/meteors";
import SparklesText from "@/components/ui/sparkles-text";
import BlurredInComponent from "@/components/BlurIn";
import Navbar from "@/components/Navbar";
import { AnimatedBeamDemo } from "@/components/About";
import WordPullUp from "@/components/ui/word-pull-up";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import TypingAnimation from "@/components/ui/typing-animation";
import NumberTicker from "@/components/ui/number-ticker";
import Particles from "@/components/ui/particles";
import BoxReveal from "@/components/ui/box-reveal";

export function Landing() {

  return (
    <div>
        <div className = "absolute -z-10 flex h-screen w-full flex-col items-center justify-center overflow-hidden"> 
          <Meteors number={30} />
        </div> 
        <div className="absolute -z-30 w-full h-[910px]">
          <AnimatedGridPattern repeatDelay={2} width={100} height={100} numSquares={5} className=""/>
        </div>
        <div className="z-10 flex justify-end">
          <Navbar/>
        </div>
        <div >
          <div className="mt-16 flex w-full items-center justify-center pb-20">
            <div className="-z-20 w-full top-0  min-h-64 items-center justify-center ">
              <div className="text-center text-white font-extrabold text-5xl font-aleo">Welcome To</div>
                <WordPullUp  words="NUV x ACM" className="text-center text-red-600 font-mega-bold text-9xl p-2 font-aleo"/>
                <SparklesText
                  className="absolute -z-30 top-[100px] left-[365px] pl-40 text-center text-transparent font-mega-bold text-9xl p-2 font-aleo"
                  text="NUV x ACM"
                />
                <div className="ml-[300px] text-center text-white font-extrabold text-4xl pb-0 font-aleo w-3/4">
                  <VelocityScroll text="Student Chapter" className="text-white"/>
                </div> 
              <div className="z-50 items-center w-full max max-h-[500px] overflow-hidden">
                <Globe />
              </div>           
            </div> 
          </div>
          <div>
            <div className="w-full absolute text-white">
                <Particles  color="#b91c1c"/>
            </div>
              <div>
                <BlurredInComponent word="What Is ACM?"/>
              </div>
              <div className="w-full flex items-center justify-center mt-8">
                <div className="text-gray-200 flex items-center max-w-3xl text-justify" >
                  <div className="size-full max-w-full items-center justify-center overflow-hidden pt-8">
                   
                      <p className="text-2xl">
                        The <strong>Association for Computing Machinery (ACM)</strong> is a global organization dedicated to advancing computing as a science and profession. With over 100,000 members worldwide, ACM brings together educators, researchers, and professionals to address the challenges and opportunities in computing. The Navrachana University ACM Chapter joins this vast network, creating a platform for students and faculty to connect, learn, and contribute to the ever-evolving field of technology.
                      </p>
                      
                  </div>

                  
                </div>
                <div className="text-white flex flex-col gap-5 w-[500px] items-center justify-center mx-0 px-0">
                  <div className="flex gap-5">
                    <NumberTicker value={190} className="whitespace-pre-wrap text-8xl font-extrabold tracking-tighter text-gray-200"/>
                    <p className="text-8xl font-extrabold text-gray-200">+</p>

                  </div>
                  <div className="text-3xl font-extrabold tracking-tighter text-gray-200">COUNTRIES</div>
                </div>
              </div>
              <div className="h-28"></div>

              <div className="w-full flex items-center justify-center">
                <TypingAnimation text="Our Vision & Mission" className="text-white font-bold text-6xl "/>
              </div>
              <div className="w-full flex items-center justify-center mt-8">
                <div className="text-white flex w-[500px] items-center justify-center mx-0 px-0">
                  <AnimatedBeamDemo/> 
                </div>
                <div className="text-white flex items-center max-w-3xl" >
                  <p className="pl-9 text-2xl text-justify text-gray-300">
                  As part of the Navrachana University ACM Chapter, students can access opportunities for academic, professional, and personal growth. Aligned with ACM's global mission, the chapter offers resources like the Digital Library, technical workshops, hackathons, and networking events. With a focus on technical excellence, lifelong learning, and inclusivity, we aim to empower students to become leaders in computing and drive positive change through technology.
                  </p>
                </div>
              </div>        

          </div>
          
        </div>
    </div>
  );
}
