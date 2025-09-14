import { FunctionComponent } from "react";
import GroupComponent1 from "./GroupComponent1";
import Component1 from "./Component1";

export type FrameComponent111111Type = {
  className?: string;
};

const FrameComponent111111: FunctionComponent<FrameComponent111111Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex items-start justify-end pt-0 px-0 pb-[109px] box-border max-w-full ${className}`}
    >
      <div className="w-[1740px] flex flex-col items-start py-0 pl-5 pr-0 box-border gap-[94.4px] max-w-full">
        <div className="self-stretch flex items-start gap-[22px] max-w-full">
          <section className="w-[619px] flex flex-col items-start gap-[133px] shrink-0 max-w-full text-left text-[16px] text-[#116ee0] font-[Inter]">
            <div className="self-stretch flex flex-col items-start gap-[30px] max-w-full">
              <div className="rounded-Corner-Radius-rounded-3xl bg-[#ecf3d8] flex items-center justify-center py-2.5 px-[19px]">
                <b className="relative tracking-[-0.01em] leading-[18px]">
                  FLEXIBLE PRICING
                </b>
              </div>
              <h1 className="m-0 w-[416px] h-[102px] relative text-[44px] tracking-[-0.01em] leading-[115%] font-[700] font-[inherit] text-Colors-Neutral-N800 flex items-center max-w-full">
                Simple, Transparent Pricing
              </h1>
              <div className="self-stretch relative text-[18px] leading-[170%] text-Colors-Neutral-N500">
                <ul className="m-0 font-[inherit] text-[length:inherit] pl-6">
                  <li>{`7-day free trial `}</li>
                  <li>{`No credit card required `}</li>
                  <li>Cancel anytime</li>
                </ul>
              </div>
            </div>
            <button className="cursor-pointer [border:none] pt-[13.5px] px-[35px] pb-[15.5px] bg-[#116ee0] shadow-[0px_5px_20px_rgba(0,_0,_0,_0.1)] rounded-[50px] flex items-start hover:bg-[#3894ff]">
              <b className="relative text-[14px] leading-[170%] font-[Inter] text-Color-Elementary-White text-center">
                VIEW ALL PLANS
              </b>
            </button>
          </section>
          <section className="w-[877px] flex flex-col items-start gap-5 shrink-0 max-w-full text-left text-[18px] text-[#f5f9eb] font-[Inter]">
            <div className="self-stretch shadow-[0px_4px_8px_rgba(23,_24,_28,_0.08),_0px_2px_4px_rgba(23,_24,_28,_0.06)] rounded-lg bg-[#116ee0] flex flex-col items-start pt-[30px] pb-6 pl-10 pr-[27px] box-border gap-[17px] max-w-full">
              <img
                className="w-[877px] h-[310px] relative rounded-Corner-Radius-rounded-lg hidden max-w-full"
                alt=""
                src="/Rectangle-2042.svg"
              />
              <div className="self-stretch flex flex-col items-start gap-2.5 max-w-full">
                <div className="self-stretch flex items-start justify-between gap-5">
                  <div className="relative leading-[170%] z-[1]">
                    <span className="font-[600]">{`Basic Plan `}</span>
                    <i className="font-[600]">Perfect for occasional help</i>
                    <span className="font-[600]">{` `}</span>
                  </div>
                  <img
                    className="h-6 w-6 relative z-[1]"
                    alt=""
                    src="/expand-circle-up.svg"
                  />
                </div>
                <div className="w-[416px] relative leading-[170%] inline-block max-w-full z-[1]">
                  <ul className="m-0 font-[inherit] text-[length:inherit] pl-6">
                    <li>4 tutoring sessions per month</li>
                    <li>Progress tracking dashboard</li>
                    <li>Access to study resources</li>
                    <li>Email support</li>
                    <li>Session recordings</li>
                  </ul>
                </div>
              </div>
              <div className="self-stretch flex items-end justify-between gap-5">
                <div className="flex items-end gap-[5px]">
                  <div className="relative leading-[170%] z-[1]">$</div>
                  <div className="flex flex-col items-start justify-end pt-0 px-0 pb-px text-[36px]">
                    <h2 className="m-0 relative text-[length:inherit] tracking-[-0.01em] leading-[120%] font-[700] font-[inherit] z-[1]">
                      19
                    </h2>
                  </div>
                  <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[3px] text-[14px] text-[rgba(245,249,235,0.6)]">
                    <div className="relative leading-[170%] z-[1]">
                      / Monthly
                    </div>
                  </div>
                </div>
                <button className="cursor-pointer border-[#f5f9eb] border-solid border-[1px] py-1 px-3.5 bg-[transparent] rounded-Corner-Radius-rounded-3xl flex items-center justify-center z-[1] hover:bg-[rgba(219,224,209,0.09)] hover:border-[#dbe0d1] hover:border-solid hover:hover:border-[1px] hover:box-border">
                  <b className="relative text-[12px] leading-[170%] font-[Inter] text-[#f5f9eb] text-center">
                    Start Free Trial
                  </b>
                </button>
              </div>
            </div>
            <GroupComponent1 standardMostPopularmonth="Standard - Most Popular - $39/month" />
            <GroupComponent1
              groupDivGap="20px"
              groupDivWidth="unset"
              rectangleDivWidth="877px"
              standardMostPopularmonth="Premium - $79/month"
              monthWidth="unset"
            />
          </section>
          <div className="flex flex-col items-start pt-[234px] px-0 pb-0">
            <div className="w-full flex-1 flex flex-col items-start max-w-width-1920 shrink-0">
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
          </div>
        </div>
        <section className="flex flex-col items-start py-0 pl-0 pr-5 box-border gap-[100px] max-w-full text-center text-[44px] text-Colors-Neutral-N800 font-[Inter]">
          <div className="self-stretch h-px relative border-[#454545] border-solid border-t-[1px] box-border z-[1]" />
          <div className="self-stretch flex items-start py-0 px-3.5 box-border max-w-full">
            <div className="flex-1 flex items-start gap-[52.2px] max-w-full z-[1]">
              <div className="flex-1 flex flex-col items-end relative gap-2.5 max-w-[205px]">
                <div className="w-[134px] h-2.5 absolute !!m-[0 important] top-[41px] right-[35px] bg-[rgba(17,110,224,0.5)]" />
                <div className="self-stretch flex items-start justify-end py-0 pl-[13px] pr-3">
                  <h2 className="m-0 w-[180px] relative text-[length:inherit] tracking-[-0.01em] leading-[115%] font-[700] font-[inherit] inline-block z-[1]">
                    10,000+
                  </h2>
                </div>
                <b className="self-stretch relative text-[16px] leading-[150%] uppercase text-Colors-Neutral-N700">
                  Students improving their grades
                </b>
              </div>
              <div className="flex-1 flex flex-col items-end gap-2.5 max-w-[205px]">
                <div className="self-stretch flex items-start justify-end py-0 pl-[45px] pr-[43px]">
                  <div className="flex-1 flex items-start relative">
                    <div className="h-2.5 w-[134px] absolute !!m-[0 important] bottom-[0px] left-[-9px] bg-[rgba(17,110,224,0.5)]" />
                    <h2 className="m-0 w-[117px] relative text-[length:inherit] tracking-[-0.01em] leading-[115%] font-[700] font-[inherit] inline-block z-[1]">
                      500+
                    </h2>
                  </div>
                </div>
                <b className="relative text-[16px] leading-[150%] uppercase text-Colors-Neutral-N700">
                  Verified expert tutors
                </b>
              </div>
              <div className="flex-1 flex flex-col items-end gap-2.5 max-w-[205px]">
                <div className="self-stretch flex items-start justify-end py-0 pl-[59px] pr-[58px]">
                  <div className="flex-1 flex items-start relative">
                    <div className="h-2.5 w-[134px] absolute !!m-[0 important] bottom-[0px] left-[calc(50%_-_67px)] bg-[rgba(17,110,224,0.5)]" />
                    <h2 className="m-0 w-[88px] relative text-[length:inherit] tracking-[-0.01em] leading-[115%] font-[700] font-[inherit] inline-block z-[1]">
                      50+
                    </h2>
                  </div>
                </div>
                <b className="self-stretch h-10 relative text-[16px] leading-[150%] uppercase inline-block text-Colors-Neutral-N700 shrink-0">
                  Subjects covered
                </b>
              </div>
              <div className="flex-1 flex flex-col items-end gap-2.5 max-w-[205px]">
                <div className="self-stretch flex items-start justify-end py-0 pl-[46px] pr-[45px]">
                  <div className="flex-1 flex items-start relative">
                    <div className="h-2.5 w-[134px] absolute !!m-[0 important] bottom-[0px] left-[calc(50%_-_67px)] bg-[rgba(17,110,224,0.5)]" />
                    <h2 className="m-0 relative text-[length:inherit] tracking-[-0.01em] leading-[115%] font-[700] font-[inherit] z-[1]">
                      4.9/5
                    </h2>
                  </div>
                </div>
                <b className="self-stretch relative text-[16px] leading-[150%] uppercase text-Colors-Neutral-N700">
                  <p className="m-0">Average tutor</p>
                  <p className="m-0">rating</p>
                </b>
              </div>
              <div className="flex-1 flex flex-col items-start relative gap-2.5 min-w-[202px] max-w-[206px]">
                <div className="w-[134px] h-2.5 absolute !!m-[0 important] top-[41px] left-[calc(50%_-_67px)] bg-[rgba(17,110,224,0.5)]" />
                <div className="flex items-start py-0 px-px">
                  <h2 className="m-0 relative text-[length:inherit] tracking-[-0.01em] leading-[115%] font-[700] font-[inherit] shrink-0 z-[1]">
                    2 Million+
                  </h2>
                </div>
                <b className="self-stretch relative text-[16px] leading-[150%] uppercase text-Colors-Neutral-N700">
                  Tutoring hours completed
                </b>
              </div>
              <div className="flex-1 flex flex-col items-end gap-2.5 max-w-[205px]">
                <div className="self-stretch flex items-start justify-end py-0 pl-14 pr-[49px]">
                  <div className="flex-1 flex items-start relative">
                    <div className="h-2.5 w-[134px] absolute !!m-[0 important] bottom-[0px] left-[-20px] bg-[rgba(17,110,224,0.5)]" />
                    <h2 className="m-0 relative text-[length:inherit] tracking-[-0.01em] leading-[115%] font-[700] font-[inherit] inline-block min-w-[100px] z-[1]">
                      95%
                    </h2>
                  </div>
                </div>
                <b className="self-stretch relative text-[16px] leading-[150%] uppercase text-Colors-Neutral-N700">
                  Of students improve by one letter grade
                </b>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default FrameComponent111111;
