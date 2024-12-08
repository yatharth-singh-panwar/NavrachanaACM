import { Home } from "lucide-react";
import { Users } from "lucide-react";
import { Calendar } from "lucide-react";

function Navbar() {
  return (
    <nav className="text-white w-96 mt-11 mr-11 flex justify-center items-center">
      <div className="backdrop-blur-sm container mx-auto h-20 flex justify-between items-center border border-slate-300 rounded-full">
        <nav className="flex space-x-4 w-full justify-center gap-0">
          <a href='/' className="w-full m-0 hover:text-red-600 ease-out duration-200 cursor-pointer flex flex-col justify-center items-center gap-2 text-sm">
            <div><Home/></div>
            <div>Home</div>
          </a>
          <a href="/Team" className="w-full hover:text-red-600 ease-out duration-200 cursor-pointer flex flex-col justify-center items-center gap-2 text-sm">
            <div><Users/></div>
            <div>The Team</div>
            
          </a>
          <a href="/Events" className="w-full hover:text-red-600 ease-out duration-200 cursor-pointer flex flex-col justify-center items-center gap-2 text-sm">
            <div><Calendar/></div>
            <div>Events</div>
          </a>
        </nav>
      </div>
    </nav>
  );
}


export default Navbar;