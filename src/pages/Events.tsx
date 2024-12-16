import Navbar from "../components/Navbar";
import AnimatedGridPattern from "../components/ui/animated-grid-pattern";
import logo from "@/assets/LOGOFINAL.png";
import WordPullUp from "../components/ui/word-pull-up";
import { Footer } from "../components/Footer";

export default function Events() {
  return (
    <>
      <div className="absolute -z-30 w-full h-full">
        <AnimatedGridPattern
          repeatDelay={2}
          width={100}
          height={100}
          numSquares={5}
          className=""
        />
      </div>
      <div className="z-50 flex items-center justify-between h-24 bg-black bg-opacity-60 mb-10">
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
      <div className="flex justify-center items-center text-4 text-white font-aleo h-96">
        <WordPullUp
          words="Coming Soon..."
          className="text-center text-white font-mega-bold text-4xl p-2 font-aleo"
        />
      </div>

      <Footer />
    </>
  );
}
