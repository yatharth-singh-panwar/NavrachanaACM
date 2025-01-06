import { Globe } from "@/components/ui/globe";
import Meteors from "@/components/ui/meteors";
import SparklesText from "@/components/ui/sparkles-text";
import BlurredInComponent from "@/components/BlurIn";
import Navbar from "@/components/Navbar";
import { AnimatedBeamDemo } from "@/components/About";
import WordPullUp from "@/components/ui/word-pull-up";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import NumberTicker from "@/components/ui/number-ticker";
import Particles from "@/components/ui/particles";
import { Footer } from "@/components/Footer";

export function Landing() {
 
  // const images = [
  //   ['src/assets/LandingAssets/leadershipFinal.png'],
  //   ['src/assets/LandingAssets/networkingFinal.png'],
  //   ['src/assets/LandingAssets/SKillsFinal.png'],
  //   ['src/assets/LandingAssets/career-removebgFinalFinal.png']
  // ];
  
  return (
  <div>
    <div className="absolute -z-10 flex h-screen w-full flex-col items-center justify-center overflow-hidden">
    <Meteors number={30} />
    </div>
    <div className="absolute -z-30 w-full h-[910px]">
    <AnimatedGridPattern
    
      repeatDelay={2}
      width={200}
      height={200}
      numSquares={2}
      className=""
    />
    </div>
    <div className="z-50 m-0 flex items-center justify-between h-28 bg-black mb-10">
    <div className="logo bg-black">
      <img 
      className="rounded-2xl"
      src="/assets/FrameFinal.png"
      height={400}
      width={500}
      />
    </div>
    <Navbar />
    </div>
    <div >
    <div className="flex items-start pt-0 mb-16">
      <div className="-z-20 w-1/2  min-h-64 items-center justify-center ml-10">
      <div className="ml-1 mt-24 pl-0 text-black text-3xl text-start font-aleo font-bold">
        EMPOWER YOUR FUTURE WITH
      </div>
      <WordPullUp
        words="NUV ACM"
        className="text-red-600 font-bold p-2 font-aleo text-8xl text-start"
      />
      <SparklesText
        className="z-50 font-bold absolute top-48 text-transparent text-9xl text-start"
        text="NUV ACM"
      />
      <div className="text-black w-5/6 font-aleo text-justify text-lg font-bold">
      <p><span className="text-bold text-red-600 ">Navrachana University</span>, established in July 2009 in Vadodara, Gujarat, is a premier private institution accredited with an 'A' grade by NAAC. It offers a holistic, interdisciplinary curriculum emphasizing real-world application. The university houses five schools: Science, Engineering & Technology, Business & Law, Environmental Design & Architecture, and Liberal Studies & Education, on a modern campus.</p>
      <div className="h-2"></div>
      <p>
        The Chapter is dedicated to fostering knowledge and interest in modern computing—encompassing its science, design, development, and applications—while promoting communication among enthusiasts, primarily serving students at Navrachana University and reaching out to the broader community.
      </p>
      </div>
      </div>
      <div className="w-9/12">
      <div className="text-3xl text-center font-bold mb-4">BENIFITS OFFERED BY NUV ACM</div>
        <div className="flex justify-center gap-14 w-full mb-5">
            <div className="w-60 bg-red-600 rounded-xl p-2 flex flex-col justify-between">
            <div className="flex items-center justify-center w-full p-5">
              <div>
                <img src="/assets/LandingPageAssets/CareerAdvancement.svg" width={120}></img>
              </div>
            </div>
            <div className="flex text-yellow-300 items-center justify-center font-bold text-xl">
              Career Advancement
            </div>
            <div className="w-full h-full">
              <p className="text-m text-justify text-white p-2">Subscribe to the ACM Digital Library for full-text articles, bibliographic data, research papers, and tutorials on cutting-edge technologies.</p>
            </div>
            </div>
          <div className="w-60 bg-red-600 rounded-xl">
            <div className="flex items-center justify-center w-full p-5">
              <img src="/assets/LandingPageAssets/Leadership.svg" width={120}></img>
            </div>
            <div className="font-bold text-yellow-300 flex items-center justify-center text-xl">
              Leadership
            </div>
            <div className="text-justify p-3 text-white ">
             Opportunities for students to take up leadership roles within the chapter and showcase their contributions to a global audience.
            </div>
       
          </div>
        </div>
        <div className="flex items-center justify-center gap-14 w-full  p-2 mb-5">
        <div className="w-60  bg-red-600 rounded-xl gap-2">
          <div className="flex items-center justify-center w-full p-5">
            <img src="/assets/LandingPageAssets/Networking.svg " width={120}></img>
          </div>
          <div className="text-yellow-300 font-bold flex items-center justify-center text-l">
              Networking Opportunities
          </div>
          <div className="text-white text-justify p-3">
           A chance to connect with ACM’s global community of professionals, academicians, and students through conferences, webinars, and mentorship programs.
          </div>
        </div>
          <div className="w-60  bg-red-600 rounded-xl">
            <div className="flex items-center justify-center w-full p-5">
              <img src="/assets/LandingPageAssets/ProffesionalDevelopment.svg" width={120}></img>
            </div>
                 <div className="mt-2 text-yellow-300 font-bold flex items-center justify-center text-xl">
              Research Opportunities
            </div>
              <div className="text-white text-justify p-3">
            ACM offers research opportunities, connecting students to advancements in computing through publications, conferences, and special interest groups.
            </div>
          </div>
          <div className="w-60 bg-red-600 rounded-xl">
            <div className="flex items-center justify-center w-full p-5">
              <img src="/assets/LandingPageAssets/Skills.svg" width={80}></img>
            </div>
              <div className="flex items-center text-yellow-300 font-bold justify-center text-xl">
                Skill Advancement
              </div>
            <div className="text-white text-justify p-4">
            Hands-on learning experiences through workshops, hackathons, coding competitions, and seminars that cover various domains of computing and technology.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div className="w-full absolute text-black ">
        <Particles color="#000000" />
      </div>
      <div className="relative">
      <BlurredInComponent isFooter={false} word="What Is ACM?" />
      </div>
      <div className="w-full flex items-center justify-center mt-8">
      <div className="text-black flex items-start max-w-3xl text-justify">
        <div className="size-full max-w-full items-center justify-center overflow-hidden pt-8">
        <p className="text-2xl">
          The <strong>Association for Computing Machinery (ACM)</strong>{" "}
          is a global organization dedicated to advancing computing as a
          science and profession. With over 100,000 members worldwide,
          ACM brings together educators, researchers, and professionals
          to address the challenges and opportunities in computing. The
          Navrachana University ACM Chapter joins this vast network,
          creating a platform for students and faculty to connect,
          learn, and contribute to the ever-evolving field of
          technology.
        </p>
        </div>
      </div>
      <div className="text-black flex flex-col w-[500px] items-center justify-center mx-0 px-0 ">
        <div className="relative w-80 h-80">
        <Globe className="absolute w-full h-full" />
        </div>
        <div className="flex gap-5">  
        <NumberTicker
          value={190}
          className="whitespace-pre-wrap text-5xl font-extrabold tracking-tighter text-black"
        />
        <p className="text-5xl font-extrabold text-black">+</p>
       
        </div>
        <div className="text-xl font-extrabold tracking-tighter text-black">
        COUNTRIES
        </div>
      </div>

      </div>
      <div className="h-28"></div>
      <div className="w-full flex items-center justify-center">
      <BlurredInComponent isFooter={false} word="Our Vision & Mission" />
      </div>
      <div className="w-full flex items-center justify-center mt-8">
      <div className="text-black flex w-[500px] items-center justify-center mx-0 px-0">
        <AnimatedBeamDemo />
      </div>
      <div className="text-black flex items-center max-w-3xl">
        <p className="pl-9 text-xl text-justify text-black">
        The NUV ACM Student Chapter envisions fostering an inclusive, innovative, and collaborative environment where students can excel in the field of computing and technology. Our chapter serves as a bridge between academic learning and professional excellence, empowering students to explore emerging trends, contribute to impactful projects, and develop problem-solving skills essential for the challenges of tomorrow.
        Through workshops, hackathons, guest lectures, and collaborative research opportunities, we aim to inspire curiosity and nurture talent.
        By cultivating a vibrant community, we strive to promote diversity, encourage interdisciplinary collaboration, and ignite a passion for lifelong learning in the ever-evolving landscape of computing.
        </p>
      </div>
      </div>
    </div>
    </div>
    <Footer />
  </div>
  );
}
