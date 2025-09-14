import { FunctionComponent } from "react";

export type Component11Type = {
  className?: string;

  /** Variant props */
  variant?: 15;
};

const Component11: FunctionComponent<Component11Type> = ({
  className = "",
  variant = 1,
}) => {
  return (
    <div className={`w-[18px] relative h-[18px] ${className}`}>
      <img
        className="absolute h-[86.11%] w-full top-[7.22%] right-[0%] bottom-[6.67%] left-[0%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/Vector7.svg"
      />
      <img
        className="absolute h-[21.11%] w-[53.33%] top-[32.78%] right-[23.33%] bottom-[46.11%] left-[23.33%] max-w-full overflow-hidden max-h-full z-[1]"
        alt=""
        src="/Vector2.svg"
      />
    </div>
  );
};

export default Component11;
