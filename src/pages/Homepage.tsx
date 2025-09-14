import { FunctionComponent, useEffect } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent11 from "../components/FrameComponent11";
import FrameComponent111 from "../components/FrameComponent111";
import FrameComponent1111 from "../components/FrameComponent1111";
import FrameComponent11111 from "../components/FrameComponent11111";
import FrameComponent111111 from "../components/FrameComponent111111";
import FrameComponent1111111 from "../components/FrameComponent1111111";
import GroupComponent1111 from "../components/GroupComponent1111";
import FrameComponent11111111 from "../components/FrameComponent11111111";

const Homepage: FunctionComponent = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]",
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      },
    );
    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div className="w-full relative bg-Color-Elementary-White overflow-hidden flex flex-col items-start pt-0 px-0 pb-[85px] box-border gap-[11px] leading-[normal] tracking-[normal]">
      <div className="w-full h-[960px] hidden flex-col items-start pt-[150px] pb-[70px] pl-[70px] pr-[162px] box-border relative bg-[url('/public/image@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-width-1920 z-[0]">
        <div className="w-full absolute !!m-[0 important] top-[0px] left-[0px] bg-color-black-solid h-full opacity-line-height-20 z-[0]" />
      </div>
      <FrameComponent1 />
      <FrameComponent11 />
      <img
        className="w-[424.1px] h-[463.4px] absolute !!m-[0 important] bottom-[2000.6px] left-[-189px]"
        loading="lazy"
        alt=""
        src="/Clip-path-group.svg"
      />
      <img
        className="w-[287px] h-[313.6px] absolute !!m-[0 important] right-[-26px] bottom-[-74.4px]"
        loading="lazy"
        alt=""
        src="/Clip-path-group2.svg"
      />
      <FrameComponent111 />
      <FrameComponent1111 />
      <FrameComponent11111 />
      <FrameComponent111111 />
      <FrameComponent1111111 />
      <section className="flex items-start pt-0 px-0 pb-[59px] box-border max-w-[180%] text-left text-[100px] text-[#116ee0] font-[Inter]">
        <h1
          className="m-0 relative text-[length:inherit] tracking-letter-spacing-1 leading-[115%] uppercase font-[700] font-[inherit] [&.animate]:animate-[69s_linear_-34.5s_infinite_normal_forwards_marquee-text] opacity-[1] whitespace-nowrap"
          data-animate-on-scroll
        >
          No credit card required • 7-day free trial • Cancel anytime
        </h1>
      </section>
      <GroupComponent1111 />
      <FrameComponent11111111 />
    </div>
  );
};

export default Homepage;
