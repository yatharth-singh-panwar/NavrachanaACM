import { Button } from "@/components/Button";
import { Edit2, Trash2 } from "lucide-react";
import { BACKEND_URL } from "../../../config.ts";
import { PlusIcon } from "lucide-react";
import { Modal } from "@/components/Modal";
import { useEffect, useState } from "react";
import { EventDetails } from "@/components/EventDetails";
import axios from "axios";

export default function Dashboard() {
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
    getEvents();

    return () => {
      setEvents([]);
    };
  }, []);

  return (
    <>
      <Modal
        open={model}
        onClose={() => {
          setModel(false);
        }}
      />
      <div className="bg-white w-full h-screen">
        <div className="flex row">
          <div className="w-full p-6">
            <div className="bg-[#F8FBFD]">
              <div className="flex justify-between p-2">
                <h1 className="text-xl font-bold content-center">
                  Welcome Admin
                </h1>
                <div className="flex justify-end gap-5 content-center">
                  <Button
                    startIcon={<PlusIcon />}
                    variant="primary"
                    size="md"
                    text="Add new Event"
                    onClick={() => {
                      setModel(true);
                    }}
                  ></Button>
                </div>
              </div>
              <div className="content flex">
                {events.map((event: any) => {
                  return (
                    <EventDetails
                      isAdmin={true}
                      Heading={event.name}
                      Description={event.desc}
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
