import Navbar from "../components/Navbar";
import AnimatedGridPattern from "../components/ui/animated-grid-pattern";
import logo from "@/assets/LOGOFINAL.png";
import WordPullUp from "../components/ui/word-pull-up";
import { Footer } from "../components/Footer";
import axios from "axios";
import { BACKEND_URL } from "../../config";
import { useEffect, useState } from "react";
import { EventDetails } from "@/components/EventDetails";

export default function Events() {
  const [events, setEvents] = useState([]);

  async function getEvents() {
    try {
      const response = await axios.get(`${BACKEND_URL}admin/dashboard/Event/`);

      if (response.status === 200) {
        setEvents(response.data.allEvents);
        console.log(events);
      } else {
        console.log("Error occured while trying to fetch events");
      }
    } catch (e) {
      console.log("Server Error occured while trying to fetch events");
      console.log(e);
    }
  }

  useEffect(() => {
    getEvents();

    return () => {
      setEvents([]);
    };
  }, []);

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
          <img className="rounded-2xl" src={logo} height={400} width={500} />
        </div>
        <Navbar />
      </div>
      <div className="flex justify-center items-center text-4 text-white font-aleo">
        {events && (
          <div className="content flex gap-5 flex-wrap">
            {events.map((event: any) => {
              console.log(event._id);
              return (
                <EventDetails
                  isAdmin={false}
                  eventId={event._id}
                  Heading={event.name}
                  Description={event.desc}
                  Image={event.photoLink}
                  formLink={event.registrationLink}
                  qrLink={event.qrLink}
                  events={events}
                  setEvents={setEvents}
                />
              );
            })}
          </div>
        )}
        {events.length === 0 && (
          <WordPullUp
            words="Coming Soon..."
            className="text-center text-white font-mega-bold text-4xl p-2 font-aleo"
          />
        )}
      </div>

      <Footer />
    </>
  );
}
