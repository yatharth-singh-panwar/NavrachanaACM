import { MemberInfo } from "@/components/MemberInfo";
import Navbar from "@/components/Navbar";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import WordFadeIn from "@/components/ui/word-fade-in";
import Travon from "@/icons/Travon.jpeg";
import Dharminf from "@/icons/dharminFinal.png";
import Ray from "@/icons/RayFinal.png";
import Amaan from "@/icons/Amaan-removebg-preview.png";
import { Footer } from "@/components/Footer";
export function Team() {
  return (
    <div>
      <div className="fixed w-full z-2 h-screen">
        <AnimatedGridPattern repeatDelay={2} />
      </div>
      <div className="z-10 flex justify-center">
        <Navbar />
      </div>
      <div className="w-full flex justify-center text-white p-10">
        <WordFadeIn
          words="MEET THE BRAINS"
          className="text-white"
          delay={0.7}
        />
      </div>
      <div className="flex flex-wrap w-full gap-10 justify-center">
        <MemberInfo
          name="Ujwala Petigara"
          position="Faculty Sponsor"
          linkedInProfileUrl="https://www.linkedin.com/in/ujwala-petigara-8ba29725a/?originalSubdomain=in"
          TwitterProfileUrl=""
          imageUrl="https://nuv.ac.in/wp-content/uploads/Ujwala-Petigara.png"
        />
        <MemberInfo
          name="Travon"
          position="Chair"
          linkedInProfileUrl="https://www.linkedin.com/in/travon-bhagat"
          TwitterProfileUrl="https://x.com/TravonBhagat?t=YJ15G5hhPILMpmsu-qaZUQ&s=09"
          imageUrl={Travon}
        />
        <MemberInfo
          name="Dharmin Nagar"
          position="Treasurer"
          linkedInProfileUrl="https://www.linkedin.com/in/nagardharmin/"
          TwitterProfileUrl="https://x.com/dharminnagar"
          imageUrl={Dharminf}
        />
        <MemberInfo
          name="Amaan Surti"
          position="Co Chair"
          linkedInProfileUrl="https://www.linkedin.com/in/amaan-surti-14b072206?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          TwitterProfileUrl="https://x.com/Amaan7399"
          imageUrl={Amaan}
        />
        <MemberInfo
          name="Ray"
          position="Web Master"
          TwitterProfileUrl="https://x.com/yatharthpnwr"
          imageUrl={Ray}
        />
        <MemberInfo
          name="Yatharth Singh Panwar"
          position="Web Master"
          linkedInProfileUrl="https://www.linkedin.com/in/yatharth-singh-panwar-153058288/"
          TwitterProfileUrl="https://x.com/yatharthpnwr"
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToonwNT4zbwCyq-k-qAzXexPn6URz3gT4BxQ&s"
        />
      </div>

      <Footer />
    </div>
  );
}
