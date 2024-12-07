import { Dock, DockIcon } from "../components/ui/dock";
import { Home } from "lucide-react";
import { Users } from "lucide-react";
import { Calendar } from "lucide-react";
import { Globe } from "@/components/ui/globe";
import Meteors from "@/components/ui/meteors";
import SparklesText from "@/components/ui/sparkles-text";

export function Landing() {

  return (
    <div>
        <div className = "absolute flex h-screen w-full flex-col items-center justify-center overflow-hidden md:shadow-xl"> 
          <Meteors/>
        </div> 
        <div className="flex justify-end">

          <div className="sticky top-0 p-5">
              <Dock>
              <DockIcon className="p-3">{<Home color="#ffffff" />}</DockIcon>

              <DockIcon className="p-3">{<Users color="#ffffff" />}</DockIcon>

              <DockIcon className=" p-3">{<Calendar color="#ffffff" />}</DockIcon>
              </Dock>
          </div>
        </div>
        <div className="">
            <div className="top-0 flex w-full items-center justify-center">
                <div className="rounded-lg  w-full top-0  min-h-64 items-center justify-center ">
                    <div className="text-center text-white font-extrabold text-6xl ">Welcome To</div>
                    <SparklesText
                        className="text-center text-red-900 font-extrabold text-8xl p-2"
                        text="NUV x ACM"
                    />
                    <div className="text-center text-white font-extrabold text-6xl">Student Chapter</div> 

                  <div className="rounded-lg items-center" >
                    <div className="sticky top-10 ">
                      <Globe/>
                  </div>
                </div>           
                </div> 
         

            </div>
        </div>
        <div className="h-[1000px]">akjdfhas</div>
    </div>
  );
}
