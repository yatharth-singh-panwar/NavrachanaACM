import { MemberInfo } from "@/components/MemberInfo"
import Navbar from "@/components/Navbar"
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern"
import WordFadeIn from "@/components/ui/word-fade-in"
export function Team(){
    return(
        <div>
            <div className="fixed w-full z-2 h-screen">
                <AnimatedGridPattern repeatDelay={2} />
            </div>
            <div className="z-10 flex justify-end">
                <Navbar />
            </div>
            <div className="w-full text-center text-white p-10">
                <WordFadeIn words="MEET THE BRAINS" className="text-white" delay={0.7}/>
            </div>
            <div className="flex flex-wrap w-full gap-10 justify-center">
                <MemberInfo name="Yatharth Singh Panwar" position="Web Master" TwitterProfileUrl="https://x.com/yatharthpnwr" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToonwNT4zbwCyq-k-qAzXexPn6URz3gT4BxQ&s"/>
                <MemberInfo name="Yatharth Singh Panwar" position="Web Master" TwitterProfileUrl="https://x.com/yatharthpnwr" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToonwNT4zbwCyq-k-qAzXexPn6URz3gT4BxQ&s"/>
                <MemberInfo name="Yatharth Singh Panwar" position="Web Master" TwitterProfileUrl="https://x.com/yatharthpnwr" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToonwNT4zbwCyq-k-qAzXexPn6URz3gT4BxQ&s"/>
                <MemberInfo name="Yatharth Singh Panwar" position="Web Master" TwitterProfileUrl="https://x.com/yatharthpnwr" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToonwNT4zbwCyq-k-qAzXexPn6URz3gT4BxQ&s"/>
                <MemberInfo name="Yatharth Singh Panwar" position="Web Master" TwitterProfileUrl="https://x.com/yatharthpnwr" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToonwNT4zbwCyq-k-qAzXexPn6URz3gT4BxQ&s"/>
                <MemberInfo name="Yatharth Singh Panwar" position="Web Master" TwitterProfileUrl="https://x.com/yatharthpnwr" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToonwNT4zbwCyq-k-qAzXexPn6URz3gT4BxQ&s"/>

            </div>

        </div>
    )
}