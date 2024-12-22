import { Button } from "@/components/Button";
import { BACKEND_URL } from "../../../config.ts";
import { PlusIcon } from "lucide-react";
import { Modal } from "@/components/Modal";
import { useEffect, useState } from "react";
import { EventDetails } from "@/components/EventDetails";
import axios from "axios";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern.tsx";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const [model, setModel] = useState(false);
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
    //axios fetch to get all the events
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/admin/login");
    }
    getEvents();

    return () => {
      setEvents([]);
    };
  }, []);

  return (
    <>
      <div className="absolute -z-30 w-full h-screen">
        <AnimatedGridPattern
          repeatDelay={2}
          width={100}
          height={100}
          numSquares={5}
          className=""
        />
      </div>
      <Modal
        open={model}
        isEdit={false}
        onClose={() => {
          setModel(false);
        }}
      />
      <div className="w-full h-screen">
        <div className="flex row">
          <div className="w-full p-6">
            <div className="text-white">
              <div className="flex justify-between font-aleo p-2">
                <h1 className="text-xl font-bold content-center">
                  Welcome Admin
                </h1>
                <div className="flex justify-end gap-5 content-center">
                  <Button
                    startIcon={<PlusIcon />}
                    variant="secondary"
                    size="md"
                    text="Add new Event"
                    onClick={() => {
                      setModel(true);
                    }}
                  ></Button>
                </div>
              </div>
              <div className="content flex gap-5 flex-wrap">
                {events.map((event: any) => {
                  console.log(event._id);
                  return (
                    <EventDetails
                      isAdmin={true}
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
              {/* <EventDetails
                isAdmin={true}
                Heading={"Event heading"}
                Description={
                  "Get your bags ready for an ultimate experiecne with the devs. Make the best out of the "
                }
              /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
