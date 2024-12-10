import {TwitterLogo} from "../icons/Twitter";
import { LinkedInIcon } from "@/icons/LinkedIn";
import { MagicCard } from "./ui/magic-card";
import { useState } from "react";
interface information{
    imageUrl: string;
    name: string;
    position: string;
    linkedInProfileUrl?: string;
    TwitterProfileUrl: string;
}
export function MemberInfo(props: information) {
    const [mouse, updateMouse] = useState(false);
    return (
        <div className="w-72 h-[400px]" onMouseEnter = {()=>{updateMouse(true)}} onMouseLeave={()=>{updateMouse(false)}}>
            <MagicCard className="flex justify-center p-5" children={
                <div >
                    <div className = {`max-w-3/4 h-[250px] image overflow-hidden rounded-lg ${mouse ? "transform-gpu scale-95 duration-300" : ""}`}>
                        <img className="rounded-lg " src={props.imageUrl}/>
                    </div>
                    <div className="text-center font-extrabold text-xl mt-2"><p>{props.name}</p></div>
                    <div className="text-center mb-2"><p>{props.position}</p></div>
                    <div className="flex justify-center gap-5">
                        <a href={props.TwitterProfileUrl} target="_blank" rel="noopener noreferrer">
                            <TwitterLogo isOpen={mouse} />
                        </a>
                        <a href={props.linkedInProfileUrl} target="_blank" rel="noopener noreferrer">
                            <LinkedInIcon isOpen={mouse} />
                        </a>
                    </div>
                </div>
            }/>
        </div>
    );
}
