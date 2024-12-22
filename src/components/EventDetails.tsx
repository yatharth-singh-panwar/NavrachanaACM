import { MagicCard } from "./ui/magic-card";
import { Button } from "@/components/Button";
import { Edit2, Trash2 } from "lucide-react";
import axios from "axios";
import { BACKEND_URL } from "../../config";

interface EventDetailsProps {
  isAdmin: Boolean;
  Heading: string;
  Description: string;
  formLink?: string;
  Image?: string;
  events: any;
  setEvents: (e: any) => void;
}
export const EventDetails = (props: EventDetailsProps) => {
  async function deleteEvent() {
    try {
      const res = await axios.delete(`${BACKEND_URL}admin/dashboard/Event/`, {
        data: {
          name: props.Heading,
        },
      });

      props.setEvents(
        props.events.filter((e: any) => {
          return e.name !== props.Heading;
        })
      );

      if (res.status === 200) {
        console.log("Event Deleted successfully");
      }
    } catch (e) {
      console.log("Error occured while trying to remove event");
      console.log(e);
    }
  }

  return (
    <div className="bg-white w-80 h-96">
      <MagicCard className="p-5">
        <div className="child">
          <img
            className="rounded-lg w-full h-40 object-cover"
            src={
              props.Image
                ? props.Image
                : "https://next-images.123rf.com/index/_next/image/?url=https://assets-cdn.123rf.com/index/static/assets/top-section-bg.jpeg&w=3840&q=75"
            }
          ></img>
          <div className="m-2 Event Heading text-center w-full font-bold text-2xl font-sans">
            {props.Heading}
          </div>
          <div className=" max-h-60 text-sm mb-0 text-justify  text-wrap">
            <p>{props.Description}</p>
          </div>
          {props.isAdmin && (
            <div className="flex justify-between">
              <Button
                startIcon={<Edit2 size={20} />}
                variant="tertiary"
                size="sm"
                text="Edit Event"
              ></Button>
              <Button
                startIcon={<Trash2 size={17} />}
                variant="secondary"
                size="sm"
                text="Delete Event"
                onClick={deleteEvent}
              ></Button>
            </div>
          )}
          {!props.isAdmin && (
            <div className="w-full flex items-center justify-center">
              <Button
                variant="secondary"
                size="md"
                text="Register Now!"
              ></Button>
            </div>
          )}
        </div>
      </MagicCard>
    </div>
  );
};
