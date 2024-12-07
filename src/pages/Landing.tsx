
import { Globe } from "@/components/ui/globe";
import Meteors from "@/components/ui/meteors";
import SparklesText from "@/components/ui/sparkles-text";
import BlurredInComponent from "@/components/BlurIn";
import Navbar from "@/components/Navbar";

export function Landing() {

  return (
    <div>
        <div className = "absolute -z-10 flex h-screen w-full flex-col items-center justify-center overflow-hidden md:shadow-xl "> 
          <Meteors number={45}/>
        </div> 
        <div className="z-10 flex justify-end">
          <Navbar/>
        </div>
        <div >
          <div className="pt-7 flex w-full items-center justify-center pb-20">
              <div className="rounded-lg  w-full top-0  min-h-64 items-center justify-center ">
                  <div className="text-center text-white font-extrabold text-6xl">Welcome To</div>
                  <SparklesText
                      className="text-center text-red-700 font-extrabold text-8xl p-2"
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

        </div>
    </div>
  );
}
