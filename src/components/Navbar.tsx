import { Home } from "lucide-react";
import { Users } from "lucide-react";
import { Calendar } from "lucide-react";

function Navbar() {
  return (
    <nav className="z-50 text-white w-96 flex justify-center items-center font-aleo font-bold text-2xl">
      <div className="backdrop-blur-sm container mx-auto h-16 flex justify-between items-center border border-slate-100 rounded-full ">
        <nav className="flex space-x-4 w-full justify-center gap-0">
          <a
            href="/"
            className="w-full m-0 hover:text-red-600 ease-out duration-200 cursor-pointer flex flex-col justify-center items-center gap-2 text-xs group"
          >
            <div>
              <Home size={20}/>
            </div>
            <div className="hidden group-hover:block">Home</div>
          </a>
          <a
            href="/Team"
            className="w-full hover:text-red-600 ease-out duration-200 cursor-pointer flex flex-col justify-center items-center gap-2 text-xs group"
          >
            <div>
              <Users size={20}/>
            </div>
            <div className="hidden group-hover:block">The Team</div>
          </a>
          <a
            href="/Events"
            className="w-full hover:text-red-600 ease-out duration-200 cursor-pointer flex flex-col justify-center items-center gap-2 text-xs group"
          >
            <div>
              <Calendar size={20}/>
            </div>
            <div className="hidden group-hover:block">Events</div>
          </a>
        </nav>
      </div>
    </nav>
  );
}

export default Navbar;
