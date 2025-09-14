import { FunctionComponent } from "react";
import Component1 from "./Component1";
import Component11 from "./Component11";
import Component8 from "./Component8";

export type GroupComponent1111Type = {
  className?: string;
};

const GroupComponent1111: FunctionComponent<GroupComponent1111Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch bg-[#116ee0] flex items-start justify-between pt-9 px-0 pb-[24.2px] box-border gap-5 max-w-full text-center text-[14px] text-color-grey-97 font-[Inter] ${className}`}
    >
      <div className="h-[450px] w-[1920px] relative bg-[#116ee0] hidden max-w-full" />
      <div className="w-48 flex flex-col items-start">
        <div className="flex-1 flex flex-col items-center py-0 pl-0 pr-5">
          <div className="w-[129.6px] flex-1 overflow-hidden flex items-start max-w-width-129-6">
            <div className="h-[112.8px] w-[129.6px] overflow-hidden shrink-0 flex flex-col items-center justify-center">
              <Component1
                variant={13}
                component1Width="129.6px"
                component1Height="112.8px"
                clipPathGroup="/Clip-path-group4.svg"
                component1AlignSelf="unset"
              />
            </div>
          </div>
        </div>
      </div>
      <section className="w-[619px] flex flex-col items-start pt-[54px] px-0 pb-0 box-border max-w-full text-left text-[44px] text-Color-Elementary-White font-[Inter]">
        <div className="self-stretch flex flex-col items-start gap-[30px] max-w-full">
          <h1 className="m-0 w-[416px] relative text-[length:inherit] tracking-[-0.01em] leading-[115%] font-[700] font-[inherit] flex items-center max-w-full z-[1]">
            Ready to Unlock Your Full Potential?
          </h1>
          <div className="relative text-[18px] leading-[170%] z-[1]">
            Join thousands of students who are already achieving their academic
            goals with personalized tutoring that actually works.
          </div>
          <button className="cursor-pointer [border:none] pt-[13.5px] px-[33px] pb-[15.5px] bg-Color-Elementary-White shadow-[0px_5px_20px_rgba(0,_0,_0,_0.1)] rounded-[50px] flex items-start z-[1] hover:bg-[#e6e6e6]">
            <b className="relative text-[14px] leading-[170%] uppercase font-[Inter] text-[#116ee0] text-center">
              Start Your Free Trial
            </b>
          </button>
        </div>
      </section>
      <div className="w-[675px] flex flex-col items-start pt-[136px] px-0 pb-0 box-border max-w-full">
        <div className="w-[650px] flex flex-col items-start py-0 pl-0 pr-5 box-border gap-[25px] max-w-full">
          <div className="self-stretch h-[59px] relative max-w-full">
            <div className="absolute top-[0px] left-[0px] w-full flex flex-col items-start max-w-full h-full">
              <div className="w-full flex-1 bg-color-grey-97 border-color-grey-92 border-solid border-stroke-weight-1 box-border overflow-hidden flex items-start pt-[18px] px-11 pb-[17px] max-w-width-630 z-[0]">
                <input
                  className="w-[calc(100%_-_97.6px)] [border:none] [outline:none] bg-[transparent] overflow-hidden flex flex-col items-start font-['DM_Sans'] text-[15px] text-color-grey-71 min-w-[250px]"
                  placeholder="Your Email Address "
                  type="text"
                />
              </div>
              <div className="w-[18px] !!m-[0 important] absolute bottom-[13px] left-[14px] flex flex-col items-start max-w-width-1920 z-[1]">
                <div className="self-stretch flex flex-col items-start pt-0 px-0 pb-2">
                  <div className="flex items-start">
                    <Component11 variant={15} />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-[5px] left-[457px] bg-[#116ee0] flex items-center justify-center py-[11px] px-[23px]">
              <div className="flex-1 flex items-start justify-center">
                <b className="relative leading-[27px]">Schedule a Demo</b>
              </div>
            </div>
          </div>
          <div className="self-stretch h-7 flex flex-col items-start pt-px px-0 pb-[9px] box-border text-left text-Color-Elementary-White font-font-family-Font-2">
            <div className="flex-1 flex items-center justify-center [row-gap:20px]">
              <div className="w-[27px] flex items-start py-0 px-px box-border">
                <input
                  className="m-0 h-[18px] w-[25px] relative"
                  type="checkbox"
                />
              </div>
              <div className="relative leading-font-size-20">
                I agree that my submitted data is being 
              </div>
              <Component8 variant={2} text="collected and stored" />
              <div className="relative leading-font-size-20">.</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start pt-[250px] px-0 pb-0">
        <div className="flex-1 flex flex-col items-start max-w-width-1440">
          <div className="flex-1 flex flex-col items-center">
            <div className="w-[172.8px] overflow-hidden flex items-start max-w-width-172-8">
              <div className="h-[139.8px] w-[172.8px] overflow-hidden shrink-0 flex flex-col items-center justify-center">
                <Component1
                  variant={14}
                  component1Width="172.8px"
                  component1Height="139.8px"
                  clipPathGroup="/Clip-path-group9.svg"
                  component1AlignSelf="unset"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroupComponent1111;
