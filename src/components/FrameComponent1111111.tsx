import { FunctionComponent, useState } from "react";
import Component1 from "./Component1";
import GroupComponent1 from "./GroupComponent1";

export type FrameComponent1111111Type = {
  className?: string;
};

const FrameComponent1111111: FunctionComponent<FrameComponent1111111Type> = ({
  className = "",
}) => {
  const [groupComponent1Items] = useState([
    {
      groupDivGap: "1188px",
      groupDivWidth: "1520px",
      rectangleDivWidth: "1520px",
      standardMostPopularmonth: "What if I don't like my tutor?",
      monthWidth: "238px",
    },
    {
      groupDivGap: "1168px",
      groupDivWidth: "1520px",
      rectangleDivWidth: "1520px",
      standardMostPopularmonth: "How do online sessions work?",
      monthWidth: "258px",
    },
    {
      groupDivGap: "1163px",
      groupDivWidth: "1520px",
      rectangleDivWidth: "1520px",
      standardMostPopularmonth: "Can parents monitor progress?",
      monthWidth: "263px",
    },
    {
      groupDivGap: "1179px",
      groupDivWidth: "1520px",
      rectangleDivWidth: "1520px",
      standardMostPopularmonth: "What subjects do you cover?",
      monthWidth: "247px",
    },
  ]);
  return (
    <section
      className={`self-stretch flex items-start pt-0 px-0 pb-[68.8px] box-border max-w-full ${className}`}
    >
      <div className="flex-1 flex flex-col items-start pt-[60px] px-[200px] pb-[58.2px] box-border relative gap-[50px] max-w-full z-[1]">
        <section className="w-96 !!m-[0 important] absolute right-[-384px] bottom-[-272.2px] flex flex-col items-start [transform:_rotate(180deg)] [transform-origin:0_0] max-w-width-1920 z-[0]">
          <div className="self-stretch flex flex-col items-center">
            <div className="w-96 overflow-hidden flex items-start max-w-width-384">
              <div className="h-[272.2px] w-96 overflow-hidden shrink-0 flex flex-col items-center justify-center">
                <Component1
                  variant={8}
                  component1Width="384px"
                  component1Height="272.2px"
                  clipPathGroup="/Clip-path-group3.svg"
                  component1AlignSelf="unset"
                />
              </div>
            </div>
          </div>
        </section>
        <div className="w-full h-full absolute !!m-[0 important] top-[0px] left-[0px] rounded-t-none rounded-br-none rounded-bl-Corner-Radius-rounded-xl bg-[rgba(51,208,221,0.1)] z-[1]" />
        <section className="self-stretch flex items-start justify-center py-0 pl-5 pr-6 box-border max-w-full text-center text-[44px] text-Colors-Neutral-N800 font-[Inter]">
          <div className="w-[1188px] flex flex-col items-end gap-5 max-w-full">
            <div className="flex items-start justify-end py-0 pl-[297px] pr-[294px]">
              <h2 className="m-0 h-[51px] relative text-[length:inherit] tracking-[-0.01em] leading-[115%] font-[700] font-[inherit] flex items-center justify-center z-[2]">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="self-stretch relative text-[18px] leading-[170%] text-Colors-Neutral-N500 z-[2]">
              <p className="m-0">
                Questions? We Have AnswersHow quickly can I get started?
              </p>
              <p className="m-0">
                You can book your first session within minutes of signing up.
                Most students are matched with a tutor and learning within 24
                hours.
              </p>
            </div>
          </div>
        </section>
        <div className="self-stretch flex flex-col items-start gap-5 max-w-full">
          <section className="self-stretch shadow-[0px_4px_8px_rgba(23,_24,_28,_0.08),_0px_2px_4px_rgba(23,_24,_28,_0.06)] rounded-lg bg-[#116ee0] flex flex-col items-start pt-[30px] pb-8 pl-10 pr-[30px] box-border gap-2.5 max-w-full z-[2] text-left text-[18px] text-[#f5f9eb] font-[Inter]">
            <img
              className="w-[1520px] h-[165px] relative rounded-Corner-Radius-rounded-lg hidden max-w-full"
              alt=""
              src="/Rectangle-204.svg"
            />
            <div className="self-stretch flex items-start justify-between gap-5">
              <div className="relative leading-[170%] font-[600] z-[1]">
                Are the tutors qualified?
              </div>
              <img
                className="h-6 w-6 relative z-[1]"
                loading="lazy"
                alt=""
                src="/expand-circle-up.svg"
              />
            </div>
            <div className="self-stretch relative leading-[170%] z-[1]">
              <p className="m-0">
                Every tutor goes through rigorous screening including background
                checks, degree verification, and teaching assessments.
              </p>
              <p className="m-0">Only 3% of applicants are accepted.</p>
            </div>
          </section>
          {groupComponent1Items.map((item, index) => (
            <GroupComponent1
              key={index}
              groupDivGap={item.groupDivGap}
              groupDivWidth={item.groupDivWidth}
              rectangleDivWidth={item.rectangleDivWidth}
              standardMostPopularmonth={item.standardMostPopularmonth}
              monthWidth={item.monthWidth}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1111111;
