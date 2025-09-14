import { FunctionComponent } from "react";

export type FrameComponent1111Type = {
  className?: string;
};

const FrameComponent1111: FunctionComponent<FrameComponent1111Type> = ({
  className = "",
}) => {
  return (
    <main
      className={`self-stretch flex items-start justify-end pt-0 px-0 pb-[109px] box-border max-w-full ${className}`}
    >
      <div className="w-[1740px] flex items-start py-0 pl-5 pr-0 box-border gap-[60px] max-w-full">
        <div className="flex flex-col items-start gap-[135px] min-w-[680px] max-w-full">
          <section className="w-[663px] flex flex-col items-start py-0 pl-0 pr-5 box-border gap-[30px] max-w-full text-left text-[16px] text-[#116ee0] font-[Inter]">
            <div className="rounded-Corner-Radius-rounded-3xl bg-[#d8e9ff] flex items-center justify-center py-2.5 px-5 z-[3] text-center">
              <b className="w-[138px] relative tracking-[-0.01em] leading-[18px] uppercase flex items-center justify-center shrink-0">
                For Students
              </b>
            </div>
            <h1 className="m-0 w-[540px] relative text-[56px] leading-[125%] font-[700] font-[inherit] text-Colors-Neutral-N800 flex items-center max-w-full">
              Get the Grades You Deserve
            </h1>
            <div className="relative text-[18px] leading-[170%] text-Colors-Neutral-N400">
              <p className="m-0">
                Master difficult concepts with one-on-one attention. Whether
                it's catching up, keeping up, or getting ahead, your tutor
                creates a learning plan just for you. No more struggling alone
                with homework or feeling lost in
              </p>
              <p className="m-0">class.</p>
              <ul className="m-0 font-[inherit] text-[length:inherit] pl-6">
                <li>Instant homework help when you're stuck</li>
                <li>Exam preparation that actually works</li>
                <li>Build confidence in challenging subjects</li>
                <li>Learn at your own pace without judgmentFor Parents</li>
              </ul>
              <p className="m-0">Support Your Child's Success</p>
              <p className="m-0">
                Know exactly how your child is progressing with transparent
                reporting and regular updates.
              </p>
              <p className="m-0">
                Communicate directly with tutors and see the improvement in
                real-time. Invest in their future with confidence.
              </p>
              <ul className="m-0 font-[inherit] text-[length:inherit] pl-6">
                <li>Weekly progress reports delivered to your inbox</li>
                <li>Direct communication with qualified tutors</li>
                <li>Safe, monitored learning environment</li>
                <li>Affordable plans that fit your budget</li>
              </ul>
            </div>
          </section>
          <div className="self-stretch h-[473px] relative">
            <img
              className="absolute top-[0px] left-[0px] w-[570px] h-[380px] object-cover"
              alt=""
              src="/Mask-group2@2x.png"
            />
            <img
              className="absolute top-[193px] left-[270px] w-[410px] h-[280px] object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/Mask-group@2x.png"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start gap-[21.6px] min-w-[637px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-end pt-[894px] px-8 pb-[8.4px] relative">
            <button className="cursor-pointer [border:none] py-2.5 px-5 bg-[#d8e9ff] rounded-Corner-Radius-rounded-3xl flex items-center justify-center z-[0] hover:bg-[#bfd1e6]">
              <b className="w-[138px] relative text-[16px] tracking-[-0.01em] leading-[18px] uppercase flex font-[Inter] text-[#116ee0] text-center items-center justify-center shrink-0">
                For Tutors
              </b>
            </button>
            <div className="w-full h-full absolute !!m-[0 important] top-[0px] right-[0px] bottom-[0px] left-[0px]">
              <img
                className="absolute top-[477px] left-[615px] w-[424.1px] h-[463.4px]"
                loading="lazy"
                alt=""
                src="/Clip-path-group.svg"
              />
              <img
                className="absolute top-[0px] left-[115px] w-[665px] h-[660px] object-cover z-[1]"
                alt=""
                src="/Mask-group2@2x.png"
              />
              <img
                className="absolute top-[374px] left-[0px] w-[462px] h-[380px] object-cover z-[2]"
                alt=""
                src="/Mask-group@2x.png"
              />
            </div>
          </div>
          <section className="w-[812px] flex items-start py-0 px-8 box-border max-w-full text-left text-[56px] text-Colors-Neutral-N800 font-[Inter]">
            <div className="flex-1 flex flex-col items-start gap-[30px] max-w-full">
              <h1 className="m-0 relative text-[length:inherit] leading-[125%] font-[700] font-[inherit]">
                Share Your Knowledge, Grow Your Income
              </h1>
              <div className="w-[643px] relative text-[18px] leading-[170%] text-Colors-Neutral-N400 inline-block max-w-full">
                <p className="m-0">
                  Turn your expertise into opportunity. Set your own schedule,
                  choose your students, and teach subjects you're passionate
                  about. We handle the technology and payments so you can focus
                  on teaching.
                </p>
                <ul className="m-0 font-[inherit] text-[length:inherit] pl-6">
                  <li>Earn $30-80 per hour teaching online</li>
                  <li>Work from anywhere with flexible hours</li>
                  <li>Access to teaching resources and support</li>
                  <li>Build your reputation with student reviews</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default FrameComponent1111;
