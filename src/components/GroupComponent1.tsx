import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type GroupComponent1Type = {
  className?: string;
  standardMostPopularmonth?: string;

  /** Style props */
  groupDivGap?: CSSProperties["gap"];
  groupDivWidth?: CSSProperties["width"];
  rectangleDivWidth?: CSSProperties["width"];
  monthWidth?: CSSProperties["width"];
};

const GroupComponent1: FunctionComponent<GroupComponent1Type> = ({
  className = "",
  groupDivGap,
  groupDivWidth,
  rectangleDivWidth,
  standardMostPopularmonth,
  monthWidth,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      gap: groupDivGap,
      width: groupDivWidth,
    };
  }, [groupDivGap, groupDivWidth]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      width: rectangleDivWidth,
    };
  }, [rectangleDivWidth]);

  const monthStyle: CSSProperties = useMemo(() => {
    return {
      width: monthWidth,
    };
  }, [monthWidth]);

  return (
    <div
      className={`self-stretch shadow-[0px_4px_8px_-2px_rgba(23,_24,_28,_0.08),_0px_2px_4px_-2px_rgba(23,_24,_28,_0.06)] rounded-lg bg-Color-Elementary-White flex items-end justify-between pt-4 pb-[17px] pl-10 pr-[30px] box-border gap-5 max-w-full text-left text-[18px] text-Colors-Neutral-N800 font-[Inter] ${className}`}
      style={groupDivStyle}
    >
      <div
        className="h-16 w-[877px] relative shadow-[0px_4px_8px_-2px_rgba(23,_24,_28,_0.08),_0px_2px_4px_-2px_rgba(23,_24,_28,_0.06)] rounded-Corner-Radius-rounded-lg bg-Color-Elementary-White hidden max-w-full"
        style={rectangleDivStyle}
      />
      <div className="relative leading-[170%] z-[1]" style={monthStyle}>
        {standardMostPopularmonth}
      </div>
      <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[3px]">
        <img
          className="w-6 h-6 relative z-[1]"
          alt=""
          src="/expand-circle-down.svg"
        />
      </div>
    </div>
  );
};

export default GroupComponent1;
