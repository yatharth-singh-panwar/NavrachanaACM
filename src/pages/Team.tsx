import { MemberInfo } from "@/components/MemberInfo";
import Navbar from "@/components/Navbar";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import WordFadeIn from "@/components/ui/word-fade-in";
import Travon from "@/icons/Travon.jpeg";
import Dharminf from "@/icons/dharminFinal.png";
import Ray from "@/icons/RayFinal.png";
import Amaan from "@/icons/Amaan-removebg-preview.png";
import Jaideep from "@/icons/JaideepRaulji.png";
import ashish from "@/icons/AshishJani.png";
import { Footer } from "@/components/Footer";
import logo from "@/assets/LOGOFINAL.png";
import yatharth from "@/icons/yatharthFinal2.png";
export function Team() {
  return (
    <div>
      <div className="absolute -z-30 w-full h-[910px]">
        <AnimatedGridPattern
          repeatDelay={2}
          width={100}
          height={100}
          numSquares={5}
          className=""
        />
      </div>
      <div className="z-50 flex items-center justify-between h-24 m-2 bg-black bg-opacity-60 mb-10">
        <div className="logo bg-black">
          <img 
            className="rounded-2xl"
            src={logo}
            height={400}
            width={500}
          />
        </div>
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
          name="Ms. Ujwala Petigara"
          position="Faculty Sponsor"
          linkedInProfileUrl="https://www.linkedin.com/in/ujwala-petigara-8ba29725a/?originalSubdomain=in"
          TwitterProfileUrl=""
          imageUrl="https://nuv.ac.in/wp-content/uploads/Ujwala-Petigara.png"
        />

        <MemberInfo
          name="Dr. Jaideep Raulji"
          position="Faculty Sponsor"
          linkedInProfileUrl="https://www.linkedin.com/in/jaideepsinhraulji/?originalSubdomain=in"
          TwitterProfileUrl=""
          imageUrl={Jaideep}
        />

        <MemberInfo
          name="Ashish Jani"
          position="Faculty Sponsor"
          linkedInProfileUrl="https://www.linkedin.com/in/ashish-jani/"
          TwitterProfileUrl=""
          imageUrl={ashish}
        />

        <MemberInfo
          name="Travon Bhagat"
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
          name="Hir Ray"
          position="Secretary"
          TwitterProfileUrl=""
          linkedInProfileUrl="https://www.linkedin.com/in/hir-ray-7953a0286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          imageUrl={Ray}
        />
        <MemberInfo
          name="Yatharth Singh Panwar"
          position="Web Master"
          linkedInProfileUrl="https://www.linkedin.com/in/yatharth-singh-panwar-153058288/"
          TwitterProfileUrl="https://x.com/yatharthpnwr"
          imageUrl={yatharth}
        />
      </div>

      <Footer />
    </div>
  );
}
