import  { CloseButton }  from "./CloseButton"

interface propsType{
    open: boolean;
    onClose: ()=>void
}
export const Modal  = ({open, onClose}: propsType)=>{
    return <>
        {open && 
        <div className="w-screen h-screen bg-black bg-opacity-80 fixed">
              <div className="h-screen flex items-center justify-center ">
                <div className="p-2 flex flex-col gap-2 items-center h-68 rounded-lg w-96 bg-white-400 opacity-100 bg-white">
                    <div className="w-full flex items-end justify-end cursor-pointer" onClick={onClose}><CloseButton/></div>
                    <p className="font-normal text-lg text-center min-w-full ">Enter your name of the event</p>                    
                    <input className='border-2 border-black rounded-md p-2 w-56' type="text" />
                    <p className="font-normal text-lg  text-start max-w-56">Enter a SHORT description of the event</p>  
                    <input className='border-2 border-black rounded-md p-2 w-56' type="text" />
                    <p className="font-normal text-lg  text-start max-w-56">Enter the event IMAGE link</p>  
                    <input className='border-2 border-black rounded-md p-2 w-56' type="text" />
                    <p className="font-normal text-lg  text-start min-w-56">Event QR code link</p>  
                    <input className='border-2 border-black rounded-md p-2 w-56' type="text" />
                    <p className="font-normal text-lg  text-start max-w-56">Enter the registration FORM LINK</p>  
                    <input className='border-2 border-black rounded-md p-2 w-56' type="text" />
                    <button className='border-2 bg-purple-500 rounded-lg p-2 text-white-400' onClick={()=>{console.log("Helowklj")}}>Save</button>
                </div>
              </div>
        </div>
        
        }
    </>
}