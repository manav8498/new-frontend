import { FunctionComponent } from "react";
import Component1 from "./Component1";

export type FrameComponent11Type = {
  className?: string;
};

const FrameComponent11: FunctionComponent<FrameComponent11Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex items-start justify-center pt-0 pb-[139px] pl-[21px] pr-5 box-border max-w-full text-center text-[50px] text-color-black-solid font-[Inter] ${className}`}
    >
      <div className="w-[1521px] flex flex-col items-start gap-[60px] max-w-full">
        <div className="flex items-start py-0 px-[167px]">
          <h2 className="m-0 relative text-[length:inherit] font-[700] font-[inherit]">
            Everything You Need to Succeed in One Platform
          </h2>
        </div>
        <div className="self-stretch flex items-start flex-wrap content-start gap-x-[21px] gap-y-[30px] min-h-[910px] max-w-full">
          <section className="w-[491px] rounded-[10px] border-[rgba(112,112,112,0.6)] border-solid border-[1px] box-border flex flex-col items-start pt-[60px] pb-[55px] pl-[45px] pr-11 gap-[50px] max-w-full text-center text-[28px] text-[#2e2e35] font-[Inter]">
            <div className="w-[491px] h-[440px] relative rounded-[10px] border-[rgba(112,112,112,0.6)] border-solid border-[1px] box-border hidden max-w-full" />
            <div className="self-stretch flex items-start justify-center py-0 pl-0 pr-px">
              <img
                className="h-[94px] w-[79px] relative z-[1]"
                loading="lazy"
                alt=""
                src="/Feature-Icon.svg"
              />
            </div>
            <div className="self-stretch flex flex-col items-start gap-5">
              <div className="flex items-start py-0 pl-[106px] pr-[107px]">
                <h2 className="m-0 w-[187px] relative text-[length:inherit] font-[700] font-[inherit] inline-block z-[1]">
                  Expert Tutors
                </h2>
              </div>
              <div className="h-[123px] relative text-[20px] text-Colors-Neutral-N600 flex items-center justify-center z-[1]">
                Verified Subject ExpertsEvery tutor is background-checked,
                degree-verified, and rated by students. We match you with tutors
                who specialize in your exact curriculum and learning needs.
              </div>
            </div>
          </section>
          <section className="w-[491px] rounded-[10px] border-[rgba(112,112,112,0.6)] border-solid border-[1px] box-border flex flex-col items-start pt-[69px] pb-[55px] pl-[45px] pr-11 gap-[58px] max-w-full text-center text-[28px] text-[#2e2e35] font-[Inter]">
            <div className="w-[491px] h-[440px] relative rounded-[10px] border-[rgba(112,112,112,0.6)] border-solid border-[1px] box-border hidden max-w-full" />
            <div className="self-stretch flex items-start justify-center py-0 pl-0 pr-px">
              <img
                className="h-[77px] w-[99px] relative z-[1]"
                loading="lazy"
                alt=""
                src="/Vector8.svg"
              />
            </div>
            <div className="self-stretch flex flex-col items-start gap-5">
              <div className="flex items-start py-0 pl-[47px] pr-12">
                <h2 className="m-0 relative text-[length:inherit] font-[700] font-[inherit] z-[1]">
                  Personalized Learning
                </h2>
              </div>
              <div className="h-[123px] relative text-[20px] text-Colors-Neutral-N600 flex items-center z-[1]">
                <span>
                  <p className="m-0">Tailored to Your Pace</p>
                  <p className="m-0">
                    Our AI-powered system adapts to your learning style,
                    identifying knowledge gaps and creating custom study plans
                    that actually work for you.
                  </p>
                </span>
              </div>
            </div>
          </section>
          <section className="w-[491px] rounded-[10px] border-[rgba(112,112,112,0.6)] border-solid border-[1px] box-border flex flex-col items-start pt-[60px] pb-[55px] pl-[45px] pr-11 gap-[50px] max-w-full text-center text-[28px] text-[#2e2e35] font-[Inter]">
            <div className="w-[491px] h-[440px] relative rounded-[10px] border-[rgba(112,112,112,0.6)] border-solid border-[1px] box-border hidden max-w-full" />
            <div className="self-stretch flex items-start justify-center py-0 pl-0 pr-px">
              <img
                className="h-[94px] w-[79px] relative z-[1]"
                loading="lazy"
                alt=""
                src="/Vector.svg"
              />
            </div>
            <div className="self-stretch flex flex-col items-start gap-5">
              <div className="flex items-start py-0 pl-[65px] pr-[66px]">
                <h2 className="m-0 w-[269px] relative text-[length:inherit] font-[700] font-[inherit] inline-block z-[1]">
                  Real-Time Progress
                </h2>
              </div>
              <div className="h-[123px] relative text-[20px] text-Colors-Neutral-N600 flex items-center z-[1]">
                <span>
                  <p className="m-0">Track Every Milestone</p>
                  <p className="m-0">
                    See your improvement with detailed analytics. Know exactly
                    where you stand and what to focus on next with actionable
                    insights after every session.
                  </p>
                </span>
              </div>
            </div>
          </section>
          <section className="w-[491px] rounded-[10px] border-[rgba(112,112,112,0.6)] border-solid border-[1px] box-border flex flex-col items-start pt-[55px] pb-[69px] pl-[45px] pr-11 relative gap-[60px] max-w-full text-center text-[28px] text-[#2e2e35] font-[Inter]">
            <div className="w-[491px] h-[440px] relative rounded-[10px] border-[rgba(112,112,112,0.6)] border-solid border-[1px] box-border hidden max-w-full z-[0]" />
            <div className="self-stretch flex items-start justify-center">
              <img
                className="h-[78px] w-[90px] relative z-[1]"
                loading="lazy"
                alt=""
                src="/Vector4.svg"
              />
            </div>
            <div className="self-stretch flex flex-col items-start gap-5">
              <div className="flex items-start py-0 px-[66px]">
                <h2 className="m-0 w-[268px] relative text-[length:inherit] font-[700] font-[inherit] inline-block z-[1]">
                  Flexible Scheduling
                </h2>
              </div>
              <div className="h-[120px] relative text-[20px] text-Colors-Neutral-N600 flex items-center z-[1]">
                <span>
                  <p className="m-0">Learn on Your Schedule</p>
                  <p className="m-0">
                    Book sessions when you need them - whether it's late-night
                    homework help or weekend exam prep. Your tutor is available
                    when you are.
                  </p>
                </span>
              </div>
            </div>
            <div className="w-96 !!m-[0 important] absolute bottom-[-150.2px] left-[-200px] flex flex-col items-start max-w-width-1920 z-[3]">
              <div className="self-stretch flex-1 flex flex-col items-center">
                <div className="w-96 overflow-hidden flex items-start max-w-width-384">
                  <div className="h-[272.2px] w-96 overflow-hidden shrink-0 flex flex-col items-center justify-center">
                    <Component1
                      variant={8}
                      component1Width="378px"
                      component1Height="269px"
                      clipPathGroup="/demo-corporate-10-png@2x.png"
                      component1AlignSelf="unset"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-[491px] rounded-[10px] border-[rgba(112,112,112,0.6)] border-solid border-[1px] box-border flex flex-col items-start pt-[53px] pb-[69px] pl-[45px] pr-11 gap-[57px] max-w-full text-center text-[28px] text-[#2e2e35] font-[Inter]">
            <div className="w-[491px] h-[440px] relative rounded-[10px] border-[rgba(112,112,112,0.6)] border-solid border-[1px] box-border hidden max-w-full" />
            <div className="self-stretch flex items-start justify-center">
              <img
                className="h-[83px] w-[86px] relative z-[1]"
                loading="lazy"
                alt=""
                src="/Vector6.svg"
              />
            </div>
            <div className="self-stretch flex flex-col items-start gap-5">
              <div className="flex items-start py-0 pl-[85px] pr-[86px]">
                <h2 className="m-0 w-[229px] relative text-[length:inherit] font-[700] font-[inherit] inline-block z-[1]">
                  Interactive Tools
                </h2>
              </div>
              <div className="h-[120px] relative text-[20px] text-Colors-Neutral-N600 flex items-center justify-center z-[1]">
                Engaging Learning Experience Collaborate with screen sharing,
                digital whiteboards, file uploads, and instant messaging.
                Learning online feels just like being there in person.
              </div>
            </div>
          </section>
          <section className="w-[491px] rounded-[10px] border-[rgba(112,112,112,0.6)] border-solid border-[1px] box-border flex flex-col items-start py-[45px] pl-[45px] pr-11 gap-[50px] max-w-full text-center text-[28px] text-[#2e2e35] font-[Inter]">
            <div className="w-[491px] h-[440px] relative rounded-[10px] border-[rgba(112,112,112,0.6)] border-solid border-[1px] box-border hidden max-w-full" />
            <div className="self-stretch flex items-start justify-center py-0 pl-0 pr-px">
              <img
                className="h-[98px] w-[85px] relative z-[1]"
                loading="lazy"
                alt=""
                src="/Vector5.svg"
              />
            </div>
            <div className="self-stretch flex flex-col items-start gap-5">
              <div className="flex items-start py-0 pl-[85px] pr-[86px]">
                <h2 className="m-0 relative text-[length:inherit] font-[700] font-[inherit] z-[1]">
                  Complete Safety
                </h2>
              </div>
              <div className="h-36 relative text-[20px] text-Colors-Neutral-N600 flex items-center z-[1]">
                <span>
                  <p className="m-0">Protected Learning Environment</p>
                  <p className="m-0">
                    All sessions are monitored for safety. Secure payments,
                    encrypted communications, and verified users ensure peace of
                    mind for parents and students.
                  </p>
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent11;
