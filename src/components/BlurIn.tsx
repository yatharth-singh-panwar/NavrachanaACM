import { useEffect, useRef, useState } from "react";
import BlurIn from "./ui/blur-in";
interface wordToDisplay{
  word : string
  size?: number
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
    <div ref={ref} className={`h-16 text-white ${props.size ? `text-[${props.size}px]` : ""} ${!props.size ? "" : ""}`}>
      {isVisible && <BlurIn word={props.word}/>}
    </div>
  );
};

export default BlurredInComponent;