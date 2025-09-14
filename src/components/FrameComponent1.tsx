import { FunctionComponent } from "react";
import Component1 from "./Component1";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-col items-end pt-4 sm:pt-8 md:pt-12 lg:pt-[60px] px-4 sm:px-6 md:px-8 lg:px-[200px] pb-8 sm:pb-12 md:pb-16 lg:pb-[108px] box-border relative gap-4 sm:gap-6 md:gap-8 lg:gap-[155px] max-w-full ${className}`}
    >
      <img
        className="w-full h-[calc(100%_-_108px)] absolute !!m-[0 important] top-[0px] right-[0px] bottom-[108px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/Mask-group3@2x.png"
      />
      <nav className="m-0 flex flex-col md:flex-row items-center md:items-end gap-3 md:gap-5 max-w-full text-left text-lg md:text-[24px] text-[#fffcfc] font-[Inter] w-full md:w-auto">
        <div className="hidden md:flex flex-col items-start justify-end pt-0 pb-[13px] pl-0 pr-5">
          <h3 className="m-0 relative text-[length:inherit] font-[600] font-[inherit] z-[2]">
            Find Tutors
          </h3>
        </div>
        <div className="hidden md:flex flex-col items-start justify-end pt-0 pb-3 pl-0 pr-[19px]">
          <h3 className="m-0 relative text-[length:inherit] font-[600] font-[inherit] z-[2]">
            How It Works
          </h3>
        </div>
        <div className="hidden md:flex flex-col items-start justify-end pt-0 pb-3 pl-0 pr-[19px]">
          <h3 className="m-0 relative text-[length:inherit] font-[600] font-[inherit] z-[2]">
            Pricing
          </h3>
        </div>
        <button className="cursor-pointer border-Color-Elementary-White border-solid border-[1px] py-3 md:py-4 px-6 md:px-[39px] bg-[transparent] w-full md:w-auto md:self-stretch rounded-[40px] box-border flex items-start max-w-width-1780">
          <div className="flex items-start justify-center">
            <div className="self-stretch flex flex-col items-center">
              <div className="relative text-[18px] leading-[19px] font-[500] font-[Inter] text-Color-Elementary-White text-center">
                Login
              </div>
            </div>
          </div>
        </button>
        <button className="cursor-pointer [border:none] py-3 md:py-[18px] px-6 md:px-10 bg-[#024781] rounded-[40px] flex items-start box-border max-w-width-1780 w-full md:w-auto">
          <div className="flex items-start justify-center">
            <div className="self-stretch flex flex-col items-center">
              <div className="relative text-font-size-16 leading-line-height-19 font-font-weight-500 font-font-family-Font-1 text-color-grey-97 text-center">
                Start Free Trial
              </div>
            </div>
          </div>
        </button>
      </nav>
      <div className="self-stretch flex items-start max-w-full">
        <div className="w-full lg:w-[1393px] flex flex-col items-start gap-4 md:gap-[25px] max-w-full">
          <section className="w-full lg:w-[840px] flex items-start relative max-w-full text-left text-Color-Elementary-White font-[Inter]">
            <h1 className="m-0 relative text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-[80px] leading-tight font-[700] font-[inherit] z-[2]">
              Your Journey to Academic Excellence Starts Here
            </h1>
            <div className="hidden lg:block h-[959px] w-[1943px] absolute !!m-[0 important] right-[-903px] bottom-[-398px]">
              <div className="absolute top-[0px] left-[0px] [background:linear-gradient(-90deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.8))] w-full h-full z-[1]" />
              <img
                className="absolute top-[23px] left-[134px] w-[231px] h-[166px] object-cover [mix-blend-mode:linear-dodge] z-[2]"
                loading="lazy"
                alt=""
                src="/WhatsApp-Image-2025-08-13-at-12-40-23-AM-1@2x.png"
              />
            </div>
          </section>
          <div className="self-stretch flex flex-col lg:flex-row items-start justify-between gap-5 max-w-full">
            <section className="w-full lg:w-[619px] flex flex-col items-start gap-8 lg:gap-[69px] max-w-full text-left text-lg md:text-xl lg:text-[24px] text-Color-Elementary-White font-[Inter]">
              <div className="relative inline-block z-[2] leading-relaxed">
                Connect with expert tutors who understand your learning style.
                Get personalized guidance, track your progress, and achieve the
                grades you deserve.
              </div>
              <div className="flex flex-col sm:flex-row items-start gap-3.5 max-w-full w-full">
                <button className="cursor-pointer border-Color-Elementary-White border-solid border-[1px] py-3 md:py-4 px-6 md:px-[39px] bg-[transparent] rounded-[40px] box-border flex items-start max-w-width-1780 w-full sm:w-auto">
                  <div className="flex items-start justify-center">
                    <div className="self-stretch flex flex-col items-center">
                      <div className="relative text-[18px] leading-[19px] font-[500] font-[Inter] text-Color-Elementary-White text-center">
                        Start Your Free Trial
                      </div>
                    </div>
                  </div>
                </button>
                <button className="cursor-pointer [border:none] py-3 md:py-[18px] px-6 md:px-10 bg-[#024781] rounded-[40px] flex items-start box-border max-w-width-1780 w-full sm:w-auto">
                  <div className="flex items-start justify-center">
                    <div className="self-stretch flex flex-col items-center">
                      <div className="relative text-font-size-16 leading-line-height-19 font-font-weight-500 font-font-family-Font-1 text-color-grey-97 text-center">
                        Find Your Tutor
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </section>
            <section className="hidden lg:flex flex-col items-start pt-[19px] px-0 pb-0 box-border max-w-full">
              <div className="w-full flex-1 flex flex-col items-start max-w-width-1920">
                <div className="self-stretch flex-1 flex flex-col items-center">
                  <div className="w-[682px] overflow-hidden flex items-start max-w-width-691-2">
                    <div className="h-[355px] w-[682px] overflow-hidden shrink-0 flex flex-col items-center justify-center">
                      <Component1
                        variant={1}
                        clipPathGroup="/Clip-path-group5.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex w-[249.6px] h-[250px] !!m-[0 important] absolute right-[-49.6px] bottom-[-41px] flex-col items-start max-w-width-1920 z-[3]">
        <div className="self-stretch flex-1 flex flex-col items-center">
          <div className="w-[249.6px] overflow-hidden flex items-start max-w-width-249-6">
            <div className="h-[249.6px] w-[249.6px] overflow-hidden shrink-0 flex flex-col items-center justify-center">
              <Component1
                variant={3}
                component1Width="249.6px"
                component1Height="249.6px"
                clipPathGroup="/Clip-path-group10@2x.png"
                component1AlignSelf="unset"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
