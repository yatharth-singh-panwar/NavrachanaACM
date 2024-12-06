import { Dock, DockIcon } from "../components/ui/dock";
import { Home } from "lucide-react";
import { Users } from "lucide-react";
import { Calendar } from "lucide-react";
import TextRevealByWord from "@/components/ui/text-reveal";
import Globe from "@/components/ui/globe";
import Meteors from "@/components/ui/meteors";

export function Landing() {
  return (
    <div>
        <div className = "absolute flex h-screen w-full flex-col items-center justify-center overflow-hidden md:shadow-xl"> 
          <Meteors/>
        </div>
        
        <div className="sticky top-0 p-5">
            <Dock>
            <DockIcon className="p-3">{<Home color="#ffffff" />}</DockIcon>

            <DockIcon className="p-3">{<Users color="#ffffff" />}</DockIcon>

            <DockIcon className=" p-3">{<Calendar color="#ffffff" />}</DockIcon>
            </Dock>
        </div>
        <div className="">
            <div className="top-0 flex items-start">
                <div className="rounded-lg border w-full top-0 flex min-h-64 items-start justify-start ">
                    <TextRevealByWord
                        className="justify-center "
                        text="WELCOME TO THE NAVRACHANA ACM STUDENT CHAPTER"
                    />      
                </div> 
         
                <div className="h-[1430px] rounded-lg border w-2/4" >
                    <div className="sticky top-10">
                      <Globe />
                    </div>
                </div>
            </div>
        </div>
        <div className="h-[1000px]">akjdfhas</div>
    </div>
  );
}
