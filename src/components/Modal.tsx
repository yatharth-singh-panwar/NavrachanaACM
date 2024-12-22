import { useRef } from "react";
import { CloseButton } from "./CloseButton";
import { BACKEND_URL } from "../../config";
import axios from "axios";

interface propsType {
  open: boolean;
  isEdit: boolean;
  eventId?: string;
  onClose: () => void;
}
export const Modal = ({ open, isEdit, eventId, onClose }: propsType) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const qrCodeRef = useRef<HTMLInputElement>(null);
  const registrationFormRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);

  console.log("Event ID: " + eventId);

  async function sendData() {
    if (!isEdit) {
      if (
        nameRef.current?.value === "" ||
        descriptionRef.current?.value === "" ||
        imageRef.current?.value === "" ||
        qrCodeRef.current?.value === "" ||
        registrationFormRef.current?.value === "" ||
        dateRef.current?.value === ""
      ) {
        alert("Please fill all the fields");
        return;
      }
    }

    try {
      if (isEdit) {
        console.log("Editing Event: " + eventId);
        const updateData: any = {};
        if (nameRef.current?.value) updateData.name = nameRef.current?.value;
        if (descriptionRef.current?.value)
          updateData.description = descriptionRef.current?.value;
        if (imageRef.current?.value)
          updateData.photoLink = imageRef.current?.value;
        if (qrCodeRef.current?.value)
          updateData.qrLink = qrCodeRef.current?.value;
        if (registrationFormRef.current?.value)
          updateData.registrationLink = registrationFormRef.current?.value;
        if (dateRef.current?.value) updateData.date = dateRef.current?.value;

        await axios.put(`${BACKEND_URL}admin/dashboard/editEvent/`, {
          id: eventId,
          ...updateData,
        });
        alert("Event Updated Successfully. Reload the page to see changes");
        onClose();
        return;
      } else {
        await axios.post(`${BACKEND_URL}admin/dashboard/Event/`, {
          name: nameRef.current?.value,
          description: descriptionRef.current?.value,
          photoLink: imageRef.current?.value,
          qrLink: qrCodeRef.current?.value,
          registrationLink: registrationFormRef.current?.value,
          date: dateRef.current?.value,
        });

        alert("Event Added Successfully. Reload the page to see changes");
        onClose();
      }
    } catch (e) {
      alert("Error occurred while trying to add event. Check console!");
      console.log(e);
    }
  }

  return (
    <>
      {open && (
        <div className="w-screen h-screen absolute top-0 left-0 bg-black bg-opacity-90 z-50 font-aleo">
          <div className="h-screen flex items-center justify-center">
            <div className="p-2 flex flex-col gap-2 items-center h-68 rounded-lg w-96 bg-white-400 opacity-100 bg-gray-100 text-black z-60">
              <div
                className="w-full flex items-end justify-end cursor-pointer pl-10"
                onClick={onClose}
              >
                <CloseButton />
              </div>
              <div className="text-2xl font-bold text-center">
                {isEdit ? "Edit Event" : "Add Event"}
              </div>
              <p className="font-normal text-lg text-start min-w-56 ">
                Name of the event
              </p>
              <input
                className="border-2 border-black rounded-md p-2 w-56"
                ref={nameRef}
                type="text"
              />
              <p className="font-normal text-lg  text-start min-w-56">
                Brief Description of the event
              </p>
              <input
                className="border-2 border-black rounded-md p-2 w-56"
                ref={descriptionRef}
                type="text"
              />
              <p className="font-normal text-lg  text-start min-w-56">
                Event Image Link
              </p>
              <input
                className="border-2 border-black rounded-md p-2 w-56"
                ref={imageRef}
                type="text"
              />
              <p className="font-normal text-lg  text-start min-w-56">
                Event QR code link
              </p>
              <input
                className="border-2 border-black rounded-md p-2 w-56"
                ref={qrCodeRef}
                type="text"
              />
              <p className="font-normal text-lg  text-start min-w-56">
                Registration Form Link
              </p>
              <input
                className="border-2 border-black rounded-md p-2 w-56"
                ref={registrationFormRef}
                type="text"
              />
              <p className="font-normal text-lg  text-start min-w-56">
                Event Date
              </p>
              <input
                className="border-2 text-black border-black rounded-md p-2 w-56"
                ref={dateRef}
                type="date"
              />
              <button
                className="border-2 bg-red-600 w-44 rounded-lg p-2 text-white active:scale-95 hover:bg-red-700 transition-all"
                onClick={() => {
                  // Send data to Backend
                  sendData();
                  console.log("Helowklj");
                }}
              >
                {isEdit ? "Update" : "Add"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
