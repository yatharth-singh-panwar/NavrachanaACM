import { useEffect, useRef, useState } from "react";
import BlurIn from "./ui/blur-in";
interface wordToDisplay{
  word : string
  size?: number
  isFooter: boolean
}
const useOnScreen = (ref: React.RefObject<HTMLElement>) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting)
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
  
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return isIntersecting;
};

const BlurredInComponent = (props: wordToDisplay) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  return (
    <div ref={ref} className={`${props.isFooter ? 'text-white' : "text-black"} h-16 ${props.size ? `text-[${props.size}px]` : ""} ${!props.size ? "" : ""}`}>
      {isVisible && <BlurIn word={props.word}/>}
    </div>
  );
};

export default BlurredInComponent;